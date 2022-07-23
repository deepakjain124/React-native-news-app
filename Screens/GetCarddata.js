import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const GetCarddata = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  const [Incomingdata, setincomingdata] = useState([]);
  console.log(JSON.stringify(Incomingdata), "hiiii");
  useEffect(() => {
    setincomingdata(route.params);
  }, [route.params]);

  useEffect(() => {}, [Incomingdata]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{
            width: "100%",
            height: 250,
            resizeMode: "stretch",
            backgroundColor: "red",
            borderRadius: 20,
          }}
          source={{
            uri: Incomingdata?.item?.item?.image_url,
          }}
        />
          <Text style={{ fontSize: 30, fontWeight: "bold" ,textAlign:"center"}}>
            <Text style={{ color: "red" }}> Author:-</Text>{" "}
            {Incomingdata?.item?.item?.creator
              ? Incomingdata?.item?.item?.creator
              : "Not Known"}
          </Text>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            Published At:-
            {Incomingdata?.item?.item?.pubDate
              ? Incomingdata?.item?.item?.pubDate
              : "null"}
          </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Country:-
          {Incomingdata?.item?.item?.country
            ? Incomingdata?.item?.item?.country
            : "null"}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Category:-
          {Incomingdata?.item?.item?.category
            ? Incomingdata?.item?.item?.category
            : "null"}
        </Text>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 15,
            marginVertical: 10,
            elevation: 10,
            shadowColor: "gray",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Description:-
          </Text>
          <Text style={{ fontSize: 16, color: "darkgray" }}>
            {Incomingdata?.item?.item?.description
              ? Incomingdata?.item?.item?.description
              : "null"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default GetCarddata;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  author: {
  textAlign:"center"
  },
});
