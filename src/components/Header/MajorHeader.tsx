import React from 'react'
import { View, Text, Image } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import useAddress from '../../hooks/useAddress';
import style from '../style';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import CartIcon from '../../asset/smart-cart.svg';
import Profile from '../../asset/profile.svg';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const MapIcon = ()=>{
    return(<FontAwesome name="map-marker" size={20} style={{paddingHorizontal:5}}/>);
}

const SearchIcon = () =>{
    return(<AntDesign name="search1" size={30} style={{paddingHorizontal:5,}}/>);
}

const MajorHeader = () => {
    const navigation = useNavigation();
    const { presentAddress } = useAddress();

    const onMart = () => {
        navigation.navigate('MartScreen');
    }
    const onSearch = () => {
        navigation.navigate('ItemSearchStack');
    }
    const onCart = () => {
        navigation.navigate('CartStack');   
    }
    const onProfile = () =>{
        navigation.navigate('ProfileStack');
    }

    return (
        <View
            style={{ width: style.WIDTH, height: style.headerHeight, flexDirection: "row", alignItems: 'center', paddingHorizontal: 5 }}
        >
            <Text style={{ ...style.titleFont,paddingHorizontal:10}} >썬더마트</Text>
            
            <TouchableWithoutFeedback
                onPress={onMart}
                style={{borderRadius:20,borderColor:"#000",borderWidth:1,paddingHorizontal: 5,alignItems: 'center',paddingVertical:4,flexDirection:"row"}}
            >
                <MapIcon/>
                <Text style={{...style.tinyFont,paddingRight:5}} numberOfLines={1}>
                    더마트 수영SK점
                </Text>
            </TouchableWithoutFeedback>
            <View
            style={{flex:1,flexDirection:"row",justifyContent:"flex-end"}}>
                <TouchableWithoutFeedback
                    onPress={onSearch}
                    style={{paddingHorizontal: 5,alignItems: 'center',paddingVertical:4,flexDirection:"row"}}>
                    <SearchIcon />
                </TouchableWithoutFeedback> 
                <TouchableWithoutFeedback
                    onPress={onCart}
                    style={{paddingHorizontal: 5,alignItems: 'center',paddingVertical:4,flexDirection:"row"}}>
                    <CartIcon width={30} height={30}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={onProfile}
                    style={{paddingHorizontal: 5,alignItems: 'center',paddingVertical:4,flexDirection:"row"}}>
                    <Profile width={35} height={35}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default MajorHeader
