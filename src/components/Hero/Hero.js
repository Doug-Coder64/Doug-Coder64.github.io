import React, {useState} from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { 
    HeroContainer,
    HeroWrapper,
    HeroLeft,
    HeroRight,
    Image,
    ScrollDown,
    ScrollLink
} from "./HeroElements";

function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <HeroContainer>
                <HeroWrapper>
                    <HeroLeft>
                        <h1>Hi, I'm Doug</h1>
                        <h5>Full Stack Developer</h5>
                        <p>
                            I enjoy designing and creating applications
                        </p>
                    </HeroLeft>
                    <HeroRight>

                    </HeroRight>
                </HeroWrapper>
                <ScrollDown to="projects">
                    <ScrollLink>
                        Scroll Down
                        <img
                            src="https://raw.githubusercontent.com/doug-coder64/Portfolio/main/src/Assets/scroll-down.svg"
                            alt="Scroll Down"
                        />
                    </ScrollLink>
                </ScrollDown>
            </HeroContainer>
        </main>
    );
}

export default Hero;