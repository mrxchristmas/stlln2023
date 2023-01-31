
import { Link } from 'react-router-dom'


export default function WorkWidget({ to, img, title, subtitle }) {





    return (
        <Link to={`/work/${to}`} className="work-widget flex-row-center-center">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 1005 500" style={{enableBackground: '0 0 1005 500'}} xmlSpace="preserve" x="0" y="0">
                <defs>
                    <linearGradient gradientTransform="rotate(90)" id="gradient" >
                        <stop  offset="0" stopColor="var(--startColor)" />
                        <stop  offset="0.1885" stopColor="var(--startColor)" />
                        <stop  offset="1" stopColor="var(--stopColor)" />
                    </linearGradient>
                </defs>
                <g>
                    <path fill='url(#gradient)' d="M942.1,2l60.9,60.9V498H62.9L2,437.1V2H942.1 M943,0H0v438l62,62h943V62L943,0L943,0z"/>
                </g>
            </svg>
            <div className="img">
                <img  src={img} alt="" />
            </div>
            <span className='title flex-row-center-start'>{title} <p>{subtitle}</p> </span>
        </Link>
    )
}
