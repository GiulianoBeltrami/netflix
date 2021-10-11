import React from "react";
import { Text, View } from "react-native";
import styles from "./styles"
import Header from "../../components/header";

const Home = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>Home</Text>
        </View>
    );
};

export default Home;