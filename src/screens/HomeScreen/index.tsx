import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import useNavigation from '../../hooks/useNavigation';

import AddressHeader from '../../components/Header/AddressHeader';
import SearchBar from './SearchBar';
import MartHeader from '../../components/Header/MajorHeader';
import CategoryGrid from './CategoryGrid';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { reset2SignIn } from '../../components/navigationResetActions';
import useAuth from '../../hooks/useAuth';
import BannerSlide from './BannerSlide';
import BannerAds from './BannerAds';
import CompanyInfo from './CompanyInfo';
const { BoxShadow } = require('react-native-shadow')

const HomeScreen = () => {
    const navigation = useNavigation()
    const { type } = useAuth()

    const checkAndLogout = (): boolean => {
        if (type == null) {
            navigation.dispatch(reset2SignIn)
            return true;
        }
        return false
    }

    useEffect(() => {
        //로그인체크
        if (checkAndLogout()) return
        setTimeout(() => {
            if (checkAndLogout()) return
            SplashScreen.hide()
        }, 500);

    }, [])

    return (
        <ScrollView
            overScrollMode='never'
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white' }}
        >
            <AddressHeader />
            <MartHeader/>
            <BannerSlide/>
            <CategoryGrid />
            <View style={{ height: 20 }} />
            <BannerAds/>
            <CompanyInfo/>
        </ScrollView>
    )
}


export default HomeScreen
export { default as CategoryDetailScreen } from './CategoryDetailScreen'