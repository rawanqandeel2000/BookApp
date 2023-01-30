import ToReadApp from './screens/ToReadApp';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/Profile';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import SpecailHeader from './screens/Header';

const Stack = createNativeStackNavigator();

const store = configureStore({reducer: rootReducer})

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
            headerShown: false
          }}/>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
            presentation: 'modal'
          }}/>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
            presentation: 'modal'
          }}/>
          <Stack.Screen
            name="SpecailHeader"
            component={SpecailHeader}
            options={{
            presentation: 'modal'
          }}/>
          <Stack.Screen
            name="ToReadApp"
            component={ToReadApp}
            options={{
            presentation: 'modal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>

  );
}

export default App;
