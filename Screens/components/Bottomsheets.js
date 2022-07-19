import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BottomSheet, ListItem } from "react-native-elements";
import {Icon} from "react-native-elements"

const Bottomsheets = ({list,isVisible,setIsVisible}) => {
  return (
    <View>
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
            <>
          <ListItem  key={i} containerStyle={{height:40}}>
            <ListItem.Content>
              <TouchableOpacity>
                <ListItem.Title style={{height:20,textTransform:"capitalize"}}>{l.name}</ListItem.Title>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>
          </>
        ))}
      </BottomSheet>
    </View>
  )
}

export default Bottomsheets

const styles = StyleSheet.create({})