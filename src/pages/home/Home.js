import './Home.css'
// import stlln1 from '../../icons/stlln-01.svg'
// import stlln2 from '../../icons/stlln-02.svg'
// import { useSlime } from '../../hooks/useSlime'
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useRootContext } from '../../hooks/useRootContext';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Home({ slime }) {
    const { isMobile } = useIsMobile()

    return (
        <div className='home-wrapper flex-col-center-start'>
            <div className={`home-container ${isMobile ? "flex-col-center-start" : "flex-row-center-between"}`}>
                <div className="article flex-col-start-start">
                    <span><b className='gradient-text'>Noel Santillan</b> is a Web Developer based in Toronto. This is a portfolio showcasing his past projects.</span>
                    <br />
                    <Link to="/work" className='button'>View Work</Link>
                </div>
                {slime}
            </div>
        </div>
    )
}
