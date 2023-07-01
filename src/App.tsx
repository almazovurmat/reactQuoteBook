import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from "./containers/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddQuote from "./containers/AddQuote/AddQuote";
import QuoteEdit from "./containers/Quotes/QuoteEdit";
import QuoteDelete from "./containers/Quotes/QuoteDelete";
import QuotesByCategory from "./containers/QuotesByCategory/QuotesByCategory";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <Routes>
                <Route path={"/"} element={(
                    <MainPage/>
                )}/>

                <Route path={"/add-quote"} element={(
                    <AddQuote/>
                )}/>

                <Route path="/quotes" element={<Outlet />} >
                    <Route path="/quotes" element={<MainPage />} />
                    <Route path="/quotes/:id/edit" element={<QuoteEdit />} />
                    <Route path="/quotes/:id/delete" element={<QuoteDelete />} />
                    <Route path="/quotes/:category" element={<QuotesByCategory />} />
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
