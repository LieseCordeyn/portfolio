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
        <div>
            <a href="https://github.com/LieseCordeyn">Visit my Github</a>
            <a href="https://www.linkedin.com/in/liese-cordeyn-58b3981b7/">Visit my LinkedIn</a>
            <p onClick={onButtonClick}>Download my CV</p>
            <a href = "mailto: liese.cordeyn@gmail.com">Send me a mail</a>
        </div>
    )
}

export default Socials