import './FicheLogement.css'
import CardDescription from '../../Components/CardDescription/CardDescription'
import Tag from '../../Components/Tag/Tag'
import Rating from '../../Components/Rating/Rating'
import Slider from '../../Components/Slider/Slider'
import PP from '../../Components/PP/PP'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"

const FicheLogement = () => {
    const {id} = useParams()
    // si l'id n'ai pas trouvé, page error
    const logementGoodId = data.find(logement => logement.id === id)
    
    document.title += " - " + logementGoodId.title 
    

    if (data.map(logement => logement.id === id)){
        console.log("good");
        <Link to="/Error">Error404</Link>}
        else{
            console.log("bad");
            <Link to="*">Error404</Link>
        }
    
    return (
        <div className='ficheLogement'>

            <Slider idLogement={logementGoodId.pictures} allPictures={logementGoodId.pictures}/>

            <div className='containerInformation'>    
                <div className='containerLocationTag'>
                    <div className='containerLocation'>
                        <h2 className='locationName'>{logementGoodId.title}</h2>
                        <h3 className='location'>{logementGoodId.location}</h3>
                    </div>
                    <Tag idLogement={logementGoodId}/>
                </div>
                <div className='containerProfileRaiting'>
                    <div className='profile'>
                        <h3 className='profileName' alt="pictures">{logementGoodId.host.name.replace(' ', '\n')}</h3>
                        <PP idLogement={logementGoodId}/>
                    </div>
                    <Rating nbrStars={logementGoodId.rating}/>
                </div>
            </div>
            <div className='cardsDescription'>
                <CardDescription type="Paragraphe" title="Description" text={logementGoodId.description}/>
                <CardDescription type="Liste"title="Equipements" text={logementGoodId.equipments}/>
            </div>
                
        </div>
    )
}

export default FicheLogement