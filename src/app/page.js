import Image from 'next/image'
import "./page.css";
import Header from "./component/Header"
import Footer from "./component/Footer"

// a card for second section
function CardExp({Title, Text, Img, Alt}) {
  return(
    <div className='card-exp'>
      <Image src={Img} width={100} height={100} alt={Alt} />
      <h4>{Title}</h4>
      <p>{Text}</p>
    </div>
  );
}

// component for Visibilité section (represent a client with his logo and name)
function CardClient({Title, Img, Alt, Link}) {
  return(
    <a className={'card ' + Title} href={Link} target='_blank'>
      <Image src={Img} width={50} height={50} alt={Alt} />
      <h3>{Title}</h3>
    </a>
  );
}

// component for FAQ section (represent a question with it's response)
function QuestionFAQ({Question, Reponse, Link, TextLink}) {
  return (
    <article className='question'>
      <h4>{Question}</h4>
      <p>{Reponse}</p>
      <a href={Link} target='_blank'>{TextLink}</a>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-home">
        <section className="slider">
          <h2><span>Agence de communication Digitale<br />Développons votre business digital</span></h2>
          <div className="article-aside">
            <article>
              <h3><span>DEMARQUEZ VOUS !</span><br />Privilégiez le design sur mesure pour vos sites e-commerce</h3>
              <h3><span>SOLUTIONS CMS, SOYEZ LIBRE !</span><br />Open Source of course !</h3>
            </article>
            <aside>
              <div className="top">
                <Image src="/slider/logo_e-commerce.png" width={150} height={150} alt="e-commerce cart"/>
                <Image src="/slider/logo_presta.png" width={150} height={150} alt="prestashop logo"/>
              </div>
              <div className="bot">
                <Image src="/slider/logo_responsive.png" width={150} height={150} alt="responsive image"/>
                <Image src="/slider/logo_wp.png" width={150} height={150} alt="wordpress logo"/>
              </div>
            </aside>
          </div>
        </section>
        <section className='presentation'>
            <div className="title">
              <Image src="/presentation/logo_icon_lamp.png" width={100}  height={100} alt='logo ampoule'/>
              <h2><span>Vos Projets Web</span><br />Sur Mesure et <strong>100% Français !</strong></h2>
            </div>
            <article>
              <h3>Notre expérience au service de vos projets web</h3>
              <div className='experience'>
                <CardExp 
                Title={"Hébergement"} 
                Text={"Notre savoir-faire en hébergement nous de conseiller nos clients et concevoir des projets à fort trafic."}
                Img={"/presentation/card-exp_hebergement2.png"}
                Alt={"logo serveur hébergement"}
                />
                <CardExp 
                Title={"Développement web"} 
                Text={"Méthodes, rigueur et réactivité pour réaliser et suivre votre projet de site internet."}
                Img={"/presentation/card-exp_dev.png"}
                Alt={"logo developpement dev"}
                />
                <CardExp 
                Title={"Création Graphique"} 
                Text={"Création on line ou off line, nous réalisons les projets graphiques qui reflètent votre image."}
                Img={"/presentation/card-exp_graphique.png"}
                Alt={"logo graphiste"}
                />
                <CardExp 
                Title={"Web Marketing"} 
                Text={"Rentabilisez votre site web grâce au référencement naturel, à l'emailing ou d'autres actions de création de trafic."}
                Img={"/presentation/card-exp_marketing.png"}
                Alt={"logo web marketing"}
                />
              </div>
            </article>
        </section>
        <section className='visibilite'>
          <h2>Ils nous font confiance</h2>
          <article className='grid'>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
              <CardClient Title={"Google"} Img={"/visibilite/google.png"} alt={"logo client google"} Link={"https://www.google.fr/"}/>
          </article>
        </section>
        <section className='faq'>
          <h2>FAQ</h2>
          <QuestionFAQ Question={"Qui sommes-nous ?"} Reponse={"Nous sommes une agence de développement web composés des anciens élèves et apprenti de la Rural Web Factory."}/>
          <QuestionFAQ Question={"Qu'est-ce que vous proposez ?"} Reponse={"Nous vous proposons une multitude de service afin de faire croitre votre entreprise en aidant dans votre transition numérique."} Link={"#"} TextLink={"Retrouvez nos offres ici"}/>
          <QuestionFAQ Question={"Comment faire si je veux vous rejoindre ?"} Reponse={"Il suffit de remplir le formulaire ci-joint et nous contacterons ulterieurement"} Link={"#"} TextLink={"Rejoignez nous en cliquant ici"}/>
        </section>
      </main>
      <Footer />
    </>
  );
}
