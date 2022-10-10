import "./navbar.scss";

function Navbar(){
    return(
        <nav className="navbar" id="navbar">
            <section className="navbar__section-up">
                <ul className="navbar__list-up">
                    <figure>
                        <a className="logo" href="#navbar">Collezione</a>
                    </figure>
                    <li className="navbar__list-item-up"><a href="#navbar">Over</a></li>
                    <li className="navbar__list-item-up"><a href="#navbar">Features</a></li>
                    <li className="navbar__list-item-up"><a href="#navbar">Prijs</a></li>
                    <li className="navbar__list-item-up"><a href="#navbar">Contact</a></li>
                    <li className="navbar__list-item-up"><a href="#navbar">Login</a></li>
                </ul>
            </section>
            <section className="navbar__section-down">
                <ul className="navbar__list-down">
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Je games op 1 plek</li>
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Blijf georganiseerd</li>
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Ontdek nieuwe games</li>
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Altijd opzegbaar</li>
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Probeer gratis</li>
                </ul>
            </section>
        </nav>
    );
}

export default Navbar;