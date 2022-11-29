import "./features.scss"
import FeaturesCard from "../features-card/features-card"

const Features = () => {
    return (
        <section name="features" className="features">
            <div className="features__wrapper">
                <div className="features__heading">
                    <h1 className="features__heading-title">Features</h1>
                    <p className="features__heading-text">Magna veniam consequat ut occaecat. Incididunt laboris deserunt id deserunt veniam ut esse cupidatat ullamco. Officia enim laboris exercitation commodo occaecat magna esse deserunt ipsum amet ullamco est.</p>
                </div>
                <div className="features__cards-container">
                    <FeaturesCard 
                        icon="fa-solid fa-trophy features__icon"
                        title="Al jouw games op 1 plek" 
                        text="Occaecat consectetur Lorem sint minim dolore sit ullamco sunt ullamco. Nostrud ea proident elit esse in aute ad quis laboris tempor ad magna consequat pariatur." 
                    />
                    <FeaturesCard 
                        icon="fa-solid fa-bolt features__icon"
                        title="Ontdek nieuwe games" 
                        text="Occaecat consectetur Lorem sint minim dolore sit ullamco sunt ullamco. Nostrud ea proident elit esse in aute ad quis laboris tempor ad magna consequat pariatur." 
                    />
                    <FeaturesCard 
                        icon="fa-solid fa-bookmark features__icon"
                        title="Lorem ipsum" 
                        text="Occaecat consectetur Lorem sint minim dolore sit ullamco sunt ullamco. Nostrud ea proident elit esse in aute ad quis laboris tempor ad magna consequat pariatur." 
                    />
                </div>
                <figure className="features__cube"></figure>
                <figure className="features__cube2"></figure>
            </div>
        </section>
    )
}

export default Features;