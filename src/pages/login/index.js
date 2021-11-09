import React, {useState} from "react";
import { Text, View , Image} from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from "./styles";
import axios from "axios";


const Login = ({navigation}) => {

    const [credenciais,setCredenciais] = useState({
        email:'',
        senha:''
    })

    return (
        //View é como uma div
        <View style={styles.bgDark}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>

            <View>
                <TextInput
                    mode="flat"
                    style={styles.marginBottom}
                    label="Email ou número de telefone"
                    value={credenciais.email}
                    //Quando for digitado um texto o valor email sera alterado
                    onChangeText={(text)=>setCredenciais({...credenciais,email:text})}
                />

                <TextInput
                    mode="flat"
                    style={styles.marginBottom}
                    label="Senha"
                    secureTextEntry
                    value={credenciais.senha}
                    //Quando for digitado um texto o valor senha sera alterado
                    onChangeText={(text)=>setCredenciais({...credenciais,senha:text})}
                />
                <Button
                    mode="contained"
                    style={styles.marginBottom}
                    onPress={() => {
                        axios.get('http://192.168.15.159:3000/api/login/authenticate', {
                            params:{
                                userEmail:"teste@teste2.com",
                                userSenha:"admin"
                            }
                        },{
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                              }
                        }).then((response)=>{
                            console.log(response);
                        }).catch((error) =>{
                            console.log(error);
                        })

                        //Enviar requisicao de login
                        //Criar servidor node.js 
                    }}
                    >
                    Entrar
                </Button>

                <Button
                    style={styles.marginBottom}
                    onPress={() => console.log("teste")}
                    theme={{colors:{primary:'#fff'}}}
                    >
                    Recuperar Senha
                </Button>

                <Text style={styles.textSmall}>
                    Aplicativo para aprendizado de react-native
                    @Giuliano VB
                </Text>
            </View>
        </View>
    );
} 



export default Login;