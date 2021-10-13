import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Title  } from 'react-native-paper'
import styles from "./styles";
import Header from "../../components/header";
import Hero from '../../components/hero';
import ButtomVertical from "../../components/buttomVertical";
import Previas from "../../components/previas";


const Home = () => {
    return (
        <ScrollView style={styles.container}>

            <Header/>
            <Hero/>
            
            <View style={styles.menuHeader}>
                <ButtomVertical icon="plus" text="Minha lista"/>
                <Button icon="play" mode="contained" color="#fff" uppercase={false}>
                    Assistir
                </Button>
                <ButtomVertical icon="information-outline" text="Saiba Mais"/>
            </View>

            <View style={styles.previaContainer}>
                <Title style={styles.previaTitle}>Prévias</Title>
                <Previas/>
            </View>
            
        </ScrollView>
    );
};

export default Home;