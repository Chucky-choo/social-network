import {makeStyles} from "@material-ui/core";
import background from "../../assets/imeges/mountain-and-sea-4770131_1920.jpg";

export const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: 0,
    padding: 0,
    height: 'calc(100vh - 60px)',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 400,
    background: 'rgba(94,144,203,0.62)',
    borderRadius: 6,
    paddingTop: 50,
    paddingBottom: 50,
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 100,
    width: 100,
    color: "white",
  },
  h1: {
    color: "white"
  },
  footer: {
    width: 300,
    display: 'flex',
    justifyContent: 'space-around',
    color: "white",
  },
  link: {
    color: "white",
    '&:hover':{
      color: "white",
      textDecoration: 'none',

    }
  },
  captcha: {
    width: 300,
    borderRadius: 6,
  }

});
