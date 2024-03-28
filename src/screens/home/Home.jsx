import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import globalStyles from '../../theme/globalStyles';
import useReduxStore from '../../hooks/useReduxStore';
import {
  setLogout,
} from '../../redux/actions/auth.actions';
import {ToastMessageLight} from '../../utils/showToast';
import {COLORS} from '../../theme/colors';
import AppButton from '../../components/AppButton';
import {wp} from '../../theme/dimensions';
import AppLoading from '../../components/AppLoading';
import { getUserProfile, setUserClear, setUserData, setUserProfile } from '../../redux/actions/user.actions';
import routes from '../../constants/routes';
import { BASE_URL } from '@env';
import { useSelector } from 'react-redux';

const HomeScreen = ({navigation}) => {
  const { dispatch, user_id, loading, setLoading, token} = useReduxStore();
  const {user} = useSelector(state =>state?.userRed)
  const name = user?.data?.first_name
    ? `${user?.data?.first_name} ${user?.data?.last_name}`
    : '';

  // const getUserDetails = useCallback(() => {
  //     dispatch(
  //       getUserProfile({
  //         token,
  //         param: user_id,
  //         setLoading,
  //         ToastMessageLight,
  //       }),
  //     );
  // },[dispatch, setLoading, ToastMessageLight, user?.id]);

  const onPressLogout = useCallback(() => {
    dispatch(setUserClear())
    dispatch(setLogout());
    ToastMessageLight('Logout Successfully');
  }, [dispatch]);

  const onPressEditProfile = useCallback(()=> {
    navigation.navigate(routes?.EditProfile)
  },[navigation, routes])

  const fetchData = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/4`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      dispatch(setUserProfile(data))
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    if(!user?.data?.id){
      fetchData();
    }
  }, []);


  return loading ? (
    <AppLoading />
  ) : (
    <View style={[globalStyles.container, styles.container]}>
      <View
        style={[styles.userContainer, globalStyles.alignR]}>
        {user?.data?.avatar ? (
          <Image source={{uri: user?.data?.avatar}} style={styles.avatar} />
        ) : null}
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{user?.data?.email}</Text>
        </View>
      </View>
      <View style={styles.supportContainer}>
        <Text style={styles.supportText}>{user?.support?.text}</Text>
      </View>
      <AppButton
          title="Edit Profile"
          onPress={onPressEditProfile}
          style={{width: wp(70)}}
        />
      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        <AppButton
          title="Logout"
          onPress={onPressLogout}
          style={{width: wp(90)}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  userContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  userInfo: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
  supportContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  supportText: {
    textAlign: 'center',
    color: COLORS.white,
  },
});

export default HomeScreen;
