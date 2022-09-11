import * as React from "react";

// React Nav
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { Home, BeerDetailListing } from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BeerDetail"
          component={BeerDetailListing}
          options={(navigationParams) => {
            const { name } = navigationParams.route.params.item;
            return { headerTitle: name };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
