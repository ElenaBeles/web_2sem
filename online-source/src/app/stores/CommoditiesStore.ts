import {CommodityModel} from "../models/СommodityModel";
import {MainStore} from "./MainStore";
import {action, makeObservable, observable} from "mobx";

import first from "../mocks/img/1.png";
import second from "../mocks/img/2.png";
import third from "../mocks/img/3.png";
import fourth from "../mocks/img/4.png";
import fifth from "../mocks/img/5.png";


const collectionMock = [
    {
        id: 1,
        title: "Nike Air Max 2021",
        category: "Мужская обувь",
        cost: 1000,
        posterImg: first,
        brand: "NIKE"
    },
    {
        id: 2,
        title: "Nike Air Max 90 Premium",
        category: "Мужская обувь",
        cost: 750,
        posterImg: second,
        brand: "NIKE"
    },
    {
        id: 3,
        title: "Adidas Alphabounce RC",
        category: "мужская",
        cost: 1200,
        posterImg: third,
        brand: "Adidas"
    },
    {
        id: 4,
        title: "Nike Air Max 2021",
        category: "женская",
        cost: 1000,
        posterImg: fourth,
        brand: "H&M"
    },
    {
        id: 5,
        title: "Nike Air Force 1 Low",
        category: "мужская",
        cost: 2100,
        posterImg: fifth,
        brand: "NIKE"
    }
]



export class CommoditiesStore {
    commodities: CommodityModel[];

    constructor(public mainStore : MainStore) {
        makeObservable(this, {
            commodities: observable,
            addCommodity: action,
            removeCommodity: action
        })

        this.commodities = collectionMock;

    }

    addCommodity = (commodity: CommodityModel) => {
        this.commodities.push(commodity);
    }

    removeCommodity = (commodity: CommodityModel) => {
        this.commodities.unshift(commodity);
    }
}