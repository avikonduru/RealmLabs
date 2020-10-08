import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// material
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// icons
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	appBarTransparent: {
		padding: 20,
		backgroundColor: 'transparent',
		boxShadow: 'none',
		transition: '.5s',
	},
	appBarSolid: {
		padding: 10,
		backgroundColor: 'white',
		boxShadow:
			'0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20)',
		transition: '.5s',
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: { flexGrow: 1 },
	link: {
		margin: theme.spacing(1, 1.5),
		textTransform: 'none',
		fontSize: 17,
	},
	linkButton: {
		margin: theme.spacing(1, 1.5),
		textTransform: 'none',
		fontSize: 17,
	},
}));

const Header = (props) => {
	const { history } = props;
	const classes = useStyles();
	const navRef = useRef();

	const [anchorEl, setAnchorEl] = useState(null);
	const [navBackground, setNavBackground] = useState('appBarTransparent');

	const open = Boolean(anchorEl);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	navRef.current = navBackground;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 30;

			if (show) {
				setNavBackground('appBarSolid');
			} else {
				setNavBackground('appBarTransparent');
			}
		};

		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageURL) => {
		history.push(pageURL);
		setAnchorEl(null);
	};

	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};

	return (
		<Fragment>
			<CssBaseline />
			<AppBar
				position='fixed'
				color='default'
				elevation={0}
				className={classes[navRef.current]}
			>
				<Toolbar className={classes.toolbar}>
					<Typography
						variant='h6'
						color='inherit'
						noWrap
						className={classes.toolbarTitle}
					>
						<img
							src='realm-logo.png'
							alt='logo'
							className={classes.logo}
							style={{
								maxWidth: 40,
							}}
						/>
					</Typography>
					<nav>
						{!isMobile ? (
							<div>
								<Button href='#' color='primary' className={classes.link}>
									Team
								</Button>
								<Button href='#' color='primary' className={classes.link}>
									Videos
								</Button>
								<Button href='#' color='primary' className={classes.link}>
									Blog
								</Button>
								<Button href='#' color='primary' className={classes.link}>
									Podcasts
								</Button>
								<Button href='#' color='primary' className={classes.link}>
									Contact
								</Button>

								<Button
									href='#'
									color='primary'
									variant='contained'
									className={classes.linkButton}
								>
									JOIN
								</Button>
							</div>
						) : (
							<Fragment>
								<IconButton
									edge='start'
									color='inherit'
									aria-label='menu'
									onClick={handleMenu}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={() => setAnchorEl(null)}
								>
									<MenuItem>
										<Link
											variant='button'
											color='textPrimary'
											href='#'
											className={classes.link}
										>
											About
										</Link>
									</MenuItem>
									<MenuItem>
										<Link
											variant='button'
											color='textPrimary'
											href='#'
											className={classes.link}
										>
											Team
										</Link>
									</MenuItem>
									<MenuItem>
										<Link
											variant='button'
											color='textPrimary'
											href='#'
											className={classes.link}
										>
											Videos
										</Link>
									</MenuItem>
									<MenuItem>
										<Link
											variant='button'
											color='textPrimary'
											href='#'
											className={classes.link}
										>
											Blog
										</Link>
									</MenuItem>
									<MenuItem>
										<Link
											variant='button'
											color='textPrimary'
											href='#'
											className={classes.link}
										>
											Podcasts
										</Link>
									</MenuItem>
									<MenuItem>
										<Link
											variant='button'
											color='textPrimary'
											href='#'
											className={classes.link}
										>
											Contact
										</Link>
									</MenuItem>
									<MenuItem>
										<Button
											href='#'
											color='primary'
											variant='outlined'
											className={classes.linkButton}
										>
											JOIN
										</Button>
									</MenuItem>
								</Menu>
							</Fragment>
						)}
					</nav>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
};

Header.propTypes = {};

export default Header;
