import {FC} from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

export const Map: FC = (() => {
    return (
        <MapContainer
        center={[55.796134, 49.106405]}
        style={{width: '256px', height: '256px'}}
        zoom = {1}>
            <TileLayer
            url='https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=NZlr4UUljomfYJDzVovO'
            attribution={'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}/>
        </MapContainer>
    )
})