import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { BottomSheet, ListItem } from "react-native-elements";
import { Icon } from "react-native-elements";
import Categories from "./components/Categories";
import { useNavigation } from "@react-navigation/native";
const Getlatest = () => {
  const navigation=useNavigation()
  const [isVisible, setIsVisible] = useState(false);
  const[search,setsearch]=useState("")
  const [APIDATA, setAPIDATA] = useState([]);
  const[filter,setfilter]=useState([])
  // console.log(JSON.stringify(APIDATA.map((item)=>item.category)),"APIDATA");
  const[loader,setloader]=useState(true)

  const searchdata=(text)=>{
    console.log(text)
    filterdata(text)
    // setsearch(text)
    // const filter=APIDATA.filter((item)=>item.category)
    // console.log(JSON.stringify(filter))
  }

  const filterdata=(searchdata)=>{
    const abc=APIDATA.map((item)=>item)
    const xxx=abc?.filter((item)=>item?.category[0].includes(searchdata.toLowerCase()))
   if(searchdata!==""){
    setfilter(xxx)
   }else{
    setfilter([])
   }
  }


  const getlatest = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_93229c984214128774aa6852957de6f8e804"
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setloader(false)
      setAPIDATA(result.results);
    } catch (err) {
      console.log(err);
    }
  };
  const filterByAlphabt=()=>{
    const filterCat=APIDATA.map((item)=>item);
    const get=filterCat.sort((a,b)=>{
    if(a.category<b.category){
      return 1
    }
  }
  )
  console.log(JSON.stringify(get),"getttttttttttttttt")
  }

  useEffect(() => {
    getlatest();
  }, []);
  const list = [{ title: "Sort By A-Z" }, { title: "Sort By Z-A" }];
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} >
      <Text style={styles.heading}>Search News</Text>
      <TouchableOpacity  style={{backgroundColor:"white"}} onPress={()=>navigation.navigate("Login")}>
      <Text style={{fontSize:20,color:"#000",backgroundColor:"white",padding:5,borderRadius:50}}>Sign Out</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <TextInput style={styles.Input} onChangeText={searchdata} placeholder="search for a category" />
      <View style={styles.filter}>
        <TouchableOpacity
          style={styles.filter}
          onPress={() => {
            setIsVisible(true);
          }}
        >
          <Icon name="sort" type="material" size={22} color="black" />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Filter</Text>
        </TouchableOpacity>
      </View>
      <Categories searchdata={searchdata} filter={filter} loader={loader} APIDATA={APIDATA} />
      
      
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
        <TouchableOpacity onPress={() => setIsVisible(false)}>
          <Icon
            name="close"
            type="material"
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              fontSize: 25,
              margin: 15,
            }}
            size={30}
            color="black"
          />
        </TouchableOpacity>
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle}>
            <ListItem.Content>
              <TouchableOpacity onPress={filterByAlphabt}>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
    </ScrollView>
  );
};

export default Getlatest;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 60,
  },
  heading: {
    fontSize: 25,
    fontWeight: "700",
  },
  divider: {
    backgroundColor: "gray",
    height: 0.5,
    marginTop: 10,
  },
  Input: {
    width: "100%",
    backgroundColor: "lightgray",
    padding: 15,
    marginTop: 10,
  },
  filter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "space-around",
    flexDirection: "row",
    marginTop: 10,
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
    fontSize:30,
    textTransform:"capitalize"
  },
  content:{
    fontSize:20,
    color:"gray"
  }
});
