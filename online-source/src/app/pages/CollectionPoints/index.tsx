import {observer} from "mobx-react";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {Map} from '../../component/Map'
import styles from "./index.module.sass";

export const CollectionPoints = observer(() => {
    return (
        <div className={ styles.wrapper }>
            <Map/>
        </div>
    )
})