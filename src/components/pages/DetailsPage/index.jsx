import {useParams} from 'react-router';
import {useContext, useEffect, useState} from 'react';
import "./styles.css";
import PlantsOrderContext from '../../../context/PlantsOrderContext';

export const DetailsPage = (props) => {

    const {Name} = useParams();

    const [plant, setPlant] = useState({});

    const globalState = useContext(PlantsOrderContext);

    useEffect(() => {
        const plant = globalState.plants.find((plant) => plant.Name.stringValue === Name);
        setPlant(plant);
    }, [])

    if (plant) {

        return (

            <div className="plants-page">

                <div className="image">
                    <img className="plant-image" src={plant.Image?.stringValue} alt="plant image"/>
                </div>

                <div className="info">
                    <div className="name">
                        <h1 className="plants-name"> {plant.Name?.stringValue}
                            <h2 className="plants-botanical-name"> ( {plant.BotanicalName?.stringValue} ) </h2>
                        </h1>
                    </div>
                </div>

                <div className="details">
                    <div className="Type">
                        <p className="title"> Plant Type: </p>
                        <p className="data"> {plant.PlantType?.stringValue} </p>
                    </div>

                    <div className="BloomTime">
                        <p className="title"> Bloom Time: </p>
                        <p className="data"> {plant.BloomTime?.stringValue}</p>
                    </div>

                    <div className="Difficulty">
                        <p className="title"> Difficulty: </p>
                        <p className="data">{plant.DifficultyRating?.stringValue} </p>
                    </div>

                    <div className="Sunlight">
                        <p className="title"> Sunlight: </p>
                        <p className="data">{plant.Sunlight?.stringValue} </p>
                    </div>

                    <div className="Watering">
                        <p className="title"> Watering: </p>
                        <p className="data">{plant.Watering?.stringValue}</p>
                    </div>
                </div>

            </div>
        )

    } else {
        return <p> No plant with this name </p>
    }
};