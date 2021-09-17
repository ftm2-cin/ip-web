import { BiArchive, BiHome } from 'react-icons/bi'
import HomePage from "../pages/Home";
import ArquivosPage from "../pages/Arquivos";

const allRoutes = [
    { name: "Home", path: "/home", Comp: HomePage, Icon: BiHome, includeRoute: true },
    {
        name: "Arquivos",
        path: "/arquivos",
        Comp: ArquivosPage,
        Icon: BiArchive,
        includeRoute: true,
    },
];

export default allRoutes;