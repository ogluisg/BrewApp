import React from "react";
import { Text, TouchableOpacity } from "react-native";

const BeerStyleListing = ({ item, handleOnPress, selectedStyle }) => {
  return (
    <TouchableOpacity
      onPress={() => handleOnPress(item)}
      style={{
        width: 100,
        margin: 10,
        borderWidth: 0.5,
        backgroundColor: selectedStyle === item ? "#1A625D40" : "white",
        height: 40,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default BeerStyleListing;
