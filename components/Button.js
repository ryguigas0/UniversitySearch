import { Pressable, Text } from "react-native";


export default function Button(props) {
    const { onPress, title, style } = props;
    return (
        <Pressable style={style.button} onPress={onPress}>
            <Text style={style.text}>{title}</Text>
        </Pressable>
    );
}