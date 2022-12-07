import '../styles/index.css';
import '../styles/reset.css';
import {Routes, Route} from "react-router-dom"

import Header from './Header/Header';

import Home from '../pages/Home/index';
import FicheLogement from '../pages/FicheLogement';
import APropos from '../pages/APropos/index';
import Error from '../pages/Error';

import Footer from './Footer/Footer';

function App() {
    return (
        <div>
            <div id='app'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/FicheLogement" element={<FicheLogement />} />
                    <Route path="/Error" element={<Error />} />
                    <Route path="/APropos" element={<APropos />} />
                </Routes>

            </div>
            <div>
                <Footer />

            </div>
        </div>
        
    )

}

export default App