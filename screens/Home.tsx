import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { NavigationProp } from "@react-navigation/native";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Helper
import beerClient from "../services/beerClient";

// Components
import { BeerListing, BeerStyleListing, MainMenu } from "../components";

// Constants
import { BEER_STYLES } from "../constants";
import { Beer } from "../types";

type Props = {
  navigation: NavigationProp<any>;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const [page, setPage] = useState<number>(1);
  const [beers, setBeers] = useState<Beer[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async (page = 1) => {
    const beers = await beerClient.getBeers(page);
    setBeers(beers);
  };

  const handleStylePress = async (style: string) => {
    if (selectedStyle === style) {
      setSelectedStyle(null);
      getBeers();
    } else {
      setSelectedStyle(style);
      const beers = await beerClient.getBeerByStyle(style);
      setBeers(beers);
    }
  };

  const handleBeerPress = (item: Beer) => {
    navigation.navigate("BeerDetail", { item });
  };

  const handleOnEndReached = async () => {
    let beers: Beer[] = [];
    if (selectedStyle === null) {
      beers = await beerClient.getBeers(page + 1);
    } else {
      beers = await beerClient.getBeerByStyle(selectedStyle, page + 1);
    }
    setBeers((prevBeers) => [...prevBeers, ...beers]);
    setPage(page + 1);
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
        contentContainerStyle={{ paddingHorizontal: 10 }}
        initialNumToRender={10}
        data={beers}
        onEndReachedThreshold={0.25}
        onEndReached={handleOnEndReached}
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
