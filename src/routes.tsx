import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/homePage";
import GameDetails from "./pages/GameDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage />},
            { path: 'games/:id', element: <GameDetails />}

        ]
    }
])

export default router  