import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { BottomSheet, ListItem } from "react-native-elements";
import { Icon } from "react-native-elements";
import Categories from "./components/Categories";
const Getlatest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [{ title: "Sort By A-Z" }, { title: "Sort By Z-A" }];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search News</Text>
      <View style={styles.divider} />
      <TextInput style={styles.Input} placeholder="search for your" />
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
      <Categories />
      <View style={styles.card}>
        <View style={styles.card}>
          <Text>kjjhg</Text>
          <Text style={{ backgroundColor: "red", width: "50%" }}>
            This is mu channel This is mu channel This is mu channel This is mu
            channel{" "}
          </Text>
        <Image
          style={{ width: "50%", height: 90, resizeMode: "contain" }}
          source={{
            uri: "https://bilder3.n-tv.de/img/incoming/crop23437390/1858673763-cImg_4_3-w250/Ein-Leopard-2-Panzer-der-Bundeswehr.jpg",
          }}
          />
          </View>
      </View>
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
              <TouchableOpacity>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
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
    marginTop: 10,
    flexDirection: "row",
  },
});
