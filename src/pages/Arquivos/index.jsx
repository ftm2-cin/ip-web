import { useState } from "react";
import archives from "../../data/materiais.json";
import { RiArrowDownSLine, RiArrowUpSLine, RiEdit2Line } from "react-icons/ri";
import "./index.css";

function Elements({ archives }) {
  return (
    <ol className="ArchiveOL-Content">
      {archives.map(({ name, link }) => (
        <li key={name + link}>
          <a href={link} target="_blank" rel="noreferrer">
            {name}
          </a>
        </li>
      ))}
    </ol>
  );
}

function ArquivosPage(props) {
  const { MiniProvas, Provas, Finais } = archives;
  const [displayMP, setDisplayMP] = useState("");
  const [displayP, setDisplayP] = useState("");

  const displaySemester = (s, type) => {
    if (type === "MP") setDisplayMP(s === displayMP ? "" : s);
    else setDisplayP(s === displayP ? "" : s);
  };

  return (
    <div>
      <div className="Archive-List MiniProvas">
        <h2 className="Archive-Title">
          Mini Provas{" "}
          <RiEdit2Line color="#13e796" style={{ marginLeft: "6px" }} />
        </h2>
        <ol className="ArchiveOL">
          {MiniProvas.map(({ semester, archives }) => (
            <li key={semester} className="ArchiveOL-Item">
              <div
                onClick={displaySemester.bind(null, semester, "MP")}
                className={`semester ${
                  displayMP === semester ? "selected" : ""
                } unselectable`}
              >
                {semester}
                {displayMP === semester ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </div>
              {displayMP === semester && (
                <div>
                  <Elements archives={archives} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
      <div className="Archive-List Provas">
        <h2 className="Archive-Title">
          Provas <RiEdit2Line color="#13e796" style={{ marginLeft: "6px" }} />
        </h2>
        <ol className="ArchiveOL">
          {Provas.map(({ semester, archives }) => (
            <li key={semester} className="ArchiveOL-Item">
              <div
                onClick={displaySemester.bind(null, semester, "P")}
                className={`semester ${
                  displayP === semester ? "selected" : ""
                } unselectable`}
              >
                {semester}
                {displayP === semester ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </div>
              {displayP === semester && (
                <div>
                  <Elements archives={archives} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
      <div className="Archive-List MiniProvas">
        <h2 className="Archive-Title">
          Finais{" "}
          <RiEdit2Line color="#13e796" style={{ marginLeft: "6px" }} />
        </h2>
        <ol className="ArchiveOL">
          {Finais.map(({ semester, archives }) => (
            <li key={semester} className="ArchiveOL-Item">
              <div
                onClick={displaySemester.bind(null, semester, "MP")}
                className={`semester ${
                  displayMP === semester ? "selected" : ""
                } unselectable`}
              >
                {semester}
                {displayMP === semester ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </div>
              {displayMP === semester && (
                <div>
                  <Elements archives={archives} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ArquivosPage;
