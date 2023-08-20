import React,{useState} from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Componets/Sidebar';
import Tennis from './Pages/Tennis';
import Basketball from './Pages/Basketball';
import AmericanFootball from './Pages/AmericanFootball'
import Cricket from './Pages/Cricket';
import Football from './Pages/Football';
import TableTennis from './Pages/TableTennis';
import Barcelona from "./Images/barcelona_logo.png";
import Real_Madrid from "./Images/download.png";
import Manchester from "./Images/Manchester_City.png";
import Manchester_un from "./Images/Manchester_United.png";
import Liverpool from "./Images/liverpool.png";
import Arsenal from "./Images/arsenal.png";
import Bayern_Munich from "./Images/BaryanMunich.png";
import Chelsea  from "./Images/chelse.png";
import Juventus  from "./Images/Juventus.png";
import PSG from "./Images/psg.png";
import New_York_Giants from "./Images/New_York_giants.jpg";
import Buffalo_Bills from "./Images/AmericanFootball/Bafflo_Bills.jpg";
import Chicago_Bears from "./Images/AmericanFootball/Chicago_Bears.jpg";
import Cleveland_Browns from "./Images/AmericanFootball/Cleveland_Browns.jpg";
import Green_Bay_Packers from "./Images/AmericanFootball/Green_Bay_Packers.jpg";
import New_York_Jets from "./Images/AmericanFootball/New_York_Jets.jpg";
import Detroit_Lions from "./Images/AmericanFootball/Detroit_lions.jpg";
import Devnver_Broncos from "./Images/AmericanFootball/Denver_Broncos.jpg";
import Dallus_Cowboys from "./Images/Dallus_Cowboy.jpg";
import Miami_Dolphins from "./Images/AmericanFootball/Miami_Dolphins.jpg";








function App() {
  const [Sports_List,setSports_List]=useState([
        {
            id:1,
            Team_A:"Barcelona",
            Team_B:"Real Madrid",
            Category:"Football",
            location:"London",
            Time:"5:00 PM",
            icon_A:Barcelona,
            icon_B:Real_Madrid ,
            heart_clicked:false,
        },
      {
        id:2,
        Team_A:"Manchester City",
        Team_B:"LiverPool",
        Category:"Football",
        location:"Mumbai",
        Time:"2:00 PM",
        icon_A:Manchester,
        icon_B:Liverpool ,
        heart_clicked:false,
    },
    {
      id:3,
      Team_A:"Arsenal",
      Team_B:"Manchester United",
      Category:"Football",
      location:"Rome",
      Time:"4:30 PM",
      icon_A:Arsenal,
      icon_B:Manchester_un ,
      heart_clicked:false,
  },
  {
    id:4,
    Team_A:"Bayern Munich",
    Team_B:"Chelsea",
    Category:"Football",
    location:"Lisbon",
    Time:"9:00 PM",
    icon_A:Bayern_Munich,
    icon_B:Chelsea ,
    heart_clicked:false,
},{
  id:5,
  Team_A:"Juventus",
  Team_B:"PSG",
  Category:"Football",
  location:"Athens",
  Time:"10:30 PM",
  icon_A:Juventus,
  icon_B:PSG ,
  heart_clicked:false,
},
{
  id:6,
  Team_A:"New_York Giants",
  Team_B:"Dallus Cowboys",
  Category:"AmericanFootball",
  location:"Athens",
  Time:"10:30 PM",
  icon_A:New_York_Giants,
  icon_B:Dallus_Cowboys ,
  heart_clicked:false,
},{
  id:7,
  Team_A:"Buffalo Bills",
  Team_B:"Chicago Bears",
  Category:"AmericanFootball",
  location:"Las Vegas",
  Time:"10:30 PM",
  icon_A:Buffalo_Bills,
  icon_B:Chicago_Bears ,
  heart_clicked:false,
},{
  id:8,
  Team_A:"Cleveland Browns",
  Team_B:"Denver Broncos",
  Category:"AmericanFootball",
  location:"Athens",
  Time:"10:30 PM",
  icon_A:Cleveland_Browns,
  icon_B:Devnver_Broncos ,
  heart_clicked:false,
},{
  id:9,
  Team_A:"Green Bay Packers",
  Team_B:"New_York_Jets",
  Category:"AmericanFootball",
  location:"Athens",
  Time:"10:30 PM",
  icon_A:Green_Bay_Packers,
  icon_B:New_York_Jets ,
  heart_clicked:false,
},
{
  id:10,
  Team_A:"Detroit_Lions",
  Team_B:"Miami_Dolphins",
  Category:"AmericanFootball",
  location:"Athens",
  Time:"10:30 PM",
  icon_A:Detroit_Lions,
  icon_B:Miami_Dolphins ,
  heart_clicked:false,
},
    ])
    const onheartclick=(id)=>{
      setSports_List(Sports_List.map((item)=>item.id=== id ? {...item,heart_clicked:!item.heart_clicked}:item));
    }
  
  return (
    <HashRouter>
      <Sidebar>
        <Routes>
          <Route path="/Football" element={<Football Sports={Sports_List} onHeart={onheartclick}/>} />
          <Route path="/Tennis" element={<Tennis Sports={Sports_List} onHeart={onheartclick}/>} />
          <Route path="/TableTennis" element={<TableTennis Sports={Sports_List} onHeart={onheartclick}/>} />
          <Route path="/AmericanFootball" element={<AmericanFootball Sports={Sports_List} onHeart={onheartclick}/>} />
          <Route path="/Basketball" element={<Basketball Sports={Sports_List} onHeart={onheartclick}/>} />
          <Route path="/Cricket" element={<Cricket Sports={Sports_List} onHeart={onheartclick}/>} />
        </Routes>
      </Sidebar>
    </HashRouter>
  );
}

export default App;
