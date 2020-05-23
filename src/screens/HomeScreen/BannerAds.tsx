import React from 'react';
import { View,Text } from "react-native";
import { WIDTH, defaultFont, alignCenter } from '../../components/style';

const BannerAds = () =>
{
    return(
        <>
            <View style={{width:WIDTH, height:WIDTH*0.53, backgroundColor:"#00FF96",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#FFF",fontSize:30}}>배너광고</Text>
            </View>
        </>
    )
}

export default BannerAds;