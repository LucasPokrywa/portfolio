
import './home.css'
import photo from "../assets/images/animation.png";

export default function Home() {

    return (
        <>
            <div className="parent">
                
                <section className="carte information" id="carte_perso">
                    <h1 className='titre'>Lucas Pokrywa</h1>
                    <h1  className='titre' id="titre_poste"> Developpeur Logiciel </h1>

                    <br />

                    <div id="about">
                        <p>Developpeur en apprentissage au sein de la DGFiP</p>
                    </div>
                    
                    <div><p>contact icone</p></div>
                </section>

                <section className="carte about">
                    <img src={photo} alt="photo" width="256" height="256" />
                </section>
            </div>
        </>
    )
}
