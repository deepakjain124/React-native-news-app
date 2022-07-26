import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import { Icon } from "react-native-elements";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import Bottomsheets from "../Screens/components/Bottomsheets";
//   import { categories, Country, Language } from "../../mockdata/Mockdata";
  import { useNavigation } from "@react-navigation/native";
  
  const Allcards = ({APIDATA,loader,filter,searchdata}) => {
    console.log(APIDATA,"api");
    const navigation=useNavigation()
    const [isVisible, setIsVisible] = useState(false);
    const[saved,setsaved]=useState(false)
const[savedata,setsavedata]=useState("")
    const Paramemters = [
      {
        id: 1,
        type: "Country",
      },
      {
        id: 2,
        type: "Category",
      },
      {
        id: 3,
        type: "Language",
      },
    ];
  
    const [list, setlist] = useState([]);
    const showbottom = (type) => {
      if (type === "Country") {
        setlist(categories);
        setIsVisible(true);
      } else if (type === "Category") {
        setlist(Country);
        setIsVisible(true);
      } else {
        setlist(Language);
        setIsVisible(true);
      }
    };
  
    const savedetail=(item)=>{
     console.log(JSON.stringify(item));
    }
    return (
      <>
        <FlatList
          data={Paramemters}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item: { type } }) => {
            return (
              <>
                <View style={styles.category}>
                  <TouchableOpacity>
                    <Text 
                    // onPress={() => showbottom(type)} 
                    style={styles.text}>
                      {type}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        />
        <FlatList data={APIDATA}
        keyExtractor={(item,index)=>index}
        renderItem={(item)=>{
            return <Text>hhhh</Text>
        }}
        />
        {
          loader?<ActivityIndicator size={60} color="gray" style={{marginTop:50, display:"flex",justifyContent:"center",alignContent:"center"}}/>:
        //   {/* // searchdata!==" " && filter===[] ? */}
        <FlatList 
        data={Paramemters}
        keyExtractor={(item,index)=>index}
        renderItem={(item)=>{
            {console.log(item,"THIS IS MY ITEM");}
          return (
            <>
        <TouchableOpacity  style={styles.card}>
          <Image
            style={{ width:"100%", height:200,borderTopLeftRadius:10,borderTopRightRadius:10, resizeMode: "stretch" }}
            source={{
              uri: item.item.image_url ? item.item.image_url:"https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg",
            }}
          />
          <Text style={styles.heading_news}>Category:-ENTERTAINMENT</Text>
          <Text style={styles.heading_news}>Language:-HINDI</Text>
          <Text style={styles.heading_news}>name:-DEEPAK</Text>
          <Text style={{fontSize:20,fontWeight:"700",fontStyle:"italic",textTransform:"capitalize"}}>Country:-INDIA</Text>
            <Text numberOfLines={5} style={styles.content}>
                Description:-
             {/* {item?.description} */}
            </Text>
            <TouchableOpacity style={{alignItems:"flex-end"}}>
            <Icon onPress={()=>savedetail(item)} name={saved?"turned-in":"turned-in-not"} type="material" size={35} color="black" />
            </TouchableOpacity>
        </TouchableOpacity>
            </>
          )
        }}
        />
     }
        
        <Bottomsheets
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          list={list}
        />
        
        {/* <FlatList
       data={APIDATA}
       keyExtractor={(item)=>{item.index}}
       renderItem={(item)=>{
          return <Text>{item.category}</Text>
       }}
       /> */}
      </>
    );
  };
  
  export default Allcards;
  
  const styles = StyleSheet.create({
    category: {
      marginTop: 18,
      marginRight: 18,
    },
    text: {
      backgroundColor: "#000",
      padding: 10,
      borderRadius: 100,
      color: "#fff",
      fontWeight: "bold",
    },
    card: {
      marginTop:10,
      borderWidth: 1,
      padding:10,
      borderColor:"gray",
      borderRadius:10
     //  borderTopLeftRadius: 20,
     //  borderTopRightRadius: 20,
     },
     heading_news:{
       fontWeight:"bold",
       fontSize:25,
       marginBottom:10,
       textTransform:"capitalize"
     },
     content:{
       fontSize:20,
       marginTop:10,
       color:"gray"
     }
  });
  