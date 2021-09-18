import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import Card from "./components/Card";
import data from "../../../../data/monitores";
import "./index.css";

function Gallery(props) {
    const { teacher, tutors } = data;
    return (
        <div className="Home-Gallery">
            <h2>Professor e Monitores <IoSchoolSharp style={{ marginLeft: "8px" }} color="#13e796" /></h2>
            <div className="Gallery-Content">
                <div className="Gallery-Teacher">
                    <div>
                        <img src={teacher.img} alt={teacher.name} />
                    </div>
                    <h3>{teacher.name}</h3>
                    <h4>{teacher.login}@cin.ufpe.br</h4>
                </div>
                <div className="Gallery-Tutors">
                    {tutors.map(({ name, periodo, login, github, img, linkedin }) => (
                        <Card name={name} periodo={periodo} login={login} github={github} img={img} linkedin={linkedin} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
