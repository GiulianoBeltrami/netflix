import React, {useState} from "react";
import { Text, View , Image} from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from "./styles";

const Login = () => {

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
                    onPress={() => console.log("teste")}
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