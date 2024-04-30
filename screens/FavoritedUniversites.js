import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import UniversityList from '../components/UniversityList';

export default function FavouritedUniversities(props) {
    let [favouritedList, setFavouritedList] = useState([{
        "name": "West Herts College",
        "domains": ["student.westherts.ac.uk", "westherts.ac.uk"],
        "web_pages": ["https://westherts.ac.uk"],
        "country": "United Kingdom",
        "alpha_two_code": "GB",
        "state-province": null
    },
    {
        "name": "National Institute of Applied Sciences of Toulouse",
        "domains": ["insa-toulouse.fr"],
        "web_pages": ["https://insa-toulouse.fr"],
        "country": "France",
        "alpha_two_code": "FR",
        "state-province": null
    },
    {
        "name": "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
        "domains": ["mbzuai.ac.ae"],
        "web_pages": ["https://mbzuai.ac.ae/"],
        "country": "United Arab Emirates",
        "alpha_two_code": "AE",
        "state-province": "Abu Dhabi"
    },
    {
        "name": "Centro Universitário de Brasília, UNICEUB",
        "domains": ["sempreceub.com", "uniceub.br"],
        "web_pages": ["https://www.uniceub.br"],
        "country": "Brazil",
        "alpha_two_code": "BR",
        "state-province": null
    }])

    function removeFavouritedFuncion(name) {
        return function () {
            console.log("removing " + name + " from favourites!")
        }
    }

    return <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <UniversityList data={favouritedList} itemIdKey={"name"} onItemPress={removeFavouritedFuncion} />
        </View>
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
