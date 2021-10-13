import React from "react";
import styles from "./styles";
import { TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

//Os botões recebem duas propriedades para serem setadas dinamicamente
const ButtomVertical = ({icon,text}) =>{
    return (
        <TouchableOpacity style={styles.button}>
            <Icon name={icon} color="#fff" size={20}/>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtomVertical;