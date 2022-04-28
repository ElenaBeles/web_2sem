import { ProductModel } from "../models/ProductModel";
import {MainStore} from "./MainStore";
import {action, makeObservable, observable} from "mobx";

import first from "../mocks/img/1.png";
import second from "../mocks/img/2.png";
import third from "../mocks/img/3.png";
import fourth from "../mocks/img/4.png";
import fifth from "../mocks/img/5.png";

const collectionMock: ProductModel[] = [
    {
        id: 1,
        title: "Nike Air Max 2021",
        category: "Мужская обувь",
        cost: 1000,
        posterImg: first,
        brand: "NIKE",
        rating: 31,
        date: 2021
    },
    {
        id: 2,
        title: "Nike Air Max 90 Premium",
        category: "Мужская обувь",
        cost: 750,
        posterImg: second,
        brand: "NIKE",
        rating: 32,
        date: 2022
    },
    {
        id: 3,
        title: "Adidas Alphabounce RC",
        category: "мужская",
        cost: 1200,
        posterImg: third,
        brand: "Adidas",
        rating: 33,
        date: 2017
    },
    {
        id: 4,
        title: "Nike Air Max 2021",
        category: "женская",
        cost: 1000,
        posterImg: fourth,
        brand: "H&M",
        rating: 23,
        date: 2032
    },
    {
        id: 5,
        title: "Nike Air Force 1 Low",
        category: "мужская",
        cost: 2100,
        posterImg: fifth,
        brand: "NIKE",
        rating: 31,
        date: 2014
    }
]



export class CommoditiesStore {
    products: ProductModel[];

    constructor(public mainStore : MainStore) {
        makeObservable(this, {
            products: observable,
            addCommodity: action,
            removeCommodity: action
        })

        this.products = collectionMock;

    }

    addCommodity = (product: ProductModel) => {
        this.products.push(product);
    }

    removeCommodity = (product: ProductModel) => {
        this.products.unshift(product);
    }
}