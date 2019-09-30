import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Tasks from "./Tasks";


class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <Header />
                    <Tasks />
                    <Footer />

                </div>
            </div>
        );
    }
}

export default App;

