import Banner from '../../Components/Banner/Banner.jsx'
import Card from '../../Components/Card/Card.jsx'
import montagne from "../../assets/montagne.png"
import CardDescription from '../../Components/CardDescription/CardDescription.jsx'

const Home = () => {
    return (
        <div>
            <CardDescription title="Description" text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."/>

            <Banner img={montagne} title="Chez vous, partout et ailleurs"/>
            <Card />
        </div>
    )
}

export default Home