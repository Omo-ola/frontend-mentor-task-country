import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./ui/HomePage";
import Country from "./ui/Country";
import Countries from "./ui/Countries";
import PageNotFound from "./ui/PageNotFound";
import { CountryProvider } from "./context/CountryConytext";

function App() {

  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />}>
            <Route path="/" element={<Countries />} />
            <Route path="/:name" element={<Country />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
