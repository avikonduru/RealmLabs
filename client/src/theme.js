import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: `"Lexend Deca", sans-serif`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		font: '#0A2A48',
	},
	palette: {
		primary: {
			main: '#0A2A48',
		},
		secondary: {
			main: '#FD352C',
		},
	},
});

export default theme;
