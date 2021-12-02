import { useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';

import "./styles.css";
import PlantsOrderContext from '../../../context/PlantsOrderContext';

export const DetailsPage = (props) => {
    const {Name} = useParams();

    const [plant, setPlant] = useState({});

    const globalState = useContext(PlantsOrderContext);

    useEffect ( () => {
        const plant = globalState.plants.find(
            (plant) => plant.Name.stringValue === Name
        );
        setPlant(plant);
    }, [])

    
    if (plant){
    return (
        <div className="plants-page">
            <h1 className="plants-title">{plant.Name?.stringValue}</h1>
            <h2 className="plants-botanical-name"> Botanical Name: {plant.BotanicalName?.stringValue}</h2>
            <img src={plant.Image?.stringValue} alt="plant image"/>
            
            <p className="plants-type"> Plant Type: {plant.PlantType?.stringValue}</p>

            <p className="plants-bloom-time"> Bloom Time: {plant.BloomTime?.stringValue} </p>

            <p className="plants-difficulty"> Difficulty: {plant.DifficultyRating?.stringValue}</p>

            <p className="sunlight"> Sunlight: {plant.Sunlight?.stringValue} </p>

            <p className="watering"> Watering: {plant.Watering?.stringValue}</p>


          
        </div>
    )

    } else {
        return <p> No plant with this name </p>
    }
        
    
};