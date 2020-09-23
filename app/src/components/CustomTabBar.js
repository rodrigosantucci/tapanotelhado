import React, {useContext} from 'react';
import styled from 'styled-components/native';

import {UserContext} from  '../contexts/UserContext'

import HomeIcon from '../screens/assets/HomeIcon.svg';
import SearchIcon from '../screens/assets/SearchIcon.svg';
import TodayIcon from '../screens/assets/TodayIcon.svg';
import FavoriteIcon from '../screens/assets/FavoriteIcon.svg';
import Account from '../screens/assets/Account.svg';





const TabArea = styled.View`

    height: 60px;
    background-color: #FFF;
    flex-direction: row;
    border-width: 0.5px;

`;

const TabItem = styled.TouchableOpacity`

    flex: 1;
    justify-content: center;
    align-items:center;
    
`;

const TabItemCenter = styled.TouchableOpacity`

    width:70px;
    height:70px;
    justify-content: center;
    align-items: center;
    background-color: #000;
    border-radius: 35px;
    margin-top: -20px;


`;


const AvatarIcon = styled.Image `

    width: 24px;
    height: 24px;
    border-radius: 12px;


`;

export default ({state, navigation}) => {


const {state:user} = useContext(UserContext);

const goTo = (screenName) => {

    navigation.navigate(screenName);
}

    return (

        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.7}} width="24" height="24" fill="#000" />
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <SearchIcon style={{opacity: state.index===1? 1 : 0.9}} width="24" height="24" fill="#000" />
            </TabItem>
            <TabItemCenter onPress={()=>goTo('Appointments')}>
                <TodayIcon  width="32" height="32" fill="#FFF" />
            </TabItemCenter>
            <TabItem onPress={()=>goTo('Favorites')}>
                <FavoriteIcon  style={{opacity: state.index===3? 1 : 0.7}} width="24" height="24" fill="#000" />
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                {user.avatar != '' ?
                
                 <AvatarIcon source={{uri: user.avatar}} />

                 :

                 <Account style={{opacity: state.index===4? 1 : 0.7}} width="24" height="24" fill="#000" />
                
                }
            </TabItem>
        </TabArea>
    );

}