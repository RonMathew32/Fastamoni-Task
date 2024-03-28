import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
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
import { getUserProfile, setUserClear, setUserData } from '../../redux/actions/user.actions';
import routes from '../../constants/routes';

const HomeScreen = ({navigation}) => {
  const { dispatch, user_id, user, loading, setLoading, token} = useReduxStore();
  const name = user?.data?.first_name
    ? `${user?.data?.first_name} ${user?.data?.last_name}`
    : '';
  const translateX = useSharedValue(-100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(translateX.value)}],
    };
  });


  const getUserDetails = useCallback(() => {
    if (!user?.id) {
      dispatch(
        getUserProfile({
          token,
          param: user_id,
          setLoading,
          ToastMessageLight,
          setUserData: setUserData
        }),
      );
    }
  },[dispatch, setLoading, ToastMessageLight, user?.id]);

  const onPressLogout = useCallback(() => {
    dispatch(setUserClear())
    dispatch(setLogout());
    ToastMessageLight('Logout Successfully');
  }, [dispatch]);

  const onPressEditProfile = useCallback(()=> {
    navigation.navigate(routes?.EditProfile)
  },[navigation, routes])

  useEffect(() => {
    translateX.value = 0;
    getUserDetails();
  }, []);


  return loading ? (
    <AppLoading />
  ) : (
    <View style={[globalStyles.container, styles.container]}>
      <Animated.View
        style={[styles.userContainer, globalStyles.alignR, animatedStyle]}>
        {user?.data?.avatar ? (
          <Image source={{uri: user?.data?.avatar}} style={styles.avatar} />
        ) : null}
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{user?.data?.email}</Text>
        </View>
      </Animated.View>
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
