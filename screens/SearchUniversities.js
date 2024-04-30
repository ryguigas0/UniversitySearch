import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Button from "../components/Button"
import UniversityList from '../components/UniversityList';
import axios from 'axios';

export default function SearchUniversities({ navigation }) {
    let [universities, setUniversities] = useState([])

    let [universityName, setUniversityName] = useState("")
    let [universityCountry, setUniversityCountry] = useState("")

    useEffect(() => {
        searchUniversities(null, null);
    }, []);

    function changeScreens() {
        navigation.navigate("Favourites")
    }

    async function searchUniversities(name, country) {
        if (name === "" && country === "") {
            return
        }

        let queryParams = {}
        if (name !== "") {
            queryParams.name = name
        }

        if (country !== "") {
            queryParams.country = country
        }

        let baseUrl = 'http://universities.hipolabs.com/search'

        const response = await axios.get(baseUrl, { params: queryParams })

        console.log({ queryParams, response })

        setUniversities(response.data)
    }

    function addToFavourites(uniName) {
        return () => {
            console.log("adding " + uniName + " to favourites")
        }
    }

    return <View style={styles.container}>
        <View>
            <TextInput
                style={styles.universitiesFilter}
                value={universityName}
                placeholder={"University name"}
                onChangeText={setUniversityName} />
            <TextInput
                style={styles.universitiesFilter}
                value={universityCountry}
                placeholder={"University country name"}
                onChangeText={setUniversityCountry} />
        </View>
        <View style={styles.universitiesButtonGroup}>
            <Button
                style={styles.universitiesButton}
                title='Search'
                onPress={async function () {
                    return searchUniversities(universityName, universityCountry)
                }} />
            <Button
                style={styles.universitiesButton}
                title='Favorites'
                onPress={changeScreens} />
        </View>
        <View style={{ flex: 1 }}>
            <UniversityList data={universities} itemIdKey={'name'} onItemPress={addToFavourites} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    universitiesFilter: {
        marginBottom: 8,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderColor: "#000",
        borderWidth: 2,
        width: "20rem",
        fontSize: 20
    },
    universitiesButtonGroup: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "20rem",
    },
    universitiesButton: {
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: '#0d6efd',
            minWidth: "9rem"
        },
        text: {
            fontWeight: 'bold',
            color: "white",
            fontSize: 20
        }
    },
});
