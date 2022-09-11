import { View, StyleSheet } from "react-native";

// Icons
import { AntDesign, Entypo } from "@expo/vector-icons";

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <Entypo name="menu" size={40} color="black" />
      <Entypo
        style={{ alignSelf: "center" }}
        name="drink"
        size={40}
        color="black"
      />
      <AntDesign name="shoppingcart" size={40} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MainMenu;
