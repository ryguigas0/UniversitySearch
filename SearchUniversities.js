import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native';

export default function SearchUniversities({ navigation }) {
    function changeScreens() {
        navigation.navigate("Favourites")
    }

    return <View style={styles.container}>
        <Text>SearchUniversities</Text>
        <Button title='Go to favorites' onPress={changeScreens} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
