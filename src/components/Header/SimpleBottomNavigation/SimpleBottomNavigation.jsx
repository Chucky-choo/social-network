import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ChatIcon from '@material-ui/icons/Chat';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import {setActiveContent} from "../../../redux/header-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router";


const useStyles = makeStyles({
  root: {
    width: 300,
  },
  btn: {
    color: 'black',
  },
  red: {
    background: 'red',
    width: 28,
    height: 28,
    borderRadius: '90%',
    marginBottom: -3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    'svg': {
      color: 'white',
    }
  },
  music: {
    color: 'white'
  }
});

export default function SimpleBottomNavigation() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const location = useLocation()


  const activeContent = useSelector(store => store.auth.activeContent)

  const handleChange = (event, newValue) => {
    dispatch(setActiveContent(newValue));
  };

  const history = useHistory();

  function handleClick(way) {
    history.push(way);
  }

  useEffect(() => {
    dispatch(setActiveContent(location.pathname))
  }, [])


  return (
    <BottomNavigation
      value={activeContent}
      onChange={handleChange}
      className={classes.root}
      // color="secondary"
    >
      <BottomNavigationAction onClick={() => {
        handleClick("/music")
      }}
                              label="Music"
                              value='/music'
                              icon={
                                <div className={classes.red}>
                                  < PlayCircleOutlineIcon/>
                                </div>}
                              className={classes.music}/>
      <BottomNavigationAction onClick={() => {
        handleClick("/dialogs")
      }}
                              label="Chat"
                              value='/dialogs'
                              icon={<ChatIcon/>}
                              className={classes.btn}/>
      <BottomNavigationAction onClick={() => {
        handleClick("/users")
      }}
                              className={classes.btn}
                              label="Users"
                              value='/users'
                              icon={<ExploreOutlinedIcon/>}/>
    </BottomNavigation>
  );
}

