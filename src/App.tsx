import { Route, Routes } from "react-router-dom";
import { HistoryModule } from "./modules/PriceHistory/HistoryModule.tsx";
import { OverviewModule } from "./modules/PriceOverview/OverviewModule.tsx";
import { NowModule } from "./modules/PriceNow/NowModule.tsx";
import PWABadge from "./modules/pwa-badge/PWABadge.tsx";
import { MainPage } from "./Pages/MainPage.tsx";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<NowModule />}></Route>
          <Route path="/historik" element={<HistoryModule />} />
          <Route path="/oversigt" element={<OverviewModule />} />
          <Route path="/lige-nu" element={<NowModule />} />
        </Route>
      </Routes>
      <PWABadge />
    </>
  );
}

export default App;
