import React, { useContext, useState } from "react";
import { Box, Typography, Container, IconButton, Toolbar, List, Divider, styled, Switch, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems } from "../components/listItems";
import { Copyright } from "../components/CopyRight";
import { MUIWrapperContext } from "../components/MUIWrapper";
import { Outlet } from "react-router-dom";
import AutContext from "../utils/AutContex";

export const Dashboard = () => {
	const autenticador = useContext(AutContext);
	const theme = useTheme();
	const muiUtils = React.useContext(MUIWrapperContext);
	const drawerWidth = 240;
	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== "open",
	})(({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
		"& .MuiDrawer-paper": {
			position: "relative",
			whiteSpace: "nowrap",
			width: drawerWidth,
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: "border-box",
			...(!open && {
				overflowX: "hidden",
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up("sm")]: {
					width: theme.spacing(9),
				},
			}),
		},
	}));

	const [open, setOpen] = useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar position="absolute" open={open}>
				<Toolbar
					sx={{
						pr: "24px", // keep right padding when drawer closed
					}}
				>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						sx={{
							marginRight: "36px",
							...(open && { display: "none" }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
						{autenticador.email}
					</Typography>
					<Switch checked={theme.palette.mode === "dark"} onChange={muiUtils.toggleColorMode} />
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<Toolbar
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						px: [1],
					}}
				>
					<IconButton onClick={toggleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</Toolbar>
				<Divider />
				<List component="nav">
					<MainListItems />
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
					flexGrow: 1,
					height: "100vh",
					overflow: "auto",
				}}
			>
				<Toolbar />
				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Outlet />
					<Copyright sx={{ pt: 4 }} />
				</Container>
			</Box>
		</Box>
	);
};
