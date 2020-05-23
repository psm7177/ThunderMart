import React, { useState, useRef } from 'react'
import { View, Text, Image,ScrollView,FlatList, NativeScrollEvent, NativeSyntheticEvent, Easing,Animated} from 'react-native'
import { WIDTH, defaultFont, alignCenter } from '../../components/style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import LeftSlide from '../../asset/leftSlide';
import RightSlide from '../../asset/rightSlide';

const DATA = [
    { 
        id:0, 
        image:require('../../asset/cookie.png')
    },
    { 
        id:1, 
        image:require('../../asset/cookie.png')
    },
    { 
        id:2, 
        image:require('../../asset/cookie.png')
    }
];

const BannerSlide = () => {

    const slideShowRef = useRef(null);
    const [slideIndex,SetIndex] = useState(new Animated.Value(0));
    const [pageIndex,setPageIndex] = useState(0);
    const [Page,setPage] = useState(DATA);

    const slideToIndex= (event: NativeSyntheticEvent<NativeScrollEvent>): void =>
    {
        if(!slideShowRef.current) {return;}
        
        const x = event.nativeEvent.contentOffset.x;
        const width = event.nativeEvent.layoutMeasurement.width;
        const velocity = (event.nativeEvent.velocity||{x:0,y:0}).x;

        let toIndex = 0;
        console.log(velocity);
        if(velocity <= 0 && (Math.abs(velocity)> 4 || x/width-Math.floor(x/width) > 0.4)){
            toIndex = Math.floor(x/width)+1;
        }
        else{
            toIndex = Math.floor(x/width);
        }
        slideShowRef.current.scrollToOffset({ animated: true, offset: toIndex*width });
        if(toIndex >= Page.length) {return;}
        BarAnimation(toIndex);
    };
    const touchToIndex = (event:any)=>{
        if(!slideShowRef.current) {return;}
        let toIndex = Math.floor(event.nativeEvent.locationX/WIDTH/0.8*Page.length);
        slideShowRef.current.scrollToOffset({ animated: true, offset: toIndex*WIDTH});
        BarAnimation(toIndex);
    };
    const scrollbyArrow = (move:number) =>{
        if(!slideShowRef.current) {return;}
        if( 0 <=  pageIndex+move && pageIndex+move < Page.length) {
            slideShowRef.current.scrollToOffset({ animated: true, offset: (pageIndex+move)*WIDTH});
            BarAnimation(pageIndex+move)
        }
    }

    const BarAnimation = (index: number)=>{
        if(index>=Page.length) {return;}
        setPageIndex(index);
        Animated.timing(
            slideIndex, {
                toValue: index * WIDTH * 0.8 / Page.length,
                easing: Easing.ease,
                duration: 100,
            }).start();
    }

    return(
        <>
            <View style={{ width: WIDTH, alignSelf: 'center', backgroundColor: 'white'}}>
                <FlatList 
                ref={slideShowRef}
                data={DATA}
                renderItem={({ item }) => <Image style={{width:WIDTH,height:WIDTH*1.35}}source={item.image}/>}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                onScrollEndDrag={slideToIndex}
                showsHorizontalScrollIndicator={false}
                />
                <View onTouchStart={touchToIndex} style={{position:"absolute", bottom:40, width:WIDTH*0.8,backgroundColor:"rgba(255,255,255,0.3)",height:20,left:WIDTH*0.1}} >
                    <Animated.View style={{width:WIDTH*0.8/Page.length,height:20,backgroundColor:"#FFF",transform: [{translateX: slideIndex }]}}></Animated.View>
                </View>
                <View style={{position:"absolute",flexDirection:"row",paddingHorizontal:WIDTH*0.05,top:WIDTH*1.35*0.5}}>
                    <View onTouchStart={()=>scrollbyArrow(-1)}><LeftSlide/></View>
                    <View style={{flex:1}}></View>
                    <View onTouchStart={()=>scrollbyArrow(1)}><RightSlide/></View>
                </View>
            </View>
        </>
    );
};
export default BannerSlide;