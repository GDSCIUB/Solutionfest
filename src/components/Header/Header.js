import React from 'react';
import logo from '../../assets/logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css';
import SocialLinks from '../SocialLinks/SocialLinks';

const Header = () => {
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='sidebarLinks'>
                <a href='/' className='sidebarLinksTag'>Home</a>
                <a href='/#About' className='sidebarLinksTag'>About</a>
                <a href='/#Prizes' className='sidebarLinksTag'>Prizes</a>
                <a href='/#Sponsors' className='sidebarLinksTag'>Sponsors</a>
                <a href='/Team2022' className='sidebarLinksTag'>Team</a>
                <a href='/#Faqs' className='sidebarLinksTag'>Faqs</a>
                <a
                    href='https://forms.gle/UVVcAG1xtDqPANn38'
                    className='sidebarLinksTag' target="_blank"
                    rel="noreferrer">
                    Join our Team
                </a>
                <a href='/Code-of-conduct' className='sidebarLinksTag'>Code of Conduct</a>
                <SocialLinks />
            </div>
        </div>
    )
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div className='header-logo'>
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {['right'].map((pages) => (
                            <React.Fragment key={[pages]}>
                                <MenuIcon onClick={toggleDrawer(pages, true)} />
                                <SwipeableDrawer
                                    anchor={pages}
                                    open={state[pages]}
                                    onClose={toggleDrawer(pages, false)}
                                    onOpen={toggleDrawer(pages, true)}
                                >
                                    {list(pages)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </Box>
                    <nav className='navbar'>
                        <ul className='navbarLinks'>
                            <li><a href="/" className='navbarLinksTag'>Home</a></li>
                            <li><a href="/#About" className='navbarLinksTag'>About</a></li>
                            <li><a href="/#Prizes" className='navbarLinksTag'>Prizes</a></li>
                            <li><a href="/#Sponsors" className='navbarLinksTag'>Sponsors</a></li>
                            <li><a href="/#Faqs" className='navbarLinksTag'>Faqs</a></li>
                        </ul>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;
