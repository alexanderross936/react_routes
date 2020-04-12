import React from 'react'
import cars from '../cars.json'
import { Button } from '@material-ui/core';
import { Card, CardContent, CardHeader } from '@material-ui/core'; 
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const grep = props.match.params.id;
    console.log(cars)
    const id = cars.find(x => x.id == grep).id;
    const name = cars.find(x => x.id == grep).Name;
    const mpg = cars.find(x => x.id == grep).Miles_per_Gallon;
    const cylinders = cars.find(x => x.id == grep).Cylinders;
    const displacement = cars.find(x => x.id == grep).Displacement;
    const horsepower = cars.find(x => x.id == grep).Horsepower;
    const weight_in_lbs = cars.find(x => x.id == grep).Weight_in_lbs;
    const acceleration = cars.find(x => x.id == grep).Acceleration;
    const origin = cars.find(x => x.id == grep).Origin;
    // console.log(name.Origin)
    // const name = cars.find(x => x.id == props.match.params.id).Name
return (
    <div>
        <Card m={100}>
            <CardHeader title={name} />
            <CardContent>
        <Button variant='contained'>
        <h3>ID:</h3> 
        <p>{id}</p>
        </Button>
            <Button variant='contained'>
        <h3>Name:</h3> 
        <p>{name}</p>
        </Button>
        <Button variant='contained'>
        <h3>Miles Per Gallon:</h3>
        <p>{mpg}</p>
        </Button>
        <Button variant='contained'>
        <h3>Cylinders:</h3>
        <p>{cylinders}</p>
        </Button>
        <Button variant='contained'>
        <h3>Displacement:</h3>
        <p>{displacement}</p>
        </Button>
        <Button variant='contained'>
        <h3>Horsepower:</h3>
        <p>{horsepower}</p>
        </Button>
        <Button variant='contained'>
        <h3>Weight in LBS:</h3>
        <p>{weight_in_lbs}</p>
        </Button>
        <Button variant='contained'>
        <h3>Acceleration:</h3>
        <p>{acceleration}</p>
        </Button>
        <Button variant='contained'>
        <h3>Origin:</h3>
        <p>{origin}</p>
        </Button>
            </CardContent>
        </Card>










    </div>
   
)

}

export default Car