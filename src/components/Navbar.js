import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { useRootContext } from '../hooks/useRootContext'

export default function Navbar() {
    const user = true
    
    const { isMobile } = useIsMobile()
    const { hue } = useRootContext()

    const [isNavPopOpen, setIsNavPopOpen] = useState(false)
    const navpopref = useRef();

    const handleNavCloseClick = ()=>{
        
    }
    const handleNavWidgetClick =()=>{
        setIsNavPopOpen(false)
    }
    const handleNavPopMainClick =e=>{
        // console.log('test', e.target, navpopref.current, e.target === navpopref.current)
        if(e.target !== navpopref.current){
            return
        }else{
            setIsNavPopOpen(false)
        }
    }

    const logout =()=>{

    }

    useEffect(() => {
        if(isNavPopOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
    }, [isNavPopOpen])
    

    useEffect(() => {
        // console.log(hue)

    }, [hue])

    const startColor = `hsl(${0}, 100%, 75%)`
    const stopColor = `hsl(${0 + 60}, 100%, 75%)`

    return (
        <div className="navbar flex-row-center-center">
            <div className={`container ${isMobile ? "flex-col-start-start" : "flex-row-center-between"}`}>
                <Link to='/' className="left flex-row-center-center">
                    {/* <img className='logo' src="/stlln-02.svg" alt="" /> */}
                    <svg version="1.1" id="Layer_1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        x="0px" 
                        y="0px"
                        viewBox="0 0 967 277" 
                        style={ {enableBackground: "0 0 967 277"} }
                        xmlSpace="preserve"
                        className="esveegee"
                        >
                        <defs>
                            <linearGradient gradientTransform="rotate(90)" id="gradient" >
                                <stop  offset="0" stopColor="var(--startColor)" />
                                <stop  offset="0.1885" stopColor="var(--startColor)" />
                                <stop  offset="1" stopColor="var(--stopColor)" />
                            </linearGradient>
                        </defs>
                        <g>
                            START
                            <path fill="url(#gradient)" className="f1 st7" d="M132.2,154.2h-14.1H98.6H78.8c-5.4,0-10.1-3.1-12.4-7.6v-39.5V77.8V29.4c0-8-6.4-14.4-14.4-14.5l-13.4-0.1
                                c-8,0-14.5,6.5-14.5,14.5V248c0,5.9,4.7,10.6,10.6,10.6h21.2c5.9,0,10.6-4.7,10.6-10.6v-57.7c2.3-4.5,7-7.6,12.4-7.6h19.8h19.5
                                h14.1c7.7,0,13.9-6.2,13.9-13.9V168C146.1,160.4,139.9,154.2,132.2,154.2z"/>
                            S
                            <path fill="url(#gradient)" className="f2 st6" d="M254.2,69h-19.9c-7.7,0-13.9-6.2-13.9-13.9l-0.1-28c0-7-5.7-12.7-12.8-12.7h0l0,0c-7.7,0-13.9,6.2-13.9,13.9
                                v33.6c0,7.7-6.2,13.9-13.9,13.9h-19.8h-19.5h-14.1c-7.7,0-13.9,6.2-13.9,13.9v0.9c0,7.7,6.2,13.9,13.9,13.9h14.1h19.5H180
                                c7.7,0,13.9,6.2,13.9,13.9v126.3c0,7.7,6.2,13.9,13.9,13.9h12.8v-0.6h33.7c7.7,0,13.9-6.2,13.9-13.9v-161
                                C268.1,75.2,261.9,69,254.2,69z"/>
                            T
                            <path fill="url(#gradient)" className="f3 st3" d="M372.1,28.1v30.1c0,6.2-5.1,11.3-11.3,11.3h-21.7c-8.2,0-14.8,6.6-14.8,14.8v161.4c0,7.1,5.8,12.9,12.9,12.9
                                h44.1c9.6,0,17.4-7.8,17.4-17.4V28.1c0-7.4-6-13.3-13.3-13.3h0C378,14.8,372.1,20.7,372.1,28.1z"/>
                            L1
                            <path fill="url(#gradient)" className="f4 st2" d="M456.3,27v164.8c0,6.7,5.5,12.2,12.2,12.2h47.8c6.7,0,12.2,5.5,12.2,12.2v30.3c0,6.7,5.5,12.2,12.2,12.2h1.6
                                c6.7,0,12.2-5.5,12.2-12.2V27c0-6.7-5.5-12.2-12.2-12.2h-73.8C461.8,14.8,456.3,20.2,456.3,27z"/>
                            L2
                            <path fill="url(#gradient)" className="f5 st4" d="M612,27v164.8c0,6.7,5.5,12.2,12.2,12.2H672c6.7,0,12.2,5.5,12.2,12.2v30.3c0,6.7,5.5,12.2,12.2,12.2h0
                                c6.7,0,12.2-5.5,12.2-12.2V27c0-6.7-5.5-12.2-12.2-12.2h-72.2C617.5,14.8,612,20.2,612,27z"/>
                            N1
                            <path fill="url(#gradient)" className="f6 st0" d="M849.9,157.8l-2.2-128.4c-0.1-8.1-6.7-14.6-14.8-14.6H777c-9.5,0-15.4,10.5-10.4,18.6L845,159.2
                                C846.4,161.5,850,160.5,849.9,157.8z"/>
                            N2
                            <path fill="url(#gradient)" className="f6 st5" d="M759.6,125.8l1.3,116.4c0.1,9,7.5,16.3,16.5,16.3H831c9.6,0,15.4-10.5,10.3-18.7l-73.8-116.4
                                C765.3,119.8,759.6,121.5,759.6,125.8z"/>
                            
                            END
                            <path fill="url(#gradient)" className="f7 st8" d="M922.9,258.3h-10.5c-8.3,0-15.1-6.7-15.1-15.1V29.6c0-8.3,6.7-15.1,15.1-15.1h10.5c8.3,0,15.1,6.7,15.1,15.1
                                v213.6C938,251.5,931.3,258.3,922.9,258.3z"/>
                        </g>
                    </svg>
                </Link>
                <div className={isMobile ? "right flex-row-center-even" : "right flex-row-center-start"}>
                    <NavLink  to='/work'>Work</NavLink>
                    <NavLink to='/about'>About Me</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
            </div>


          
        </div>
    )
}


