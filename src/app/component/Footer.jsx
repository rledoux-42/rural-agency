import styles from "./Footer.css"
import Image from 'next/image'

export default function Footer() {
    return (
        <footer>
            <div className="links">
                <div className="categorie contact">
                    <h3>Rural Web Agency</h3>
                    <p>Agence de communication digital.</p>
                    <a href="#">contact@rural-agency.fr</a>
                    <a href="#">Contact webdesign<br/>06 81 78 50 86</a>
                    <a href="#">Contact Programation design<br/>06 00 00 00 00</a>
                </div>
                <div className="categorie creation">
                    <h3>La Créatio de Site Internet</h3>
                    <a href="#">Gestion de projet</a>
                    <a href="#">Webdesign</a>
                    <a href="#">Identité visuelle</a>
                    <a href="#">Développement</a>
                    <a href="#">Intégration</a>
                    <a href="#">Hébergement</a>
                    <a href="#">Webmarketing</a>
                    <a href="#">Référence naturel</a>
                    <a href="#">E-mailing</a>
                    <a href="#">Infogérence</a>
                </div>
                <div className="categorie domaine">
                    <h3>Domaine d'Activité</h3>
                    <a href="#">Création de site ecommerce</a>
                    <a href="#">Création de site institutionnel</a>
                    <a href="#">Création de site de marque</a>
                    <a href="#">Création de site vitrine</a>
                    <a href="#">Création de site catalogue</a>
                    <a href="#">Refonte de site</a>
                    <a href="#">Responsive design</a>
                    <a href="#">Création de site avec CMS</a>
                    <a href="#">Paiement en ligne</a>
                    <a href="#">Interfacage</a>
                </div>
            </div>
            <div className="social-media">
                <a href="#" target="_blank">
                    <Image src={"/logo_x.png"} width={50} height={50} alt="logo x twitter "/>
                </a>
                <a href="#" target="_blank">
                    <Image src={"/logo_facebook.png"} width={50} height={50} alt="logo facebook"/>
                </a>
            </div>
            <div className="mentions">
                <p><small>2024 Rural Web Agency</small></p>
                <a href="#"><small>Devis en ligne</small></a>
                <a href="#"><small>Contact</small></a>
                <a href="#"><small>Mentions légales</small></a>
                <a href="#"><small>Conditions générales d'utilisation</small></a>
                <a href="#"><small>Politiquue de confidentialité</small></a>
            </div>
        </footer>
    );
}