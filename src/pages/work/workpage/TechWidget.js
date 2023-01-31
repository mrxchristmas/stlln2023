

export default function TechWidget({ title, subtitle, link }) {
    return (
        <div className="widget ">
            
            <div className="t flex-col-end-center">
                <span >{title}</span>
                <p>{subtitle}</p>
            </div>
            <div className="img flex-row-center-start">
                <img src={link} alt="" />
            </div>
        </div>
    )
}
