import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import LeftArrowHeader from '../../../components/Header/LeftArrowHeader'
import useNavigation from '../../../hooks/useNavigation'
import Postcode from '../../../components/Postcode'
import { NavigationActions } from 'react-navigation'

interface NavigationParams {
    setBasicAddress: Function,
    setContractionAddress: Function,
}


const SearchAddressScreen = () => {
    const navigation = useNavigation<NavigationParams>()
    const [loading, setLoading] = useState(true)

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <LeftArrowHeader goBack={() => navigation.dispatch(NavigationActions.back())} title='주소검색' />
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <Postcode
                    style={{ flex: 1 }}
                    jsOptions={{ animated: true }}
                    onLoad={() => setLoading(false)}
                    onSelected={(data: any) => {
                        try {
                            navigation.state.params?.setBasicAddress(data.address)
                            navigation.state.params?.setContractionAddress(data.bname !== '' ? data.bname : data.address)
                            navigation.dispatch(NavigationActions.back())
                        } catch (error) {
                            navigation.dispatch(NavigationActions.back())
                        }
                    }}
                />

                {loading && <ActivityIndicator style={{ position: 'absolute', alignSelf: 'center' }} />}
            </View>
        </View>
    )
}


export default SearchAddressScreen
