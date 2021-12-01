import './styles.css';

export const PlantItem = (props) => {
    const {Image, Name, BotanicalName, PlantType} = props;

    return (
        <div className="plant">
            <img className="plant-photo" src={Image} alt={Name + BotanicalName + "photo"}/>
            <h1 className="plant-name">
                {Name}
            </h1>
            <p className="plant-botanical-name">
                {BotanicalName}
            </p>
            <p className="plant-type">
                {PlantType}
            </p>
        </div>
    )
}
