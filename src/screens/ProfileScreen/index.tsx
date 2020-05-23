import React from 'react'
import { View, Text, ScrollView, Share } from 'react-native'
import { color1, shadow, headerHeight, titleFont, defaultFont, borderBottom, cardHeight, middleFont, fontColor1 } from '../../components/style'
import useNavigation from '../../hooks/useNavigation'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useAuth from '../../hooks/useAuth'
import { reset2SignIn } from '../../components/navigationResetActions'

import MajorHeader from '../../components/Header/MajorHeader'
import DefaultHeader from '../../components/Header/DefaultHeader'
import Portrait from './Portrait';
const userName = '홍길동'



const ProfileScreen = () => {
    const navigation = useNavigation()
    const { onSignOut } = useAuth()

    const menuList = [
        {
            name: '프로필 설정',
            onClick: () => {}
        },
        {
            name: '배송지 관리',
            onClick: () => navigation.navigate('AddressStack')
        },
        {
            name: '친구에게 추천하기',
            onClick: () => {
                Share.share({
                    message: 'https://play.google.com/store/apps/details?id=com.saladfactory.thundermart'
                })
            }
        },
        {
            name: '자주 하시는 질문',
            onClick: () => {
            }
        },
        {
            name: '고객센터',
            onClick: () => {
            }
        },
        {
            name: '사업자 정보',
            onClick: () => {
            }
        },
        {
            name: '로그아웃',
            onClick: () => {
                onSignOut()
                navigation.dispatch(reset2SignIn)
            }
        },
    ]

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <DefaultHeader>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{ ...titleFont, color: fontColor1 }}>더보기</Text>
                </View>
            </DefaultHeader>
            <MajorHeader/>
            <Portrait/>
            {menuList.map((item, index) =>
                <TouchableWithoutFeedback
                    key={index}
                    onPress={item.onClick}
                    style={{ width: '100%', height: cardHeight, backgroundColor: 'white', paddingHorizontal: 16, justifyContent: 'center', ...borderBottom }}
                >
                    <Text style={{ ...middleFont }}>{item.name}</Text>
                </TouchableWithoutFeedback>
            )}

            <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center', marginTop: 14 }}>주식회사 썬더마트</Text>
        </ScrollView>
    )
}

export default ProfileScreen
