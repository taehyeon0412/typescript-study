import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./Router/Coins";
import Coin from "./Router/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
