import { BrowserRouter, Routes, Route } from "react-router-dom"
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet";
import NotFound from "./screens/notFound";

const AppRoutes = () => {
    return(
        
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PlanetsScreen/>}></Route>
                <Route exact path="/planet/:id" element={<PlanetScreen/>}></Route>
                <Route  path="*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;