import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import Button from "../components/Button"


import UniversityListItem from '../components/UniversityListItem'

export default function SearchUniversities({ navigation }) {
    let [universities, setUniversities] = useState([{
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
    },
    {
        "name": "Kharkiv National University",
        "domains": ["student.karazin.ua", "karazin.ua"],
        "web_pages": ["https://karazin.ua"],
        "country": "Ukraine",
        "alpha_two_code": "UA",
        "state-province": null
    },
    {
        "name": "Universidad Técnica Federico Santa María",
        "domains": ["usm.cl"],
        "web_pages": ["https://usm.cl"],
        "country": "Chile",
        "alpha_two_code": "CL",
        "state-province": null
    },
    {
        "name": "IÉSEG School of Management",
        "domains": ["ieseg.fr"],
        "web_pages": ["https://ieseg.fr"],
        "country": "France",
        "alpha_two_code": "FR",
        "state-province": null
    },
    {
        "name": "Sun Yat-Sen University",
        "domains": ["mail2.sysu.edu.cn", "mail.sysu.edu.cn"],
        "web_pages": ["https://sysu.edu.cn"],
        "country": "China",
        "alpha_two_code": "CN",
        "state-province": null
    },
    {
        "name": "Royal Holloway University of London",
        "domains": ["rhul.ac.uk"],
        "web_pages": ["https://rhul.ac.uk"],
        "country": "United Kingdom",
        "alpha_two_code": "GB",
        "state-province": null
    }])
    let [universityName, setUniversityName] = useState("")
    let [universityCountry, setUniversityCountry] = useState("")

    function changeScreens() {
        navigation.navigate("Favourites")
    }

    return <View style={styles.container}>
        <View>
            <TextInput
                style={styles.universitiesFilter}
                value={universityName}
                placeholder={"University name"} onchange={setUniversityName} />
            <TextInput
                style={styles.universitiesFilter}
                value={universityCountry}
                placeholder={"University country name"}
                onchange={setUniversityCountry} />
        </View>
        <View style={styles.universitiesButtonGroup}>
            <Button
                style={styles.universitiesButton}
                title='Search'
                onPress={changeScreens} />
            <Button
                style={styles.universitiesButton}
                title='Favorites'
                onPress={changeScreens} />
        </View>
        <View style={{ flex: 1 }}>
            <FlatList
                style={styles.universitiesList}
                data={universities}
                renderItem={({ item }) => <UniversityListItem university={item} />}
                keyExtractor={(uni) => uni.name} />
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
    universitiesList: {
        margin: 8,
        paddingHorizontal: 16,
        paddingTop: 16,
        overflow: 'scroll'
    }
});
