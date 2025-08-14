import { Route, Routes } from "react-router";
import PageWrapper from "../Wrappers/PageWrapper";
import Dashboard from "../Pages/Dashboard";
import Leaderboard from "../Pages/Leaderboard";
import Settings from "../Pages/Settings";
import Analytics from "../Pages/Analytics";

const AppRoutes = () => {

    return (
        <Routes>
            <Route element={<PageWrapper/>} path="" >

                <Route index element={<Dashboard/>}/>

                <Route path="leaderboard" element={<Leaderboard/>} />

                <Route path="analytics" element={<Analytics/>}/>

                <Route path="settings" element={<Settings/>} />

            </Route>
        </Routes>
    )
}


export default AppRoutes;