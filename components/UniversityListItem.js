import { StyleSheet, Text, View } from "react-native"


export default function UniversityListItem({ university }) {
    // console.log({ university })

    return <View style={styles.universityListItemContainer}>
        <Text style={styles.universityListItemText}>{university.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    universityListItemContainer: {
        marginBottom: 12,
        padding: 8,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 10,
    },
    universityListItemText: {
        fontSize: 20
    }
})