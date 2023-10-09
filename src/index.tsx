import ReactDOM from "react-dom/client";
import App from "./App";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import AviaPage from "./pages/AviaPage";
import AviaInfoPage from "./pages/AviaInfoPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to={"/avia"} />,
            },
            {
                path: "/avia",
                element: <AviaPage />,
            },
            {
                path: "/avia/info",
                element: <AviaInfoPage />,
            },
            {
                path: "*",
                element: <Navigate to={"/avia"} />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
