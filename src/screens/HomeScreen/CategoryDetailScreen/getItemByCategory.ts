import { shopNameType, itemType } from './../../../components/types';
const secret = require('../../../../secret.json')

export default async function (shop: shopNameType, category: number): Promise<itemType[]> {
    try {
        const getItem = await fetch(`${secret.endPoint}/items/list?shop=${shop}&category=${category}`, {
            method: 'GET'
        })
        const res = await getItem.json()
        if (res.res_code === 0) {
            return res.item_list as itemType[]
        } else {
            throw new Error('get item by category error')
        }
    } catch (error) {
        throw error
    }

}