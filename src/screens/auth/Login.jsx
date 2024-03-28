import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, normalize, wp} from '../../theme/dimensions';
import {COLORS} from '../../theme/colors';
import InputText from '../../components/AppInputText';
import {getLogin, setLogin} from '../../redux/actions/auth.actions';
import {ToastMessageLight} from '../../utils/showToast';
import useReduxStore from '../../hooks/useReduxStore';
import AppButton from '../../components/AppButton';
import globalStyles from '../../theme/globalStyles';
import routes from '../../constants/routes';
import images from '../../constants/images';

const Login = ({navigation}) => {
  const {dispatch, loading, setLoading, user, token} = useReduxStore();
  const [data, setData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };

  const onLoginPress = async () => {
    dispatch(
      getLogin({
        payload: data,
        setLoading,
        ToastMessageLight,
        setLogin: setLogin,
      }),
    );
  };

  return (
    <SafeAreaView style={globalStyles.containerAuth}>
      <StatusBar barStyle="light-content" />
      <Image
        source={images.loginBgImage}
        style={styles.backimg}
        resizeMode="cover"
      />
      <View style={styles.wrapContainer}>
        <View style={styles.inputmainbox}>
          <InputText
            placeholder={'Enter Email'}
            value={data.email}
            multiline={false}
            onChangeText={val => onChangeValue('email', val)}
            containerStyle={styles.containerStyle}
          />
          <InputText
            placeholder={'Enter Password'}
            value={data.password}
            multiline={false}
            onChangeText={val => onChangeValue('password', val)}
            secureTextEntry={true}
            containerStyle={styles.containerStyle}
          />

          <AppButton title="Sign In" loading={loading} onPress={onLoginPress} />

          <Text style={styles.donttxt}>
            Don’t have an account?{'  '}
            <Text
              onPress={() => navigation.navigate(routes.Register)}
              style={styles.signuptxt}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapContainer: {
    backgroundColor: COLORS.background,
    height: '100%',
    top: hp(-5),
    borderTopLeftRadius: 70,
    paddingTop: hp(5),
  },
  backimg: {
    width: '100%',
    height: hp(30),
  },
  logo: {
    width: wp(70),
    height: hp(20),
  },
  inputmainbox: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
  containerStyle: {
    height: hp(6.3),
    marginBottom: hp(2),
    flex: 0,
  },
  forgottxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: COLORS.black,
    alignSelf: 'flex-end',
    marginTop: -hp(1),
    marginRight: wp(2),
  },
  donttxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: COLORS.black,
    marginTop: hp(4),
    alignSelf: 'center',
  },
  signuptxt: {
    color: COLORS?.primary,
  },
});
