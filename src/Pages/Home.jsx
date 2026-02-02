import { BrowserRouter, Route,Link, Routes, useNavigate } from "react-router-dom"
import { Country } from "./Country"
import { Contact } from "./Contact"
import { About } from "./About"
import { FaLongArrowAltRight } from "react-icons/fa"
import worldImg from "../assets/world.png";
export const Home = () =>{
    const navigate = useNavigate();
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the world, One Country at a Time. 
                    </h1>
                    <p className="paragraph">
                            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bh-white-box" onClick={()=>navigate("/country")}>
                        Start Exploring <FaLongArrowAltRight/>
                    </button>
                </div>
                <div className="hero-image">
                    {/* <img src="./src/assets/world.png" className="banner-image" alt="World"/> */}
                    <img src={worldImg} className="banner-image" alt="World" />
                </div>
            </div>
        </main>
    )
}