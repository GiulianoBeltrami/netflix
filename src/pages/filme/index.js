import React, {useState} from "react";
import {View, ScrollView, ImageBackground, TouchableOpacity,Text,FlatList } from "react-native";
import { Title, Button, Paragraph, Caption } from "react-native-paper";
import styles from "./styles";
import ButtomVertical from "../../components/buttomVertical";
import Secao from "../../components/secao";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Episodio from "../../components/episodio";
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';



const Filme = () => {

    const [tipo] = useState('serie');
    const [visible,setVisible] = useState(false);
    const [temporada,setTemporada] = useState({value:1,label:"Temporada 1"});
    return(
        <>
            <SinglePickerMaterialDialog 
                title={"Série - Temporadas"}
                items={[
                    {value:1,label:"Temporada 1"},
                    {value:2,label:"Temporada 2"},
                    {value:3,label:"Temporada 3"},
                ]}
                visible={visible}
                selectedItem={temporada}
                onOk={(result) => {
                    setVisible(false);
                    setTemporada(result.selectedItem);
                }}
                onCancel= {() =>{}}
            />

            <ScrollView style={styles.container}>
                <ImageBackground style={styles.hero} source={{uri:"https://i.imgur.com/EJyDFeY.jpg"}} />
                <View style={styles.containerPadding}>
                    <Title>
                        Nome Filme
                    </Title>
                    <Button style={styles.buttonPlay} icon="play" mode="contained" color="#fff" uppercase={false}>
                        Assistir
                    </Button>

                    <Paragraph>
                        Pregadores Profanos. Autoridades Corruptas. Amantes Assassinos. Numa cidade cheia de pecadores, um jovem busca justiça.
                    </Paragraph>

                    <Caption style={styles.captionInfos}>
                        Elenco:{' '}<Caption style={styles.captionWhite}>Silvio Sampaio, Juliana Righi, Omar Sampaio, Mikael Lopes.</Caption> {' '}
                        Gêneros:{' '}<Caption style={styles.captionWhite}>Ação, Aventura,Dramático.</Caption> {' '}
                        Cenas e momentos:{' '}<Caption style={styles.captionWhite}>Violentos.</Caption> {' '}
                    </Caption>

                    <View style={styles.menu}>
                        <ButtomVertical icon="plus" text="Minha Lista"/>
                        <ButtomVertical icon="thumb-up" text="Classifique"/>
                        <ButtomVertical icon="send" text="Compartilhe"/>
                        <ButtomVertical icon="download" text="Baixar"/>
                    </View>
                    { tipo=='serie' && (
                    <>
                        <TouchableOpacity onPress={ () => setVisible(true)} style={styles.buttonTemporada}>
                            <Text style={styles.temporadaName} >{temporada.label}</Text>
                            <Icon name='chevron-down' color="#fff" size={20}></Icon>
                        </TouchableOpacity>
                        <FlatList 
                            data={[1,2,3,4]}
                            renderItem={({item,index}) => <Episodio key={index}/>}
                        />
                    </>
                    )}
                </View>
                { tipo=='filme' && <Secao hasTopBorder/>}

            </ScrollView>
        </>
        
    );
}

export default Filme;