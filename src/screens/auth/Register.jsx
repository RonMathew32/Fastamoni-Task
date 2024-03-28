import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import {logo} from '../../theme/images';
import {hp, normalize, wp} from '../../theme/dimensions';
import InputText from '../../components/AppInputText';
import {ToastMessageLight} from '../../utils/showToast';
import useReduxStore from '../../hooks/useReduxStore';
import AppButton from '../../components/AppButton';
import { COLORS } from '../../theme/colors';
import routes from '../../constants/routes';
import KeyboardAvoidingViewWrapper from '../../components/KeyboardAvoidingViewWrapper';
import globalStyles from '../../theme/globalStyles';
import { getRegsitered, setRegsitered } from '../../redux/actions/auth.actions';
import images from '../../constants/images';

const Register = ({navigation}) => {
  const {dispatch, loading, setLoading} = useReduxStore();
  const [form, setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "pistol",
    firstName: 'Eve',
    lastName: 'Holt',
  });

  const onChangeValue = (key, value) => {
    setForm({...form, [key]: value});
  };

  const onSuccess = () => {
    navigation.navigate(routes?.Login)
  };


  const onSignUpPress = () => {
      dispatch(
        getRegsitered({
          payload: form,
          setLoading,
          ToastMessageLight,
          onSuccess: onSuccess,
          setRegsitered
        }),
      );
  };


  return (
    <SafeAreaView style={globalStyles.containerAuth}>
      <KeyboardAvoidingViewWrapper>
      <Image source={images.registerBgImage} style={styles.bgImage} resizeMode="cover" />
      <View style={styles.innerbox}>
        <View style={styles.inputsbox}>
          <InputText
            placeholder="First Name"
            value={form.firstName}
            multiline={false}
            onChangeText={val => onChangeValue('firstName', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputText
            placeholder="Last Name"
            value={form.lastName}
            multiline={false}
            onChangeText={val => onChangeValue('lastName', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputText
            placeholder="Email"
            value={form.email}
            multiline={false}
            onChangeText={val => onChangeValue('email', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputText
            placeholder="Password"
            value={form.password}
            multiline={false}
            secureTextEntry={true}
            onChangeText={val => onChangeValue('password', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />

          <AppButton
            title="Sign Up"
            loading={loading}
            onPress={onSignUpPress}
          />

          <Text style={styles.donttxt}>
            Already have an account?{'  '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.signuptxt}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
      </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: hp(30)
  },
  textInputStyle: {
    paddingTop: hp(0)
  },
  innerbox: {
    flex: 1,
    marginHorizontal: wp(5),
    alignItems: 'center',
    marginTop: hp(5),
  },
  logo: {
    width: wp(40),
    height: hp(10),
  },
  inputsbox: {
    flex: 1,
    width: '100%',
    marginTop: hp(3),
  },
  containerStyle: {
    height: hp(6.5),
    width: '100%',
    marginBottom: hp(2),
    flex: 0,
  },
  donttxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: COLORS.hardCodeWhite,
    marginTop: hp(4),
    alignSelf: 'center',
  },
  signuptxt: {
    color: COLORS.primary,
  },
});
