// react and redux
import React, { useEffect } from "react";
import { connect } from "react-redux";

// actions
import { fetchBreweries } from "../actions";

// beer card component
import BeerCard from "./BeerCard";
import { classes } from "istanbul-lib-coverage";

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        flewWrap: "wrap",
        justifyContent: "center",
    },
  }));

const BeerList = props => {
    console.log(props);
    const classes = useStyles();

    useEffect(() => {
        props.fetchBreweries();
    }, []);
    
    if (props.isFetching) {
        return <h2>Loading breweries...</h2>;
    }

    
    return (
        <Grid container className={classes.container}>
            {props.error && <p>{props.error}</p>}
            {props.breweries.map(brewery => (
                <BeerCard key={brewery._id} brewery={brewery}/>
            ))}
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (
    mapStateToProps,
    { fetchBreweries }
)(BeerList);

