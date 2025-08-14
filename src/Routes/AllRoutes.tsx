import { Route, Routes } from "react-router";
import PageWrapper from "../Wrappers/PageWrapper";
import Dashboard from "../Pages/Dashboard";
import Leaderboard from "../Pages/Leaderboard";
import Settings from "../Pages/Settings";

const AppRoutes = () => {

    return (
        <Routes>
            <Route element={<PageWrapper/>} path="" >

                <Route index element={<Dashboard/>}/>

                <Route path="leaderboard" element={<Leaderboard/>} />

                <Route path="analytics" element={<Dashboard/>}/>

                <Route path="settings" element={<Settings/>} />

            </Route>
        </Routes>
    )
}


export default AppRoutes;