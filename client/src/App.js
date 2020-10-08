import React, { Fragment } from 'react';
import './App.css';
import styled from 'styled-components';
import theme from './theme';

// material
import { ThemeProvider } from '@material-ui/core/styles';

// pages
import HomePage from './pages/HomePage';

// components
import Header from './components/Header';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
