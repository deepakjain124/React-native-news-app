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
import Bottomsheets from "./Bottomsheets";
import { categories, Country, Language } from "../../mockdata/Mockdata";
import { useNavigation } from "@react-navigation/native";

const Categories = ({APIDATA,loader,filter,searchdata}) => {
  const navigation=useNavigation()
  const [isVisible, setIsVisible] = useState(false);
  const[saved,setsaved]=useState(false)
  const[savedata,setsavedata]=useState([])
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


  const getCardData=(item)=>{
navigation.navigate("Getcarddata",{item})
  }
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
                  <Text onPress={() => showbottom(type)} style={styles.text}>
                    {type}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      />
      {
        loader?<ActivityIndicator size={60} color="gray" style={{marginTop:50, display:"flex",justifyContent:"center",alignContent:"center"}}/>:
        // searchdata!==" " && filter===[] ?
      <FlatList 
      data={filter.length?filter:APIDATA}
      keyExtractor={(item,index)=>index}
      renderItem={(item)=>{
        return (
          <>
      <TouchableOpacity onPress={()=>getCardData(item)} style={styles.card}>
        <Image
          style={{ width:"100%", height:200,borderTopLeftRadius:10,borderTopRightRadius:10, resizeMode: "stretch" }}
          source={{
            uri: item.item.image_url ? item.item.image_url:"https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg",
          }}
        />
        <Text style={styles.heading_news}>Category:-{item.item.category}</Text>
        <Text style={{fontSize:20,fontWeight:"700",fontStyle:"italic",textTransform:"capitalize"}}>Country:-{item.item.country}</Text>
          <Text numberOfLines={5} style={styles.content}>
           {item.item.description}
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
    </>
  );
};

export default Categories;

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
    padding:5,
    borderColor:"gray",
    borderRadius:10
   //  borderTopLeftRadius: 20,
   //  borderTopRightRadius: 20,
   },
   heading_news:{
     fontWeight:"bold",
     fontSize:25,
     textTransform:"capitalize"
   },
   content:{
     fontSize:20,
     color:"gray"
   }
});
