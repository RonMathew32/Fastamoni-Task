import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Home from '../screens/home/Home';
import routes from '../constants/routes';
import useReduxStore from '../hooks/useReduxStore';
import EditProfile from '../screens/home/EditProfile';


const Stack = createNativeStackNavigator();
const appNavOptions = {
  headerShown: false,
};

const MainNavigation = () => {
  const { token } = useReduxStore()

  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={appNavOptions}>
        <Stack.Screen name={routes?.Home} component={Home} />
        <Stack.Screen name={routes?.EditProfile} component={EditProfile} />
      </Stack.Navigator>
    );
  };


  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={appNavOptions}>
        <Stack.Screen name={routes?.Login} component={Login} />
        <Stack.Screen name={routes?.Register} component={Register} />
      </Stack.Navigator>
    );
  };

  return token ? <HomeStack /> : <AuthStack />;
};

export default MainNavigation;
