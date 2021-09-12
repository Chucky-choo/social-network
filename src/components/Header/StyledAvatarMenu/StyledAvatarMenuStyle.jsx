import {makeStyles} from "@material-ui/core";

const ITEM_HEIGHT = 42;

const useStyles = makeStyles({
	ava: {
		width: ITEM_HEIGHT,
		height: ITEM_HEIGHT,
		borderRadius: 50,
	},
	activeLink: {
		color: 'red',
	},
	link: {
		textDecoration: 'none',
		color: 'black',
		'&:hover': {
			textDecoration: 'none',
			color: 'black',
		}
	},
	style: {
		maxHeight: ITEM_HEIGHT * 1.5,
	},

});

export default useStyles