import ResponsiveAppBar from './components/ResponsiveAppBar';
import NationalTeamPage from './pages/nat-team.jsx';
import CalendarPage from './pages/calendar.jsx';
import LeaguePage from './pages/league.jsx';
import InfoPage from './pages/information.jsx';
import BoardPage from './pages/board.jsx';
import HomePage from "./pages/home.jsx";
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ResponsiveAppBar/>
                {/* This empty Toolbar acts as a spacer */}
                {/* It pushes the content down so it's not hidden by the AppBar */}
                <Toolbar />

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/board" element={<BoardPage/>} />
                        <Route path="/national-team" element={<NationalTeamPage/>} />
                        <Route path="/calendar" element={<CalendarPage />} />
                        <Route path="/schools-league" element={<LeaguePage />} />
                        <Route path="/information" element={<InfoPage />} />

                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;