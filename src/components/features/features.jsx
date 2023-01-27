import "./features.scss"
import FeaturesCard from "../features-card/features-card"

const Features = () => {
    return (
        <section name="features" className="features">
            <div className="features__wrapper">
                <div className="features__heading">
                    <h1 className="features__heading-title">Features</h1>
                    <p className="features__heading-text">Collezione biedt een aantal handige functies voor game-liefhebbers, waarmee je jouw favoriete games op één plek kunt verzamelen, nieuwe titels kunt ontdekken die bij jouw interesses passen en informatie kunt bekijken over elke game in jouw verzameling. Daarnaast kun je zoeken en filteren op basis van verschillende criteria, zoals genre, release-datum en populaire games.</p>
                </div>
                <div className="features__cards-container">
                    <FeaturesCard 
                        icon="fa-solid fa-trophy features__icon"
                        title="Al jouw games op 1 plek" 
                        text="Verzamel en bekijk jouw favoriete games op één plek." 
                    />
                    <FeaturesCard 
                        icon="fa-solid fa-bolt features__icon"
                        title="Ontdek nieuwe games" 
                        text="Ontdek nieuwe games die bij jouw interesses passen." 
                    />
                    <FeaturesCard 
                        icon="fa-solid fa-bookmark features__icon"
                        title="Bekijk je games terug" 
                        text="Bekijk details en informatie over elke game in jouw collectie, zoals releasedatum, ontwikkelaars, genre, en meer." 
                    />
                </div>
                <figure className="features__cube"></figure>
                <figure className="features__cube2"></figure>
            </div>
        </section>
    )
}

export default Features;