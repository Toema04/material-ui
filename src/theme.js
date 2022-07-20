import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
	palette: {
		primary: {
			main: purple[600],
			light: "skyblue",
		},
		secondary: {
			main: "##1976d2",
		},
		otherColor: {
			mode: "dark",
		},
	},
});
