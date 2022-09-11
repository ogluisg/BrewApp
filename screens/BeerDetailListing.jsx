import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const BeerDetailListing = ({ route }) => {
  const { params } = route;
  const {
    name,
    tagline,
    image_url,
    description,
    brewers_tips,
    first_brewed,
    food_pairing,
    ingredients,
  } = params.item;
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 30,
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: image_url }} style={{ height: 450, width: 90 }} />
        <View
          style={{
            flexDirection: "column",
            padding: 30,
            paddingRight: 100,
          }}
        >
          <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
            "{tagline}"
          </Text>
          <Text>{description}</Text>

          <View style={styles.row}>
            <Text style={styles.title}>Brewers Tips</Text>
            <Text>{brewers_tips}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>First Brewed</Text>
            <Text>{first_brewed}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Food Pairing</Text>
            {food_pairing.map((foodPair, index) => (
              <Text key={`${foodPair}-${index}`}>- {foodPair}</Text>
            ))}
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Ingredients</Text>
            {ingredients.hops.map((ingredient, index) => (
              <Text key={`${ingredient.name}-${index}`}>
                - {ingredient.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
    marginVertical: 15,
  },
  title: {
    fontWeight: "bold",
  },
});

export default BeerDetailListing;
