import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

export default function Carta(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        {props.nombres.charAt(0)}
                    </Avatar>
                }
                action={
                    <div>
                        <IconButton onClick={props.onEdit} aria-label="Settings">
                            <Edit />
                        </IconButton>
                        <IconButton onClick={props.onDelete} aria-label="Settings">
                            <Delete />
                        </IconButton>

                    </div>
                }
                title={props.nombres}
                subheader={props._id}
            />

            <CardContent>
                <Typography color="textSecondary" component="p">
                    {props.ocupacion}
                </Typography>
                <Typography color="textSecondary" component="p">
                    {props.correo}
                </Typography>
                <Typography color="textSecondary" component="p">
                    Estado: {props.estado}
                </Typography>
            </CardContent>


        </Card>
    );
}



const useStyles = makeStyles(theme => ({
    card: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginBottom: 30,
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
            margin: 30,
        },
        [theme.breakpoints.up('lg')]: {
            width: '30%',
            margin: 30,
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
