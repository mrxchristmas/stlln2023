import './About.css'
import me from '../../assets/images/Noel.gif'


export default function About() {
    return (
        <div className='about-wrapper'>
            <div className="about-container">
                <img src={me} className="about-img" />
                <h1 className="namebar">Hey there, I'm Noel</h1>
                <hr className="divider"/>
                <span className="titlebar">a developer who loves <br /> {`<Codes />`} <br /> and games! </span>
                <br />
                <span className="desctit">Individuality</span>
                <span className="descriptionbar">Explain functionality and other technical issues to other professionals and non-technical users. Pays close attention to details and have the ability to stay focused on the task at hand for long periods to get the job done. I always stay updated on all the latest changes and updates that take place in the industry and always looking for ways to incorporate these into my work.</span>
                
                <span className="desctit">Developeriety</span>
                <span className="descriptionbar">The best part of the day. Creating complex systems, designs and algorithms. Turning imagination into reality. Everything about coding makes me happy. #Codeducing </span>

                <span className="desctit">Designeriety</span>
                <span className="descriptionbar">Develop website architecture and determine hardware and software requirements; Plan, design, write, modify, integrate and test Web-site related code; Conduct tests and perform security and quality controls through years of testing, failing and trying again.</span>

                <span className="desctit">Gamingology</span>
                <span className="descriptionbar">Helped me develop my passion for coding, greatly improved my eye-hand coordination, gave me a boost in my problem solving skills, and enhanced memory. In addition, gaming improved my attention and concentration which also helps me in other daily tasks. Most importanly, gaming taught me how to be patient, the patience to do repetitive tasks with precision.</span>

                {/* <span className="descriptionbar">This Portfolio Website is built using React</span> */}
                <br />
            </div>
        </div>
    )
}
