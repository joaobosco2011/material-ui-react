import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomersCard from "./Cards";
import Grid from '@material-ui/core/Grid';
import { Container } from "@material-ui/core";

const Costumers = () => {

    const [costumers, setCostumers] = useState([])

    console.log(costumers);

    useEffect (() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                setCostumers(response.data.data)
            })
    },[])
    
    return (
        <>
            <h1>Costumers</h1>
            <Container fixed>
                <Grid 
                    spacing={3}
                    container
                >
                    {
                        costumers.map(item => (
                            <Grid item xs={12} md={6} lg={4} xl={3}>
                                <CustomersCard 
                                    name={item.first_name}
                                    lastname={item.last_name}
                                    email={item.email}
                                    avatar={item.avatar}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Costumers