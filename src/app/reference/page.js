import style from './page.css'
import Image from 'next/image'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Mockup ({ services, Date, Client, Img, Link }) {
  return (
    <div className='mockup' style={{ backgroundImage: `url(${Img})` }}>
      <h3>{Client}</h3>
      <div className='infos'>
        <div className="services">
            <h4>Services</h4>
            {services.map(service => {
              return <p key={service}>{service}</p>
            })}
        </div>
        <div className="date">
            <h4>Datee de mise en ligne</h4>
            <p>{Date}</p>
        </div>
        <div className="client">
            <h4>Client</h4>
            <p>{Client}</p>
        </div>
        <a href={Link} alt='link client'>
          Voir le site
        </a>
      </div>
    </div>
  )
}

export default function Home () {
  return (
    <>
      <Header />
      <main className='main-reference'>
        <h2>Nos Référence</h2>
        <Mockup
          services={[
            'Conseil',
            'Dévelopement',
            'Création Graphique',
            'Gestion du Contenu',
            'Hébergement'
          ]}
          Date={'9/11/15'}
          Client={'DAMMANN Frères'}
          Link={'https://www.dammann.fr/fr/'}
          Img={'/mockup/mockup_dammann.jpg'}
        />
      </main>
      <Footer />
    </>
  )
}
