import yourImage from '../placeholder.png'; // Adjust the path accordingly

const Hero = () => {
    return(
        <>
        <div className="container">
            <div className="row justify-content-center text-center align-items-center">
                <div className="col-md-6 text-light">
                    <div className="hover_animation">
                        <h1 data-text="Software Engineer" className="h1_element"></h1>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <img src={yourImage} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;