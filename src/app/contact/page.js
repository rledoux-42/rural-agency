import style from './page.css'
import Image from 'next/image'
import Header from '../component/Header'
import Footer from '../component/Footer'


export default function Home () {
  return (
    <>
      <Header />
      <main className='main-contact'>
        <h2>Vous avez un projet de création de site internet ?<br /><span>Contactez nous !</span></h2>
        <form>
          <fieldset className='contact'>
            <legend>Contact</legend>
            <label htmlFor='societe'>Société</label>
            <input type='text' name="societe" id='societe' required />
            <label htmlFor='site'>Avez-vous déjà un site</label>
            <select name="site" id='site' required>
              <option value={"yes"}>Oui</option>
              <option value={"no"}>Non</option>
            </select>
            <label htmlFor='civ'>Civilité</label>
            <select name="civ" id='civ' required>
              <option value={"men"}>Mr.</option>
              <option value={"women"}>Mme.</option>
            </select>
            <label htmlFor='name'>Nom</label>
            <input type='text' name="name" id='name' required />
            <label htmlFor='lastname'>Prénom</label>
            <input type='text' name="lastname" id='lastname'required />
            <label htmlFor='tel'>Téléphone</label>
            <input type='tel' name="tel" id='tel' required />
            <label htmlFor='email'>Email</label>
            <input type='email' name="email" id='email' required />
          </fieldset>

          <fieldset className='demande'>
            <legend>Votre demande</legend>
            <label htmlFor='offre'>Vous êtes intéréssé par l'offre</label>
            <select name="offre" id='offre' required>
              <option value={"ecommerce"}>Site ecommerce</option>
              <option value={"institutionnel"}>Site institutionnel</option>
              <option value={"marque"}>Site de marque</option>
              <option value={"vitrine"}>Site vitrine</option>
              <option value={"catalogue"}>Site catalogue</option>
              <option value={"Refonte"}>Refonte de site</option>
              <option value={"application"}>Application</option>
            </select>
            <label htmlFor='budget'>Votre budget</label>
            <select name="budget" id='budget' required>
              <option value={"5k"}>Moins de 5.000€</option>
              <option value={"5-10k"}>Entre 5.000€ et 10.000€</option>
              <option value={"10-15k"}>Entre 10.000€ et 15.000€</option>
              <option value={"15k"}>Supérieur à 15.000€</option>
            </select>
            <label htmlFor='charge'>Disposez vous d'un cahier des charges</label>
            <select name="charge" id='charge' required>
              <option value={"yes"}>Oui</option>
              <option value={"no"}>Non</option>
            </select>
            <label htmlFor='desc'>Commentaire, description de votre projet</label>
            <textarea name='desc' id='desc' rows={20} required />
          </fieldset>
          <input type='submit' value={"Envoyer"} />
        </form>
      </main>
      <Footer />
    </>
  )
}
