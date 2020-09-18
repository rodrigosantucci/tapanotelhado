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
import PersonIcon from '../assets/person.svg'


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');
    const [nameField, setNameField] = useState ('');

    const handleSignClick = () => {

        
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