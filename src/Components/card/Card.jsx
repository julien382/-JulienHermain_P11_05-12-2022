import './Card.css'
import data from '../../data/data.json'
import {Link} from "react-router-dom"

const Card = () => {
    return (
        <div className='cards'>
            {data.map((logement, i) => (
                <Link key={i} className='card' to={`FicheLogement/${logement.id}`}>
                    <article>
                        <div className="cardImage">
                            <img src={logement.cover} alt="logement" />
                            <span className="filtre"></span>
                        </div>
                        <h2  className='cardTitle'>{logement.title}</h2>
                    </article>
                </Link>
            ))}
            
        </div>
    )
}

export default Card