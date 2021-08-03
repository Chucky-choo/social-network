import React from "react";
import s from "./user.module.scss"
import shadow from '../../../assets/imeges/kage.png'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeFollowThunkCreators} from "../../../redux/users-reducer";
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'


const useStyles = makeStyles({
  root: {
    minHeight: 450,
    minWidth: 200,
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 240,
  },
  content: {
    textDecoration: 'none',
    color: 'black',
    maxHeight: 320,
    ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%',
    },
    '&:hover': {
      textDecoration: 'none',
      color: "black"
    }

  },
});

export const FollowBtn = styled(BtnStyled)`
  width: 100%;
  display: flex;
  justify-content: center;
`

const User = ({usersData, blockFollow}) => {
  const setFollow = changeFollowThunkCreators

  const dispatch = useDispatch()

  const classes = useStyles();

  return (
    <div className={s.container}>
      {usersData.map(el => {
          return (
            <Card className={classes.root} key={el.id}>
              <NavLink to={`/Content/` + el.id} className={classes.content}>
                <CardActionArea>
                  <CardMedia className={classes.media}
                             image={el.photos.small || shadow}
                             title="Contemplative Reptile"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {el.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {el.status}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </NavLink>
              <CardActions >
                <FollowBtn primary={!el.followed}
                           onClick={() => {dispatch(setFollow(el.id, el.followed))}}
                           disabled={blockFollow.some(id => id === el.id)}>
                  {el.followed ? "Unfollow" : "Follow"}
                </FollowBtn>
              </CardActions>
            </Card>
          );
        }
      )}
    </div>)
}

export default User