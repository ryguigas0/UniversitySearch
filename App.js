import SearchUniversities from "./SearchUniversities";
import FavouritedUniversities from "./FavoritedUniversites";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Universities" component={SearchUniversities} />
      <Stack.Screen name="Favourites" component={FavouritedUniversities} />
    </Stack.Navigator>
  </NavigationContainer>
}