import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import About from "./src/components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppLayout = ()=> {
    return (
        <div className='app'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
};


const appRouter = createBrowserRouter([
    {path: "/",
    element: <AppLayout/> ,   
    errorElement: <Error/>,   
},
{
    path: "/about",
    element: <About/>,
}
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
