import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';
import { Container, 
        InputArea,
        CustomButton,
        CustomButtonText,
        SignMessageButton,
        SignMessageButtonText,
        SignMessageButtonTextBold
        
} from './styles';

import InicioLogo from '../assets/tapanotelhado.svg';
import SignInput from '../../components/SignInput';

import EmailIcon from '../assets/envelope-fill.svg';
import LockIcon from '../assets/lock.svg';
import PersonIcon from '../assets/person.svg'


import Api from '../../Api';


export default () => {


    const {dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
   

    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');
    const [nameField, setNameField] = useState ('');

    const handleSignClick = async () => {

        if (nameField != '' && emailField != '' && passwordField != '') { 
            
            let res = await Api.signUp(nameField, emailField, passwordField);
            
            if (res.token) {

                await AsyncStorage.setItem('token', res.json.token);
               

                userDispatch({
 
                     type: 'setAvatar',
                     payload: {
                         avatar: res.data.avatar
                     }
  
                });
 
                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });

        
            } else {

                alert("Erro: "+res.error);

            }

        } else {

            alert("Preencha todos os campos");

        }
        
    }

    const handleMessageButtonClick = () => {
        
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });

    }


    return (
        <Container>
           <InicioLogo width="100%" height="200"></InicioLogo>
      
           <InputArea>
             
                <SignInput
                
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome  "
                    value={nameField}
                    onChangeText={t=>setNameField(t)} 

                />
                <SignInput
                
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail "
                    value={emailField}
                    onChangeText={t=>setEmailField(t)} 

                />
                <SignInput 
                    
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha "
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                
                /> 

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
           </InputArea>

           <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText> Já possui uma conta? </SignMessageButtonText>
                <SignMessageButtonTextBold> Faça seu Login </SignMessageButtonTextBold>
           </SignMessageButton>


         </Container>

    );
}