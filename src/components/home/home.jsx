import Navbar from "../navbar/navbar"
import Hero from "../hero/hero"
import About from "../about/about"
import Features from "../features/features"
import Subs from "../subs/subs"
import Contact from "../contact/contact"
import Footer from "../footer/footer"

const Home = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Subs />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;