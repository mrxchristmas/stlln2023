import { useRef, useState } from "react";


export default function PhoneUI({ sizeInPercent, img, options }) {

    const [screenOff, setScreenOff] = useState(true)
    const mainRef = useRef()
    const handlePowerClick =()=>{
        console.log('awesome');
        setScreenOff(!screenOff)
    }

  


    return (
        img ? <div 
        style={{ width: sizeInPercent ? `calc(${sizeInPercent}% - 20px)` : 'calc(50% - 20px)' }} 
        {...options}
        className={`phoneUI-con flex-col-center-center ${options && options.className ? options.className : null}`}
        >
            <svg 
                version="1.1" id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px"
                viewBox="0 0 373 814" 
                style={{enableBackground: '0 0 373 814'}} 
                xmlSpace="preserve"
                className="phoneui-svg"
                width="100%"
                height="100%"
            >
                <defs>
                    <linearGradient gradientTransform="rotate(90)" id="gradient" >
                        <stop  offset="0" stopColor="var(--startColor)" />
                        <stop  offset="0.1885" stopColor="var(--startColor)" />
                        <stop  offset="1" stopColor="var(--stopColor)" />
                    </linearGradient>
                </defs>
                
                frame
                <path className="st0" d="M349.11,2H24.84C14.55,2,6.22,10.54,6.22,21.08v12.69v769.29l0,0c0,3.84,3.17,6.95,7.07,6.95h347.38 c3.9,0,7.07-3.11,7.07-6.95l0,0V33.76V21.08C367.73,10.54,359.39,2,349.11,2z M335.95,753.03H38c-13.81,0-25-11.19-25-25V58.76 c0-13.81,11.19-25,25-25h297.95c13.81,0,25,11.19,25,25v669.26C360.95,741.83,349.76,753.03,335.95,753.03z"/>
                speaker
                <path className="st1" d="M273.04,21.68H126.21c-1.66,0-3-1.34-3-3v-0.22c0-1.66,1.34-3,3-3h146.83c1.66,0,3,1.34,3,3v0.22 C276.04,20.34,274.69,21.68,273.04,21.68z"/>
                front cam
                <ellipse className="st1 indicator" cx="104.24" cy="18.57" rx="6.32" ry="6.22"/>
                button
                <ellipse onClick={handlePowerClick} className="st2" cx="187.5" cy="780.99" rx="20.03" ry="19.68"/>
                power
                <path onClick={handlePowerClick} className="st0 power" d="M367.4,161.53h-0.19v-57.49h0.19c1.99,0,3.6,1.61,3.6,3.6v50.29C371,159.92,369.39,161.53,367.4,161.53z"/>
                volup
                <path className="st0" d="M6.22,139.8H6c-2.21,0-4-1.79-4-4v-34.5c0-2.21,1.79-4,4-4h0.22V139.8z"/>
                voldown
                <path className="st0" d="M6.22,192.61H6c-2.21,0-4-1.79-4-4v-34.5c0-2.21,1.79-4,4-4h0.22V192.61z"/>
            </svg>
            <div className={`screen ${screenOff ? "hidden" : "visible" }`}></div>
            <div className="img">
                <img  src={img} alt="" />
            </div>
        </div>
        : null
    )
}
