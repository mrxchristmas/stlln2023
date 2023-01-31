import { useRef } from "react";


export default function CompUI({ sizeInPercent, img, options }) {



    return (
        img ? <div 
            style={{ width: sizeInPercent ? `calc(${sizeInPercent}% - 20px)` : 'calc(70% - 20px)' }} 
            className="compUI-con flex-col-center-center"
            {...options}
            className={`compUI-con flex-col-center-center ${options && options.className ? options.className : null}`}
            >
            <svg 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px"
                viewBox="0 0 2080 1080" 
                style={{enableBackground:'0 0 2080 1080'}} 
                xmlSpace="preserve"
                width="100%"
                height="100%"
                className="compui-svg"
            >
                <path className="st0" d="M2080,50H0V19.49C0,9.73,7.91,1.81,17.67,1.81h2044.66c9.76,0,17.67,7.91,17.67,17.67V50z"/>
                <rect y="48" className="st0" width="7" height="1032"/>
                <rect x="2075" y="48" className="st0" width="5" height="1032"/>
                <rect x="1037.5" y="42.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 2117.5 35.5)" className="st0" width="7" height="2068"/>
                <circle className="st1" cx="41.51" cy="26.18" r="11.2"/>
                <circle className="st2" cx="103.11" cy="26.61" r="11.2"/>
                <circle className="st3" cx="72.1" cy="26.61" r="11.2"/>
            </svg>
            
            <div className="img">
                <img src={img} alt="" />
            </div>

        </div> : null
    )
}
