import { BiLink } from "react-icons/bi";
import content from '../../../../data/links';
import "./index.css";

function UsefulLinks(props) {
    return (
        <div className="Home-UsefulLinks">
            <h2>
                Links Úteis
                <BiLink style={{ marginLeft: "8px" }} color="#13e796" />
            </h2>
            <div className="UsefulLinks-Content">
                {
                    content.map(({ name, img, link }) => (
                        <a key={name} data-name={name} href={link} target="_blank" rel="noreferrer">
                            <img src={img} alt={name} />
                        </a>)
                    )
                }
            </div>
        </div>
    )
}

export default UsefulLinks;