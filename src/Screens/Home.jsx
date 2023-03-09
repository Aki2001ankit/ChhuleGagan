import React from "react";
import "./Home.css";
import "./About.css";


import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainHeroSection from "../components/homepageHeroSection";
import Services from "../components/servicesSection";
import AllCourse from "../components/allcourse";

function Home() {
    return (
        <div>
            <div>
            <MainHeroSection/>
               
                <br />
                <br />
                <Services/>
                <br />
                <AllCourse/>
                
            </div>
            <div className="container mt-5 mb-5 main-4 d-flex justify-content-around">
                <div className="">
                    <span>
                        <i class="bi bi-bookmark-star"></i> &nbsp; 20+ World Best
                        Instructors
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
                <div className="">
                    <span>
                        <i class="bi bi-camera-reels"></i> &nbsp; 5+ courses Live Class and
                        Video Lectures
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
                <div className="">
                    <span>
                        <i class="bi bi-check-circle"></i> &nbsp; 100+ Over Active Students
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
            </div>
           
        </div>
    );
}

export default Home;