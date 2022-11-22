import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Login from './Components/Login';

const router = createBrowserRouter([
    {
        path: "/Login",
        element: (
            <Login>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </Login>
        )
    },
    {
        path: "/",
        element: (
            <div>Home page</div>        
        )
    },
    {
        path: "about",
        element: <div>About</div>,
    }]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <RouterProvider router={router}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </RouterProvider>
    </React.Fragment>
);

export default root;
