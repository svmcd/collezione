
const FeaturesCard = (props) => {
    return(
        <div className="features__card">
            <i className={props.icon}></i>
            <h2 className="features__title">{props.title}</h2>
            <p className="features__text">{props.text}</p>
        </div>
    )
}

export default FeaturesCard;