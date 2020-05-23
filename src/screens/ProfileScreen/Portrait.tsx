import React from 'react';
import {View, Text,Image} from 'react-native';
import { WIDTH, titleFont } from '../../components/style';
import ProfileSvg from '../../asset/profile';

const Portrait = () =>{

    let profile = null;
    return(
        <>
            <View style={{width:WIDTH,height:200,alignItems:'center',paddingVertical:25}}>
                {
                    profile = null
                    ?
                    <ProfileSvg/>
                    :
                    <ProfileSvg width={120} height={120} />
                }
                <Text style={{...titleFont,paddingTop:25}}>윤성용님 환영합니다</Text>
            </View>
        </>
    );
}

export default Portrait;