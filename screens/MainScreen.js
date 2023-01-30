import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Paragraph} from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';
import SpecailHeader from './Header';
import {useNavigation} from '@react-navigation/native';

const MainScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <View >
      <SpecailHeader/>
      <View style={styles.container}>
        <View>
          <Image source={require('../assets/main-img.png')} style={styles.img}/>
        </View>
        <Text style={styles.title}>Insert the book you {`\n`}    like the most</Text>
        <Paragraph style={styles.pag}>Another one of the benefits of reading books is
          that they can improve our ability to empathize with other {`\n`}                    improve our relationships</Paragraph>
        <AntDesign
          name="rightcircleo"
          size={50}
          color="#EFC229"
          style={styles.icon}
          onPress={() => navigation.navigate("ToReadApp")}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF7E0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    marginVertical: 12,
    height: 250,
    width: 250
  },
  title: {
    marginVertical: 15,
    fontSize: 25,
    fontWeight: '800'
  },
  pag: {
    marginHorizontal: 15,
    fontWeight: '500',
    color: '#ACACAC'
  },
  icon: {
    marginVertical: 80
  }
})

export default MainScreen;
