import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Image
} from "react-native";
import Spacer from "../components/Spacer";

const Login = ({navigation}) => {
  const [email,
    setEmail] = useState("");
  const [password,
    setPassword] = useState("");
  return (
    <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
      <View style={styles.viewlabel}>
        <View style={styles.logo}>
          <Image style={styles.img} source={require("../assets/logo1.png")}/>
          <Text style={styles.appname}>BOOK</Text>
        </View>

        <Text style={styles.title}>
          login page</Text>
        <View style={styles.textbox}>
          <Text style={styles.label}>
            userName</Text>
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            placeholder="username"
            value={email}
            onChangeText={setEmail}/>
          <Text style={styles.label}>
            Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            placeholder="password"
            onChangeText={setPassword}/>
          <Spacer/>
          <Button
            title='Get Start'
            style={{
            marginHorizontal: 10
          }}
            color="black"
            onPress={() => navigation.navigate('ToReadApp')}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#FEF9E2"
  },
  viewlabel: {
    marginHorizontal: 16
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 100
  },
  textbox: {
    flex: 1,
    marginTop: 30
  },
  label: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold"
  },
  signup: {
    color: '#9649E2',
    fontSize: 12,
    marginLeft: 8
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 8
  },
  signup: {
    backgroundColor: 'red',
    marginLeft: 8,
    marginBottom: 10
  },
  img: {
    position: "absolute",
    top: 0,
    width: 24,
    height: 24
  },
  appname: {
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 30,
    paddingTop: 5
  },
  logo: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    height: 30
  }
});

export default Login;