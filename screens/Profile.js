import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button
} from "react-native";
import SpecailHeader from "./Header";
import {MaterialIcons} from "@expo/vector-icons";
import Spacer from "../components/Spacer";

const Profile = ({username}) => {

  return (

    <View style={styles.view}>
      <SpecailHeader/>
      <ScrollView style={{
        flex: 1,
        marginHorizontal: 16
      }}>
        <View style={styles.imgConatiner}>
          <Image
            style={styles.pro_img}
            source={{
            uri: "https://image.freepik.com/free-photo/portrait-young-blonde-woman-wearing-denim-overalls_273609-10495.jpg"
          }}/>
          <View style={styles.edit}>
            <MaterialIcons style={styles.icon} name="edit"/>
          </View>
        </View>
        <View style={styles.content}>
          <TextInput style={styles.box_text} placeholder="Rawan">{username}</TextInput>

          <TextInput
            style={styles.box_text}
            multiline={true}
            numberOfLines={4}
            placeholder="what do you want ?"/>

          <Spacer/>
          <Button title="Save" color="#EFC229" style={styles.btn}/>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  imgConatiner: {
    marginTop: 20,
    alignSelf: "center"
  },
  pro_img: {
    width: 150,
    height: 150,
    borderRadius: 80
  },
  edit: {
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 24,
    bottom: 0,
    right: 0,
    backgroundColor: "#EFC229"
  },
  icon: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
    marginTop: 6
  },
  content: {
    flex: 1,
    marginTop: 40
  },
  box_text: {
    backgroundColor: "white",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 24
  },
  text: {
    color: 'white',
    alignSelf: "center"
  },
  btn: {
    borderRadius: 6,
    textAlign: 'center'
  }

});
export default Profile;