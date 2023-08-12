import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './component/Homescreen';
import Signinscreen from './component/Signinscreen';
import Signupscreen from './component/Signupscreen';
import AccountSetings from './component/AccountSetings';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Landing Screen'>
        <Stack.Screen name='Landing Screen' component={Homescreen}/>
        <Stack.Screen name='Login Screen' component={Signinscreen}/>
        <Stack.Screen name="Signup Screen" component={Signupscreen}/>
        <Stack.Screen name="Account Settings" component={AccountSetings}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

