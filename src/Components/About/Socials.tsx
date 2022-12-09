import { link } from 'fs'
import download from '../../assets/download.svg'
import email from '../../assets/email.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'


function Socials(){

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('cv_Liese_Cordeyn.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'cv_Liese_Cordeyn.pdf';
                alink.click();
            })
        })
    }

    return(
        <div id="socials">
            <section>
                <img src={github} alt="github icon" />
                <a href="https://github.com/LieseCordeyn">Visit my Github</a>
            </section>
            <section>
                <img src={linkedin} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/liese-cordeyn-58b3981b7/">Visit my LinkedIn</a>
            </section>
            <section>
                <img src={download} alt="Download icon" />
                <p onClick={onButtonClick}>Download my CV</p>
            </section>
            <section>
                <img src={email} alt="email icon" />
                <a href = "mailto: liese.cordeyn@gmail.com">Send me a mail</a>
            </section>
        </div>
    )
}

export default Socials