import React from "react";
import { stackList } from "../../data/ProjectData";
import { 
    Image,
    Technologies,
    Tech,
    TechImg,
    TechName,
    ContactWrapper,
} from "./AboutElements";

function About() {
    return (
        <ContactWrapper id="about">
            <div className="Container">
                <div className="SectionTitle">About Me</div>
                <div className="BigCard">
                    <div className="AboutBio">
                        Hello! My name is <strong>Douglas Peterson</strong> and I am a full stack developer. 
                        From Bootcamp, to self taught and on the job experience, I've learned adaptable skills that can be applied to any project.
                    </div>
                    <div className="AboutBio tagline2">
                        I am most familiar with MERN stack but am constantly exploring new languages such as Go and Ruby.
                    </div>
                    <Technologies>
                        {stackList.map((stack, index) => (
                            <Tech key={index} className="tech">
                                <TechImg src={stack.img} alt={stack.name} />
                                <TechName>{stack.name}</TechName>
                            </Tech>
                        ))}
                    </Technologies>
                </div>
            </div>
        </ContactWrapper>
    );
}

export default About;