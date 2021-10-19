import React from "react";
import { Caption, Title } from "react-native-paper";
import { Image,TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Episodio = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.capa}  source={{uri:"https://i.imgur.com/EJyDFeY.jpg"}}/>
                <View>
                    <Title style={styles.titleSize}>1. Nome episódio</Title>
                    <Caption>45 mins</Caption>
                </View>
            </View>
            <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec purus eget lectus iaculis feugiat a eget magna.</Caption>
        </TouchableOpacity>
    );
}

export default Episodio;