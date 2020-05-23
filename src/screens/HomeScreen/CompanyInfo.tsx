import React from 'react';
import { View,Text } from "react-native";
import { WIDTH, defaultFont, alignCenter } from '../../components/style';

const BannerAds = () =>
{
    return(
        <>
            <View style={{width:WIDTH, height:WIDTH*0.53, backgroundColor:"#FFF000",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#000",fontSize:15}}>© 2020 썬더마트 - All Rights Reserved.</Text>
                <Text style={{color:"#000",fontSize:15}}></Text>
                <Text style={{color:"#000",fontSize:15}}>썬더마트는 통신판매중개자이며</Text>
                <Text style={{color:"#000",fontSize:15}}>통신판매의 당사자가 아닙니다.</Text>
                <Text style={{color:"#000",fontSize:15}}>따라서 썬더마트는 상품거래정보 및</Text>
                <Text style={{color:"#000",fontSize:15}}>거래에 대한 책임을 지지 않습니다.</Text>
            </View>
        </>
    )
}

export default BannerAds;