import React from 'react'
import home from "../img/undraw_educator_re_ju47.svg";
const MainHeroSection =()=>{
    return(<>
        <div class="container px-5 mt-5 main">
                    <div class="row gx-5 align-items-center content-img">
                        <div
                            class="col-lg-6 aos-init aos-animate content"
                            data-aos="fade-up"
                        >
                            <h1 className="h1">Grab this Great Opportunity</h1>
                            <h2 className="h2">Learn to speak English with Experts.</h2>
                            <h4 className="h4">
                                Completely reliable Platform Made By IITians
                            </h4>
                        </div>
                        <div
                            class="col-lg-6 aos-init aos-animate"
                            data-aos="fade-up"
                        >
                            <img class="img-fluid" src={home} alt="..." />
                        </div>
                    </div>
                </div>
        
    </>)
}
export default MainHeroSection;