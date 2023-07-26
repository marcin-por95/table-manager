import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home/Home';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import {Container} from 'react-bootstrap';
import './App.scss';
import Table from "./components/views/Table/Table";
const App = () => {
    return (

        <main>
            <Container>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tables/:id" element={<Table />}/>
                </Routes>
                <Footer/>
            </Container>
        </main>
    );
};
export default App;