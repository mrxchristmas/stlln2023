import './Work.css'

import WorkWidget from './WorkWidget'

import img1 from '../../assets/images/oinkcup/Chome.png'
import img2 from '../../assets/images/p2.png'
import img3 from '../../assets/images/p3.png'
import img4 from '../../assets/images/p4.png'
import img5 from '../../assets/images/lezztFace.png'
import img6 from '../../assets/images/lezztFinanceFace.png'
import img7 from '../../assets/images/portfolioFace.png'
import img8 from '../../assets/images/pastPortfolioFace.png'
import img9 from '../../assets/images/ceisFace.png'
import img10 from '../../assets/images/esscorpFace.png'
import img11 from '../../assets/images/pprecipeFace.png'

export default function Work() {

    // console.log('test')

    return (
        <div className='work-wrapper flex-col-center-start'>
            <h1>Ongoing Projects</h1>

            <WorkWidget to="pprecipe" img={img11} subtitle="Daily Menu Planner" title="PP Recipe" />
            <WorkWidget to="lezzt" img={img5} subtitle="Firebase Firestore" title="Lezzt" />
            <WorkWidget to="lezztfinance" img={img6} subtitle="Firebase Firestore" title="Lezzt Finance" />

            <h1>Past Projects</h1>
            <WorkWidget to="portfolio" img={img7} subtitle="React App" title="Portfolio" />
            <WorkWidget to="ceis" img={img9} subtitle="Capital Expenditure Information System" title="CEIS" />
            <WorkWidget to="esscorp" img={img10} subtitle="Single Page Website from scratch" title="Ess Corp Website" />
            <WorkWidget to="pastportfolio" img={img8} subtitle="React App" title="Past Portfolio" />
            <WorkWidget to="oinkcup" img={img1} subtitle="PHP MySQL" title="Oinkcup" />
            <WorkWidget to="weatherapp" img={img2} subtitle="Firebase AccuWeather API" title="WeatherApp" />
            <WorkWidget to="chatapp" img={img3} subtitle="Firebase" title="Chat App" />
            <WorkWidget to="financeapp" img={img4} subtitle="Firebase" title="Finance App" />

        </div>
    )
}
