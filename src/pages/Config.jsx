import Estacion from "../components/Estacion";
import Mapa from "../components/Mapa";
import getStations from "../utils/getStations";
import { useState, useEffect } from "react";
import seleccion from "../seleccion.json";
import { MdHome, MdLogout } from "react-icons/md";

const Config = () => {
  const [stations, setStations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    getStations(setStations, setLoading);
  }, []);

  useEffect(() => {
    if (stations.length != []) {
      setSelected(stations.data.stations[0].station_id);
      setLat(stations.data.stations[0].lat);
      setLon(stations.data.stations[0].lon);
    }
  }, [stations]);

  return isLoading ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <header>
        <a href="/state">
          <MdHome />
        </a>
        <a href="/">
          <MdLogout />
        </a>
      </header>
      <h1>Configuración</h1>
      <div className="estaciones">
        <div>
          {stations.data.stations.map((station) => {
            return (
              <Estacion
                key={station.station_id}
                station={station}
                seleccionados={seleccion.seleccionados}
                setLat={setLat}
                setLon={setLon}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
        <Mapa lat={lat} lon={lon} />
      </div>
    </>
  );
};

export default Config;