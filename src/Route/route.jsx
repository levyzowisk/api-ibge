import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
export default function AppRoute() {
    return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}>

            </Route>
        </Routes>
    </>
    )
}