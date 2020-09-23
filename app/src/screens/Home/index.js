import React,{useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {Platform, RefreshControl} from 'react-native';
import {Container, 
        Scroller, 
        HeaderArea, 
        HeaderTitle, 
        SearchButton, 
        LocationArea, 
        LocationInput, 
        LocationFinder, 
        LoadingIcon,
        ListArea

        } from './styles';
import BarberItem from '../../components/BarberItem';
import SearchIcon from '../assets/SearchIcon.svg';
import MyLocationIcon from '../assets/my_location.svg'
import Api from '../../Api';



export default () => {

    const navigation = useNavigation();
 
    const [locationText, setLocationText] =  useState('');

    const [coords, setCoords] = useState(null);

    const [loading, setLoading] = useState(false);

    const [list, setList] = useState([]);

    const [refreshing, setRefreshing] = useState(false);

    const handleLocationFinder = async () => {

        setCoords(null);
        let result = await request(

            Platform.OS === 'ios' ?

            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            :
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            

        );

        if (result == 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);
            Geolocation.getCurrentPosition((info)=>{

                setCoords(info.coords);
                getBarbers();
            });
        } 
        
        else 
        
        {
            alert("Falha ao obter localização, certifique-se de autorizar o uso da localização nas configurações do seu dispositivo. ERRO-55");
        }



    }

    const getBarbers = async () => {

        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;

        if(coords) {

            lat = coords.latitude;
            lng = coords.longitude;
        }

        let res = await Api.getBarbers(lat, lng, locationText);
        console.log(res);
        if (res.error == '') {

            if(res.loc){
                 setLocationText(res.loc);
            }
            setList(res.data);

        } else {

            alert("Erro: "+res.error);
        }

    }
    
    useEffect(() => {
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    const handleLocationSearch = () => {

        setCoords({});
        getBarbers();
    }


    return(

        <Container>
            <Scroller refreshControl={

                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>
            }>




                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o corte ideal para você</HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#000"></SearchIcon>
                    </SearchButton>
                </HeaderArea>


                <LocationArea>
                    <LocationInput 
                    
                    placeholder="Onde você está?" 
                    placeholderTextColor="#FFFFFF" 
                    value={locationText} 
                    onChangeText={t=>setLocationText(t)} 
                    onEndEditing={handleLocationSearch}
                    
                    />

                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#000" ></MyLocationIcon>
                    </LocationFinder>
                </LocationArea>

                {loading &&
                <LoadingIcon size="large" color="#000"></LoadingIcon>
                }


                <ListArea>
                    {list.map ((item, k)=>( 

                        <BarberItem key={k} data={item} />

                    ))}
                </ListArea>
            </Scroller>
        </Container>

    );
}