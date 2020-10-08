import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import HeroSection from '../components/HomePageComponents/HeroSection';
import AboutSection from '../components/HomePageComponents/AboutSection';

const HomePage = (props) => {
	return (
		<Fragment>
			<HeroSection />
			<AboutSection />
		</Fragment>
	);
};

HomePage.propTypes = {};

export default HomePage;
