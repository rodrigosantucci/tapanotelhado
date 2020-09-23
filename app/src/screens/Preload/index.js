import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';
import Api from '../../Api';


import InicioLogo from '../assets/tapanotelhado.svg';


export default () => { 

    const {dispatch: userDispatch} = useContext(UserContext);    
    const navigation = useNavigation();

    useEffect(() =>{

           const checkToken = async() => {
               const token = await AsyncStorage.getItem('token');
               if (token) {

                let res = await AsyncStorage.getItem('token');
                if (res.token) {

                    await AsyncStorage.setItem('token', res.token);

                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.data.avatar
                        }

                    });

                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });
                    
                } else {

                    navigation.navigate('SignIn');

                }

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