import React from "react";

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// useStyles
const useStyles = makeStyles({
    card: {
        maxWidth: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "25px",
    },
    title: {
        fontSize: 20,
    },
    address: {
        fontSize: 16,
    },
    phone: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        display: "flex",
        justifyContent: "center",
    },
  });


const BeerCard = props => {
    console.log(props)
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.brewery.name}
                </Typography>
                <Typography className={classes.address} gutterBottom>
                    Address: {props.brewery.street} <br/>
                    {props.brewery.city} <br/>
                    {props.brewery.state}
                </Typography>
                <Typography className={classes.phone} gutterBottom>
                    Phone: {props.brewery.phone} 
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Brewery type: {props.brewery.brewery_type}
                </Typography>
            </CardContent>
            <CardActions className={classes.button}>
                <Button href={props.brewery.website_url} size="small">Brewery Homepage</Button>
            </CardActions>
        </Card>
    )
};

export default BeerCard;