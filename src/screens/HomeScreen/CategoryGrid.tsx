import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';

import { SvgXml } from 'react-native-svg';

import FastImage from 'react-native-fast-image'
import { WIDTH, defaultFont, alignCenter } from '../../components/style';
import useNavigation from '../../hooks/useNavigation';
import { TouchableWithoutFeedback, BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import useShop from '../../hooks/useShop';
import { shopType2Logo } from '../../components/functions';
import { shopNameType } from '../../components/types';
import useCart from '../../hooks/useCart';
import useAddress from '../../hooks/useAddress';
import ShopIcon from '../../components/Icon/ShopIcon';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import categorys from './CategoryIcon';


const BOXSIZE = (WIDTH - 48) / 3

const ShopList: shopNameType[] = ['CU', 'GS', 'SEVEN']




const CategoryGrid = () => {
    const navigation = useNavigation();
    const { shopType, onChange } = useShop()
    const { onRemoveAll } = useCart()
    const { presentAddress } = useAddress()

    const [shopChange, setShopChange] = useState(false)

    const emptyArray: string[] = []
    for (let i = 0; i < (((3 - (categorys.length % 3)) % 3)); i++) {
        emptyArray.push('');
    }


    const onCategory = (categoryKey: string, category: string) => {
        navigation.navigate('CategoryDetailScreen', { categoryKey, category })
    }

    const onShopPress = (type: shopNameType) => {
        if (type !== shopType) {
            onChange(type)
            onRemoveAll()
        }

        setShopChange(false)
    }


    const RenderItem = (item: any, index: number) =>
        <TouchableWithoutFeedback
            key={index}
            onPress={() => onCategory(item.key, item.name)}
            style={{ padding: 10, alignItems: 'center', justifyContent: 'center', width: BOXSIZE, height: BOXSIZE }}
        >
            {item.image}
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 6 }}>{item.name}</Text>
        </TouchableWithoutFeedback>

    const RenderEmpty = (index: number) => <View key={index} style={{ width: BOXSIZE, height: BOXSIZE }} />

    return (
        <>
            <View style={{width:WIDTH, height:40, justifyContent:"center",alignItems:"center",shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22,shadowRadius: 2.22,elevation: 3,backgroundColor:"#FFF",flexDirection:"row"}}><EvilIcons name="clock" size={25}/><Text>배달 시간 30분 ~ 45분 예상</Text></View>
            <View style={{ width: WIDTH - 40, alignSelf: 'center', borderColor: '#dbdbdb', borderRadius: 12, borderWidth: 1, backgroundColor: 'white', marginTop: 20 }}>
            {presentAddress !== null 
                ?
                <>
                    <View style={{ width: '100%', alignSelf: 'center', marginTop: 4, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 6, justifyContent: 'center' }}>
                        {categorys.map((item, index) => RenderItem(item, index))}
                        {emptyArray.map((info, index) => RenderEmpty(index))}
                    </View>
                </>
                :
                <>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('AddressStack')}
                    >
                        <View style={{ width: WIDTH - 30, alignSelf: 'center', height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ ...defaultFont }} >주소를 입력해주세요</Text>
                        </View>
                        <View style={{ height: 130, alignSelf: 'center', ...alignCenter, marginBottom: 10 }}>
                            <FastImage
                                style={{ height: 120, width: 120 }}
                                source={require('../../asset/IconClear.png')}
                                resizeMode='contain'
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </>
            } 
                
                
                
                {/*
                    presentAddress !== null
                        ?
                        !shopChange && shopType !== null
                            ?
                            <>
                                <View style={{ width: WIDTH - 30, alignSelf: 'center', height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{}}>
                                        <ShopIcon shop={shopType} resizeMode='contain' width={70} height={30} />
                                    </View>
                                    <View style={{ position: 'absolute', right: 0, width: 80, ...alignCenter }}>
                                        <BorderlessButton
                                            onPress={() => setShopChange(true)}
                                        >
                                            <Icon name='swap-horizontal' size={24} color='rgba(0, 0, 0, 0.5)' />
                                        </BorderlessButton>
                                    </View>
                                </View>

                                <View style={{ width: '100%', alignSelf: 'center', marginTop: 4, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 6, justifyContent: 'center' }}>
                                    {categorys.map((item, index) => RenderItem(item, index))}
                                    {emptyArray.map((info, index) => RenderEmpty(index))}
                                </View>
                            </>
                            :
                            <>
                                {ShopList.length !== 0
                                    ?
                                    <>
                                        <View style={{ width: WIDTH - 30, alignSelf: 'center', height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ ...defaultFont }} >{shopType === null ? '편의점을 선택해주세요' : '변경시 장바구니는 초기화됩니다'}</Text>
                                            {shopType !== null && <View style={{ position: 'absolute', right: 0, width: 80, ...alignCenter }}>
                                                <BorderlessButton
                                                    onPress={() => setShopChange(false)}
                                                >
                                                    <Icon name='close' size={24} color='rgba(0, 0, 0, 0.5)' />
                                                </BorderlessButton>
                                            </View>}
                                        </View>
                                        <View style={{ width: '100%', height: 80, flexDirection: 'row' }}>
                                            {ShopList.map((item, index) =>
                                                <View
                                                    key={index}
                                                    style={{ flex: 1, ...alignCenter }}
                                                >
                                                    <TouchableWithoutFeedback
                                                        onPress={() => onShopPress(item)}
                                                    >
                                                        <ShopIcon shop={item} resizeMode='contain' width={50} height={30} />
                                                    </TouchableWithoutFeedback>
                                                </View>
                                            )}
                                        </View>
                                    </>
                                    :
                                    <>
                                        {/* 주변에 편의점이 없을때 }
                                    </>
                                }
                            </>

                        :
                        <>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate('AddressStack')}
                            >
                                <View style={{ width: WIDTH - 30, alignSelf: 'center', height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ ...defaultFont }} >주소를 입력해주세요</Text>
                                </View>
                                <View style={{ height: 130, alignSelf: 'center', ...alignCenter, marginBottom: 10 }}>
                                    <FastImage
                                        style={{ height: 120, width: 120 }}
                                        source={require('../../asset/IconClear.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </>
                            */}

            </View>
        </>
    )


}

export default CategoryGrid
