import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import globalStyles from '../../theme/globalStyles';
import useReduxStore from '../../hooks/useReduxStore';
import AppInputText from '../../components/AppInputText';
import {hp, wp} from '../../theme/dimensions';
import {COLORS} from '../../theme/colors';
import AppButton from '../../components/AppButton';
import {
  getUserProfile,
  setUserData,
  updateUserProfile,
} from '../../redux/actions/user.actions';
import {ToastMessageLight} from '../../utils/showToast';

const EditProfile = ({navigation}) => {
  const {user, dispatch, token, setLoading, loading, user_id} = useReduxStore();
  const [data, setData] = useState({
    first_name: user?.data?.first_name,
    last_name: user?.data?.last_name,
    email: user?.data?.email,
    text: user?.support?.text,
  });

  console.log(user);

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };

  const getUserDetails = useCallback(() => {
    dispatch(
      getUserProfile({
        token,
        param: user_id,
        setLoading,
        ToastMessageLight,
        setUserData: setUserData,
      }),
    );
  }, [dispatch, setLoading, ToastMessageLight, user?.id]);

  const onSuccess = () => {
    navigation.goBack();
  };

  const onPressUpdate = useCallback(() => {
    dispatch(
      updateUserProfile({
        user,
        payload: data,
        param: user_id,
        token,
        setLoading,
        onSuccess: onSuccess
      }),
    );
  }, [dispatch, data, user_id, token, setLoading, navigation]);


  return (
    <View style={[globalStyles.containerBG, {paddingHorizontal: wp(5)}]}>
      <Text style={styles.heading}>Edit Profile</Text>
      <AppInputText
        placeholder={'First Name'}
        value={data.first_name}
        multiline={false}
        onChangeText={val => onChangeValue('first_name', val)}
        containerStyle={styles.containerStyle}
        textInputStyle={styles.input}
      />
      <AppInputText
        placeholder={'Last Name'}
        value={data.last_name}
        multiline={false}
        onChangeText={val => onChangeValue('last_name', val)}
        containerStyle={styles.containerStyle}
        textInputStyle={styles.input}
      />
      <AppInputText
        placeholder={'Email'}
        value={data.email}
        multiline={false}
        onChangeText={val => onChangeValue('email', val)}
        containerStyle={styles.containerStyle}
        textInputStyle={styles.input}
      />
      <AppInputText
        placeholder={'Headline'}
        value={data.text}
        multiline={true}
        onChangeText={val => onChangeValue('text', val)}
        containerStyle={styles.containerStyle}
        textInputStyle={styles.input}
      />
      <AppButton
        title="Update"
        onPress={onPressUpdate}
        style={{width: wp(70)}}
        loading={loading}
      />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
    input: {color:'white'},
  heading: {
    color: COLORS.black,
    fontSize: hp(3),
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: hp(2.5),
  },
  containerStyle: {
    height: hp(6.3),
    marginBottom: hp(2),
    flex: 0,
  },
});
