import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import animationData from '../../utils/images/hero-animation.json';

// material
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
}));

const HeroSection = (props) => {
	const classes = useStyles();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<Fragment>
			<div className={classes.heroContent}>
				<Container>
					<Typography
						component='h1'
						variant='h2'
						align='left'
						color='textPrimary'
						gutterBottom
					>
						Silicon Valley doesn’t have a monopoly on good startup ideas
					</Typography>
					<Typography variant='h5' align='left' color='textSecondary' paragraph>
						Our startup studio believes that world changing companies can come
						from anywhere
					</Typography>
					<div className={classes.heroButtons}>
						<Grid container spacing={2} justify='left'>
							<Grid item>
								<Button variant='contained' color='primary'>
									JOIN
								</Button>
							</Grid>
							<Grid item>
								<Button variant='outlined' color='primary'>
									JOIN
								</Button>
							</Grid>
						</Grid>
					</div>
					<Lottie options={defaultOptions} height={400} width={400} />
				</Container>
			</div>
		</Fragment>
	);
};

HeroSection.propTypes = {};

export default HeroSection;
