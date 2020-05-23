import React from 'react'
import { View, Text } from 'react-native'
import useNavigation from '../../../hooks/useNavigation'

type orderResultScreenProps = {
    type: 'card' | 'phone',
    success: boolean,
    imp_uid: string,
    merchant_uid: number,
    error_msg: string
}

const OrderResultScreen = () => {

    const navigation = useNavigation<orderResultScreenProps>()

    const success = navigation.getParam('success');
    const imp_uid = navigation.getParam('imp_uid');
    const merchant_uid = navigation.getParam('merchant_uid');
    const error_msg = navigation.getParam('error_msg');

    return (
        <View>
            <Text>{`결제/본인인증에 ${success ? '성공' : '실패'}하였습니다.`}</Text>
            <View>
                <View>
                <Text>아임포트 번호</Text>
                <Text>{imp_uid || '없음'}</Text>
                </View>
                <View>
                <Text>주문 번호</Text>
                <Text>{merchant_uid || '없음'}</Text>
                </View>
                {
                !success && 
                <View>
                    <Text>에러 메시지</Text>
                    <Text>{error_msg || '없음'}</Text>
                </View>
                }
            </View>
    </View>
    )
}

export default OrderResultScreen
