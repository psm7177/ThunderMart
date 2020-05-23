import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { color1, headerHeight } from '..//components/style';
import Icon from 'react-native-vector-icons/AntDesign'
import { fromLeft, fromRight, flipX, fadeIn, fromBottom, fromTop } from 'react-navigation-transitions';

import HomeScreen, {
    CategoryDetailScreen
} from './HomeScreen';

import CartScreen from './CartScreen'
import OrderHistoryScreen, {
    OrderHistoryDetailScreen
} from './OrderHistoryScreen';
import ProfileScreen from './ProfileScreen';

import SignInScreen, {
    SignUpPolicyScreen,
    PolicyDetailScreen
} from './SignInScreen';

import AddressScreen, {
    AppendAddressScreen,
    SearchAddressScreen
} from './AddressScreen';

import PhoneScreen from './PhoneScreen';

import ItemSearchScreen, {
    ItemSearchedScreen,
} from './ItemSearchScreen'

import OrderScreen, {
    OrderResultScreen
} from './OrderScreen'

import OrderOptionScreen from './OrderOptionScreen'
import CoffeeFlexScreen from './CoffeeFlexScreen'
import MartScreen from './MartScreen';

const HomeStack = createStackNavigator(
    {
        HomeScreen,
        CategoryDetailScreen
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerShown: false,
        },
        transitionConfig: () => fromRight()
    }
);

const CartStack = createStackNavigator(
    {
        CartScreen
    },
    {
        initialRouteName: 'CartScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

const OrderHistoryStack = createStackNavigator(
    {
        OrderHistoryScreen
    },
    {
        initialRouteName: 'OrderHistoryScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

const ProfileStack = createStackNavigator(
    {
        ProfileScreen
    },
    {
        initialRouteName: 'ProfileScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

const SignStack = createStackNavigator(
    {
        SignInScreen,
        SignUpPolicyScreen,
        PolicyDetailScreen
    },
    {
        initialRouteName: 'SignInScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

const AddressStack = createStackNavigator(
    {
        AddressScreen,
        AppendAddressScreen,
        SearchAddressScreen
    },
    {
        initialRouteName: 'AddressScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

const PhoneStack = createStackNavigator(
    {
        PhoneScreen
    },
    {
        initialRouteName: 'PhoneScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
    }
)

const ItemSearchStack = createStackNavigator(
    {
        ItemSearchScreen,
        ItemSearchedScreen
    },
    {
        initialRouteName: 'ItemSearchScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

const MartStack = createStackNavigator(
    {
        MartScreen
    },
    {
    initialRouteName: 'MartScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

const MojarStack = createStackNavigator(
    {
        HomeStack,
        CartStack,
        OrderHistoryStack,
        ProfileStack,
        ItemSearchStack,
        AddressStack,
    },
    {
        initialRouteName: 'HomeStack',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
);



const MainStack = createStackNavigator(
    {
        MojarStack,
        MartStack,
        SignStack,
        PhoneStack,
        OrderHistoryDetailScreen,
        OrderScreen,
        OrderResultScreen,
        OrderOptionScreen,
        CoffeeFlexScreen
    },
    {
        initialRouteName: 'MojarStack',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

export default createAppContainer(MainStack)