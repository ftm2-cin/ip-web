import React from "react";
import Popup from 'reactjs-popup';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./index.css";

function Card({ name, login, periodo, img, github, linkedin }) {
    return (
        <div className="Card-Content">
            <Popup
                trigger={
                    <div className="Image-Container">
                        <img src={img} alt={name} />
                    </div>
                }
                on={['hover']}
                position="top center"
            >
                <div className="Card-Popup">
                    <h3>{name}</h3>
                    <p>{periodo}° Período</p>
                    <h4>{login} | {login}@cin.ufpe.br</h4>
                    {(linkedin || github) ? (<div className="Card-Popup-Social">
                        {linkedin && <a href={linkedin} target="_blank" rel="noreferrer">
                            <FaLinkedin style={{ marginRight: '10px' }} color="#13e796" />
                        </a>}
                        {github && <a href={github} target="_blank" rel="noreferrer">
                            <FaGithub color="#13e796" />
                        </a>}
                    </div>) : null}
                </div>
            </Popup>
        </div >
    );
}

export default Card;
