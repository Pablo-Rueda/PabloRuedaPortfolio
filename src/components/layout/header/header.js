import React,{useState} from 'react';

// Style & Structure: 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import headerStyles from "./header.module.scss";

//Components:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//Utilities:
import {useScrollPosition} from "./useScrollPosition"
import { Link } from 'react-scroll';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    customizeToolbar: {
      minHeight: '50px',
      paddingRight:55
    },
  }));
  
  export default function ButtonAppBar() {
  
    const classes = useStyles();
    const [shadowOnScroll, setShadowOnScroll] = useState({
      boxShadow: "0px 0px 0px 0px white",
    });
    const [barColor, setBarColor] = useState({
      background: 'transparent', margin: 0, boxShadow: "0px 0px 0px 0px black", 
    });
    const [linkColor, setLinkColor] = useState({
      color: 'white'
    });
    useScrollPosition(({ prevPos, currPos }) => {
        const shadow = -350 > currPos.y
        if(shadow){
            setShadowOnScroll({boxShadow: "0px 0px 3px 0.1px black"});
            setBarColor({ background: 'white', margin: 0, boxShadow: "0px 0px 0px 0px black", transition:"1s"});
            setLinkColor({transition:"0.5s"})
        }else{
            setShadowOnScroll({boxShadow: "0px 0px 0px 0px white"});
            setBarColor({ background: 'transparent', margin: 0, boxShadow: "0px 0px 0px 0px black", transition:"1s"});
            setLinkColor({color: 'white', transition:"1s"})
        }
      })
  
    return (
        <AppBar  position="fixed" className={classes.root} style={barColor}>
          <Toolbar className={classes.customizeToolbar} style={shadowOnScroll}>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Link className={headerStyles.navItem} style={linkColor} smooth duration={1000} to="main">Principal</Link>
              <Link className={headerStyles.navItem} style={linkColor} smooth duration={1000} to="about">Sobre mí</Link>
              <Link className={headerStyles.navItem} style={linkColor} smooth duration={1000} to="projects">Proyectos</Link>
              <Link className={headerStyles.navItem} style={linkColor} smooth duration={1000} to="contact">Contacto</Link>
            </Grid>
          </Toolbar>
        </AppBar>
    );
  }