import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const BeerListing = ({ item, handleBeerPress }) => {
  const { name, image_url, description } = item;
  return (
    <TouchableOpacity
      onPress={() => handleBeerPress(item)}
      style={{
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: "grey",
        flexDirection: "row",
        padding: 30,
        marginBottom: 5,
      }}
    >
      <Image source={{ uri: image_url }} style={{ height: 200, width: 50 }} />
      <View
        style={{
          flexDirection: "column",
          padding: 30,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BeerListing;
