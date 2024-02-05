import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./ContactUsLeftSide.module.css";

function ContactUsLeftSide() {
    return (
        <div className={styles.mapCantainer}>
            <MapContainer
                center={[50.04913324300537, 21.981686483461115]}
                zoom={13}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.04913324300537, 21.981686483461115]}>
                    <Popup>Uitm University</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default ContactUsLeftSide;
