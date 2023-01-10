import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

import Overview from './pages/overview/Overview';
import NftOverview from "./pages/nftOverview/Overview";
import WalletOverview from "./pages/walletOverview/overview"
import GameOverview from "./pages/gameOverview/Overview"

import GlobalStyles from './assets/styles/GlobalStyles';
import ScrollToTop from 'util/ScrollTop';

import Nav from 'layout/nav'


function App() {
  return (
    <Router>
       <ScrollToTop />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/nft" element={<Nav />} />
        <Route path="/wallet" element={<Nav />} />
        <Route path="/game" element={<Nav />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/nft" element={<NftOverview />} />
        <Route path="/wallet" element={<WalletOverview /> } />
        <Route path="/game" element={<GameOverview /> } />
      </Routes>
    </Router>
  );
}

export default App;
