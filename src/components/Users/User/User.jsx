import React from "react";
import {NavLink} from "react-router-dom";
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import useStyles from './userStyle'


export const FollowBtn = styled(BtnStyled)`
  width: 100%;
  display: flex;
  justify-content: center;
`

const User = React.memo(({usersData, blockFollow}) => {

		const classes = useStyles();

		return (
			<div className={classes.container}>
				{usersData.map(el => {
						return (
							<Card className={classes.root} key={el.id}>
								<NavLink
									to={`/Content/` + el.login}
									className={classes.content}
								>
									<CardActionArea>
										<CardMedia
											className={classes.media}
											image={el.avatar_url}
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography
												noWrap
												gutterBottom
												variant="h5"
												component="h2"
											>
												{el.login}
											</Typography>
											<Typography
												noWrap
												variant="body2"
												color="textSecondary"
												component="p"
											>
												{`id: ${el.id}`}
											</Typography>
										</CardContent>
									</CardActionArea>
								</NavLink>
								<CardActions>
									<FollowBtn
										primary={!el.followed}
										disabled={blockFollow.some(id => id === el.id)}
									>
										{el.followed ? "Unfollow" : "Follow"}
									</FollowBtn>
								</CardActions>
							</Card>
						);
					}
				)}
			</div>)
	}
)
export default User