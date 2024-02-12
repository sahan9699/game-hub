import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/homePage";
import GameDetails from "./pages/GameDetails";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage />},
            { path: 'games/:id', element: <GameDetails />}

        ]
    }
])

export default router  