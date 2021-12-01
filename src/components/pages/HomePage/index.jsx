import "./styles.css";
import {useEffect, useState} from 'react';
import {PlantItem} from "../../PlantItem";

export const HomePage = () => {

    const [plants,
        setPlants] = useState([]);

    useEffect(() => {
        getPlants();
    }, []);

    const [loading,
        setLoading] = useState(true);

    const getPlants = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-assignment3/databases/(def' +
                    'ault)/documents/Plants/')
            const data = await response.json();
            console.log(data);
            const formattedData = data
                .documents
                .map((item) => {
                    return item.fields
                });

            setPlants(formattedData);

            setLoading(false);

        } catch (err) {
            console.log(err)
            setLoading(false);
        }
    }

    return (
        <div className="home-page">
            <h1 className="page-title">
                Plants
            </h1>
            <div className="plant-container">
                {plants.map((plant) => (
                    <PlantItem
                        Image={plant.Image.stringValue}
                        Name={plant.Name.stringValue}
                        BotanicalName={plant.BotanicalName.stringValue}
                        PlantType={plant.PlantType.stringValue}></PlantItem>
                ))
                }
                
            {
                loading && <p>Loading data..</p>
            }

            </div>
        </div>
    );
};