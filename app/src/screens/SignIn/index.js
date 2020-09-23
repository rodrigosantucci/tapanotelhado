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


import Api from '../../Api';

import InicioLogo from '../assets/tapanotelhado.svg';
import SignInput from '../../components/SignInput';

import EmailIcon from '../assets/envelope-fill.svg';
import LockIcon from '../assets/lock.svg';


export default () => {


    const {dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');


    const handleSignClick = async () => {


        navigation.reset({ 
            routes: [{name: 'MainTab'}]
        });

      /*  if(emailField != '' && passwordField != '' ) {

           let json = await Api.signIn(emailField, passwordField);
            if(json.token) {

               await AsyncStorage.setItem('token', json.token);
               

               userDispatch({

                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
 
               });

               navigation.reset({
                   routes: [{name: 'MainTab'}]
               });

            } else {

                alert("Email e/ou senha incorretos!");

            }
             navigation.reset({ 
             routes: [{name: 'MainTab'}]
          });
        } else {

            alert("Preencha os campos!");

        }
        */
    }

    const handleMessageButtonClick = () => {
        
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });

    }


    return (
        <Container>
           <InicioLogo width="100%" height="200"></InicioLogo>
      
           <InputArea>
             
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
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
           </InputArea>

           <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText> Ainda não possui uma conta? </SignMessageButtonText>
                <SignMessageButtonTextBold> Cadastre-se </SignMessageButtonTextBold>
           </SignMessageButton>


         </Container>

    );
}