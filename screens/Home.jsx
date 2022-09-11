import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

// Helper
import beerClient from "../services/beerClient";

// Components
import { BeerListing, BeerStyleListing, MainMenu } from "../components";

// Constants
import { BEER_STYLES } from "../constants";

const Home = ({ navigation }) => {
  const [beers, setBeers] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);

  useEffect(() => {
    getInitialBeers();
  }, []);

  const getInitialBeers = async () => {
    const beers = await beerClient.getBeers();
    setBeers(beers);
  };

  const handleStylePress = async (style) => {
    if (selectedStyle === style) {
      setSelectedStyle(null);
      getInitialBeers();
    } else {
      setSelectedStyle(style);
      const beers = await beerClient.getBeerByStyle(style);
      setBeers(beers);
    }
  };

  const handleBeerPress = (item) => {
    navigation.navigate("BeerDetail", { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainMenu />
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
          borderBottomColor: "red",
        }}
        horizontal
        data={BEER_STYLES}
        renderItem={({ item }) => (
          <BeerStyleListing
            item={item}
            selectedStyle={selectedStyle}
            handleOnPress={handleStylePress}
          />
        )}
      />
      <FlatList
        keyExtractor={(item, index) => `${item.name}-${index}`}
        initialNumToRender={10}
        data={beers}
        renderItem={({ item }) => (
          <BeerListing item={item} handleBeerPress={handleBeerPress} />
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Home;
