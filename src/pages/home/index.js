import React from "react";
import { View, FlatList, TouchableOpacity, Image } from "react-native";
import { Button, Title  } from 'react-native-paper'
import styles from "./styles";
import Header from "../../components/header";
import Hero from '../../components/hero';
import ButtomVertical from "../../components/buttomVertical";

const Home = () => {
    return (
        <View style={styles.container}>

            <Header/>
            <Hero/>
            
            <View style={styles.menuHeader}>
                <ButtomVertical icon="plus" text="Minha lista"/>
                <Button icon="play" mode="contained" color="#fff" uppercase={false}>
                    Assistir
                </Button>
                <ButtomVertical icon="information-outline" text="Saiba Mais"/>
            </View>

            <View>
                <Title>Prévias</Title>
                <FlatList 
                    style={styles.flatListContainer}
                    data={[1,2,3,4,5,6,7]}
                    renderItem={({index,item}) => (
                        <TouchableOpacity key={index}>
                            <View style={styles.oval}>
                                <Image source={{uri:"https://i.imgur.com/EJyDFeY.jpg"}}/>
                                <Image source={{uri:"https://i.imgur.com/EJyDFeY.jpg"}}/>
                            </View>   
                        </TouchableOpacity>
                    )}
                />
            </View>
            
        </View>
    );
};

export default Home;