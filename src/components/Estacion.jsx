import { useState, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlaceIcon from "@mui/icons-material/Place";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";

export const Estacion = ({ station, favorites, setLat, setLon, selected, setSelected }) => {
	const [favorite, setFavorite] = useState(favorites.includes(Number(station.station_id)));

	useEffect(() => {
		if (favorites.length != 0) {
			setFavorite(favorites.includes(Number(station.station_id)));
		}
	}, [favorites]);

	const handleFavorite = () => {
		setFavorite(!favorite);
		alert("Implementar llamado a Backend");
	};

	const handleSelected = () => {
		setLat(station.lat);
		setLon(station.lon);
		setSelected(station.station_id);
	};

	return (
		<>
			<ListItem secondaryAction={<Checkbox edge="end" onChange={handleFavorite} checked={favorite} />}>
				<ListItemButton selected={station.station_id == selected} onClick={handleSelected}>
					<ListItemIcon>
						<PlaceIcon />
					</ListItemIcon>
					<ListItemText primary={station.name.substring(6)} secondary={station.address} />
				</ListItemButton>
			</ListItem>
			<Divider variant="middle" component="li" />
		</>
	);
};
