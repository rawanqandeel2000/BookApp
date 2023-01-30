import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import Profile from "./Profile";
import ToReadApp from "./ToReadApp";

const SpecailHeader = ({}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
          <Image style={styles.img} source={require("../assets/logo1.png")}/>
          <Text style={styles.appname}>KYDOREADER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <View style={styles.profileimg}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("ToReadApp")}>
              {/* <Ionicons style={{color:"black" , fontSize:24 , marginLeft:12}} name="notifications-outline"></Ionicons> */}
              <AntDesign
                name="addfile"
                style={{
                color: "black",
                fontSize: 24,
                marginLeft: 20
              }}/>
            </TouchableOpacity>
          </View>
          <View>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                style={styles.pro_img}
                source={{
                uri: "https://image.freepik.com/free-photo/portrait-young-blonde-woman-wearing-denim-overalls_273609-10495.jpg"
              }}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderBottomWidth: 0.5,
    borderColor: "#E2E2E2",
    backgroundColor: "#EFC229"
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
    left: 16,
    height: 80,
    alignItems: "center"
  },
  img: {
    position: "absolute",
    width: 24,
    height: 24
  },
  profileimg: {
    flexDirection: "row",
    height: 80,
    width: 100,
    position: "absolute",
    right: 0,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16
  },
  pro_img: {
    width: 30,
    height: 30,
    borderRadius: 24

  }
})
export default SpecailHeader;