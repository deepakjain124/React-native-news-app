import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Bottomsheets from "./Bottomsheets";
import { categories, Country, Language } from "../../mockdata/Mockdata";

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);

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
  const [APIDATA, setAPIDATA] = useState([]);
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

  const getlatest = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_93229c984214128774aa6852957de6f8e804"
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setAPIDATA(result.results);
      console.log(result.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getlatest();
  }, []);
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
  
});
