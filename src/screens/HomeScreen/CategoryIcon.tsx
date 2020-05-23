import React, { useState } from 'react';
import Fruits from './../../asset/CategoryIcon/update/fruits.svg';
import Vegetable from './../../asset/CategoryIcon/update/vegetable.svg';
import Meat from './../../asset/CategoryIcon/update/meat.svg';
import Cheese from './../../asset/CategoryIcon/update/cheese.svg';
import Bread from './../../asset/CategoryIcon/update/Bread.svg';
import Can from './../../asset/CategoryIcon/update/canned-food.svg';
import Fish from './../../asset/CategoryIcon/update/fish.svg';
import Icecream from './../../asset/CategoryIcon/update/ice-cream.svg';
import Kimchi from './../../asset/CategoryIcon/update/kimchi.svg';
import ToiletPaper from './../../asset/CategoryIcon/update/toilet-paper.svg';
import Water from './../../asset/CategoryIcon/update/water.svg';
import Snack from './../../asset/CategoryIcon/update/snack.svg';

const categorys = [ //서버로
    {
        name: '과일',
        key: "0",
        image: <Fruits/>
    },
    {
        name: '채소',
        key: "1",
        image: <Vegetable/>
    },
    {
        name: '정육',
        key: "2",
        image: <Meat/>
    },
    {
        name: '계란/유제품',
        key: "3",
        image: <Cheese/>
    },
    {
        name: '수산/건어물',
        key: "4",
        image: <Fish/>
    },
    {
        name: '가공/간편식',
        key: "5",
        image: <Can/>
    },
    {
        name: '쌀/김치/반찬',
        key: "6",
        image: <Kimchi/>
    },
    {
        name: '베이커리',
        key: "7",
        image: <Bread/>
    },
    {
        name: '생수/음료',
        key: "8",
        image: <Water/>
    },
    {
        name: '과자/초콜릿',
        key: "9",
        image: <Snack/>
    },
    {
        name: '아이스크림',
        key: "10",
        image: <Icecream/>
    },
    {
        name: '생활용품',
        key: "11",
        image: <ToiletPaper/>
    },
]

export default categorys;