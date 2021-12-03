import React, {useState} from 'react';

const PlantsOrderContext = React.createContext({
    plants: [],
    initializePlants: () => {}
});

export const PlantsOrderContextProvider = (props) => {

    const [plants, setPlants] = useState([]);

    const initializePlants = (plantsFromApi) => {
        setPlants(plantsFromApi);
    }

    return (
        <PlantsOrderContext.Provider
            value={{ plants: plants, initializePlants: initializePlants }}>
            {props.children}
        </PlantsOrderContext.Provider>
    )
}
export default PlantsOrderContext;