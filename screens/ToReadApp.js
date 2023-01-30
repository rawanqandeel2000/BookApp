import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList,Image } from 'react-native';
import { Title, Paragraph, Card, TextInput ,Button } from 'react-native-paper';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Spacer from '../components/Spacer';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import { addBook, deleteToRead ,deleteAllRead ,getItemDetails, editTodo} from '../redux/toReadSlice';
import SpecailHeader from './Header';
import Profile from './Profile';



const ToReadApp = ({navigation,selectItem, toRead_list, addBook, deleteToRead,deleteAllRead,getItemDetails, editTodo, props }) => {
  const [address, setaddress] = useState('');
  const [author, setauthor] = useState('');
  const [hasGalleryPermission, sethasGalleryPermission] =useState();
  const [image, setImage] = useState('');

  const handleAddToRead = () => {
    addBook({ address,author,image })
    setaddress('')
    setauthor('')
    setImage('')
  }

  const handleEditTodo = () => {
    editTodo({ address,author,image })
    setaddress('')
    setauthor('')
    setImage('')
  }

  

  // const handleAddToedit = () => {
  //  setaddress(address)
  //  setauthor(author)
   
  // }

  
console.log(toRead_list ,'toRead_list')
console.log(selectItem ,'****')

  useEffect(() => {
    (async () => {
        const galeryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        sethasGalleryPermission(galeryStatus.status == 'granted');
    })();
},[]);
  

useEffect(() => {
  if(selectItem[0] && selectItem[0]){
    setaddress(selectItem[0].address)
    setauthor(selectItem[0].author)
    setImage(selectItem[0].image)
  }
  return () => {
   
  }
}, [selectItem])


const pickImage = async () => {
    let result= await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true ,
        aspect:[2,2],
        quality:1,
    });


    if(!result.canceled ){
        setImage(result.assets[0].uri);
      }
};
if (hasGalleryPermission ===false){
    return <Text>No Acesss</Text>
}


  return (

    <View style={styles.containerhome}>
      <SpecailHeader  onPress={() => navigation.navigate('Profile')} />
      <View  style={styles.containerinner}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Add Books Here</Title>
          <TextInput
            style={{color: 'red'}}
            mode="outlined"
            label="Title"
            value={address}
            onChangeText={address => setaddress(address)}
            />
            <TextInput
            mode="outlined"
            label="Author"
            value={author}
            onChangeText={author => setauthor(author)}
          />
          <Text style={styles.btnText} onPress={() => pickImage()}>Select Book</Text>
          <Paragraph>{image}</Paragraph>
          <View style={styles.alternativeLayoutButtonContainer}>
        
          <Button mode="contained" onPress={handleAddToRead} style={styles.btn}>
            Add BOOK
          </Button>
          <Button mode="contained" onPress={handleEditTodo} style={styles.btn}>
            Edit BOOK
          </Button>
          <Button  mode="contained"  onPress={() => deleteAllRead()} style={styles.btn}>
            Delete All
          </Button>
          </View>
        </Card.Content>
      </Card>
      <Spacer />
      <FlatList
        data={toRead_list}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
          return (
            <>
            <Card  style={styles.cardBOOK}>
              <Card.Title 
                title={`Book#${item.id}`}
                right={(props) => <Icon name="delete" size={20} style={styles.iconDelete} onPress={()=> deleteToRead(item.id)} />}
                left={(props) =>  <Icon name="edit" size={20} style={styles.iconDelete} onPress={()=>  getItemDetails(item.id)} />}
              />
              <Card.Content style={styles.Card}>
              <Image source={{ uri: item.image}} style={{ width: 150, height: 150 }} />
                <Paragraph style={styles.pag} >{` Name : \n                ${item.address } \n Author : \n               ${item.author} `}</Paragraph>
              </Card.Content>
            </Card>
            <Spacer />
            </>
          );
        }}
      />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  containerhome: {
    flex: 1,
    backgroundColor: '#FCF7E0',
  },
  containerinner: {
    flex: 1,
    backgroundColor: '#FCF7E0',
    padding: 10,
  },
  title :{
   color :'black',
   fontWeight :'600'
  },
  card :{
    backgroundColor: '#FCF7E0',
  },
  cardBOOK :{
    backgroundColor: '#FCF7E0',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Button : {
    width:42,
    height : 42,
    backgroundColor:'#000',
    position: 'absolute',
    bottom: 50,
    right:15,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity: .5,
    shadowRadius: 5,
    elevation : 5
  },
  plus : { 
    fontSize :40,
    color:'#fff',
    position :'absolute',
    top : -6,
    left : 9

  },
  iconDelete : {
    color : '#e33057',
    marginTop :2,
    marginRight : 3
  },
  btnText : {
    color :'#EFC229',
    fontSize:15 ,
    fontWeight : '600',
    marginTop: 12
  },
  btnAdd : {
    backgroundColor: '#000',
  },
  pag :{
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 30,
    marginLeft: 10,
   
  },
  Card :{
    flexDirection: "row",

  },
  btn :{
    backgroundColor: '#EFC229',
    marginRight:5,
  },
  alternativeLayoutButtonContainer: {
    flexDirection: 'row',
  }
});

const mapStateToProps = (state, myOwnProps) => {
  return {
    toRead_list: state.toRead.toRead_list,
    selectItem:state.toRead.selectItem
  }
}

const mapDispatchToProps = {
  addBook,
  deleteToRead,
  deleteAllRead,
  getItemDetails,
  editTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(ToReadApp);
