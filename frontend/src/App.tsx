import { Route, Routes } from "react-router-dom";
import NavBar from "./PageStyle/NavBar/NavBar";
import Home from "./Routes/Home";
import Graphs from "./Routes/Graphs";
import Config from "./Routes/Config";
import TimelineIcon from "@mui/icons-material/Timeline";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import Inv from "./Routes/Inv";

const navArrayLinks = [
  { title: "HOME", path: "/", icon: <HomeIcon /> },
  { title: "GRAPHS", path: "/Graphs", icon: <TimelineIcon /> },
  { title: "INVENTORY", path: "/Inv", icon: <InventoryIcon /> },
  { title: "CONFIGURATION", path: "/Config", icon: <SettingsIcon /> },
];

export default function App() {
  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} />
      {/*<Container sx={{ mt: 5 }}> too keep it contained in the middle*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Graphs" element={<Graphs />} />
        <Route path="/Config" element={<Config />} />
        <Route path="/Inv" element={<Inv />} />
      </Routes>
      {/*</Container>*/}
    </>
  );
}
