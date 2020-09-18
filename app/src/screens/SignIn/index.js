import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
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


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');


    const handleSignClick = () => {


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