import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';



import InicioLogo from '../assets/tapanotelhado.svg';


export default () => { 

    const navigation = useNavigation();

    useEffect(() =>{

           const checkToken = async() => {
               const token = await AsyncStorage.getItem('token');
               if (token) {
                   //validar 
               } else {
                      navigation.navigate('SignIn');
               }
           } 


           checkToken();
    }, []);


    return (
        <Container>
    
           <InicioLogo width="100%" height="300" />
           <LoadingIcon size="small" color="#000000"/>
        </Container>

    );
}