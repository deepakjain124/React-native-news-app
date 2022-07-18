import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";

const Allnews = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Your Preferred Topic</Text>
      <View style={styles.tab}>
        <TouchableOpacity>
          <Text style={styles.Topics}>Get Latest News</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity>
          <Text style={styles.Topics}>News Archive</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity>
          <Text style={styles.Topics}>News Source</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Allnews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading:{
    fontSize:20,
    fontWeight:"700",
    marginBottom:20
  },
  tab: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 50,
    width:"100%",
    margin: 10,
    elevation: 20,
    shadowColor: "gray",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Topics: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
