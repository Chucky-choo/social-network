import {makeStyles} from "@material-ui/core/styles";

 const useStyles = makeStyles({
    container: {
        marginBottom: 20,
        padding: 20,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 24,
        overflowY: 'scroll',
        height: 'calc(100vh - 230px )',
        ['@media (max-width:645px)']: {
            height: 'calc(100vh - (278px + 135px) )',
        },
    },

    root: {
        minHeight: 380,
        minWidth: 200,
        maxWidth: 300,
        maxHeight: 500,
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

export default useStyles