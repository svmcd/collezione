import "./footer.scss"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__wrapper">
                <ul className="footer__column">
                    <li className="footer__link">Starten</li>
                    <li className="footer__link">Word abonnee</li>
                    <li className="footer__link">App downloaden</li>
                    <li className="footer__link">Promotiecode invoeren</li>
                    <li className="footer__link">FAQ</li>
                </ul>
                <ul className="footer__column">
                    <li className="footer__link">Volg Collezione</li>
                    <li className="footer__link">Instagram</li>
                    <li className="footer__link">Twitter</li>
                    <li className="footer__link">YouTube</li>
                    <li className="footer__link">TikTok</li>
                </ul>
                <ul className="footer__column">
                    <li className="footer__link">Lees meer</li>
                    <li className="footer__link">Over Collezione</li>
                    <li className="footer__link">Investeerders</li>
                    <li className="footer__link">Gebruiksvoorwaarden</li>
                    <li className="footer__link">Privacy Policy</li>
                    <li className="footer__link">Over cookies</li>
                </ul>
                <ul className="footer__column">
                    <li className="footer__link">Kies land</li>
                    <select name="land" id="">
                        <option value="netherlands">🇳🇱 Netherlands</option>
                        <option value="turkiye">🇹🇷 Turkiye</option>
                        <option value="england">🇬🇧 England</option>
                        <option value="us">🇺🇸 United States</option>
                        <option value="germany">🇩🇪 Germany</option>
                        <option value="france">🇫🇷 France</option>
                        <option value="japan">🇯🇵 Japan</option>
                        <option value="china">🇨🇳 China</option>
                        <option value="russia">🇷🇺 Russia</option>
                        <option value="sa">🇸🇦 Saudi Arabia</option>
                    </select>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;