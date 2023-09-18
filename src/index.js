import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './components/store';
import './reset.css'; // anrd css 
import ErrorPage from "./components/error-page";
import SingIn from "./components/singIn";
import SingUp from "./components/singUp";
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        // element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/sing-in",
        element: <SingIn />,
    },
    {
        path: "/sing-up",
        element: <SingUp />,
    },
    {
        path: "/add-contact",
        element: <AddContact />,
    },
    {
        path: "/list-contact",
        element: <ContactList />,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className='height-full'>

            <RouterProvider router={router} />
            </div>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
