import {observer} from "mobx-react";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {Map} from '../../component/Map'
import styles from "./index.module.sass";
import {InputWithIcon} from "../../component/ui/InputWithIcon";
import search from "../../../svg-icons/search.svg"
import {useState} from "react";
import collectionPointsImg from "../../assets/img/collectionPointsMock.png"
import {CollectionPointCard} from "../../component/ui/CollectionPointCard";
import {Checkbox} from "../../component/ui/Checkbox";
const collectionPoints = [
    { img: collectionPointsImg, address: "ул.Кремлёвская, 88", materials: "Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы..." },
    { img: collectionPointsImg, address: "ул.Кремлёвская, 88", materials: "Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы..." },
]


export const CollectionPoints = observer(() => {
    const [searchFilter, setSearchFilter] = useState();
    return (
        <>
            <div className={ styles.wrapper__map }>
                <Map/>
            </div>
            <div className={ styles.wrapper}>
                <div className={ styles.wrapper__filter }>
                    <InputWithIcon className={ styles.filter } img={ search } type={"text"} placeholder={"Поиск"}  value={ searchFilter }/>

                    <select className={ styles.select }>
                        <option>H&M</option>
                        <option>P&B</option>
                        <option>Adidas</option>
                    </select>
                    <select className={ styles.select }>
                        <option>Стекло</option>
                        <option>Бумага</option>
                        <option>Металл</option>
                    </select>
                </div>
                <section className={ styles.addresses__wrapper }>
                    {collectionPoints.map((item, index) => (
                        <CollectionPointCard address={ item.address } img={ item.img } materials={ item.materials }/>
                        ))
                    }
                </section>
            </div>
        </>
    )
})