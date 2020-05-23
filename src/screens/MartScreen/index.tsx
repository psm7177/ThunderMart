import React from 'react';
import { View, Text} from 'react-native';
import MartHeader from '../../components/Header/MartHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { shopSearchRadius } from '../../components/options';
import DefaultHeader from '../../components/Header/DefaultHeader';
import style from '../../components/style';

const MartScreen = () =>
{
    return(
    <>
        <DefaultHeader>
            <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Text style={{...style.titleFont}}>배달 받으실 마트를 선택해주세요.</Text>
            </View>
        </DefaultHeader>
    </>);
}

export default MartScreen;