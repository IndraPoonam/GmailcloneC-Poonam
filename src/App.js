import './App.css';
import React, {useState,useEffect, useContext, createContext, useMemo} from 'react';
import GmailHeader from './GmailHeader';
import LeftSideBar from './LeftSideBar';
import GmailBody from './GmailBody';
import RightSideBar from './RightSideBar';
import { Routes,Route } from 'react-router-dom';

function App() {



  return (
<>


{/* <Navbar/> */}

    <div class="body-wrapper" >
    <GmailHeader />
    <LeftSideBar />
    
    <Routes>
      <Route path="/" element={<GmailBody params = ""/>} />
      <Route path="/inbox" element={<GmailBody params="inbox"/> } />
      <Route path="/sent" element={<GmailBody params="sent" />} />
      <Route path="/draft" element={<GmailBody params="draft" />} />
    </Routes>

  <RightSideBar />

  </div>
</>
  );
}

export default App;

