import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  Alert
} from 'react-native';
import MainScreen from './MainScreen';

const LoginScreen = ({navigation}) => {
  let [username,
    setUsername] = useState("Rawan");

  const handleLogin = () => {
    if (username.trim()) {
      console.log({username});
      navigation.navigate('MainScreen');
    } else {
      Alert.alert("Username is required.");
    }
  };
  return (
    <View style={styles.container}>
      <View >
        <Image source={require('../assets/reader.png')}/>
        <Text style={styles.titlepag}>Reading is to the mind what exercise is to the body.</Text>
        <Image source={require('../assets/read.png')}/>
        <TextInput
          style={styles.input}
          keyboardType='text'
          placeholder="UserName"
          value={username}
          onChangeText={username => setUsername(username)}/>
        <Button
          title='Login'
          style={{
          marginTop: 150
        }}
          color="black"
          onPress={handleLogin}/>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFC229',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: "#E3E3E3",
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 8
  }
});

export default LoginScreen;