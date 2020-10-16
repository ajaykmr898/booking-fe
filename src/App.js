import React, {useState} from 'react';
import './App.css';
import UserInfo from './UserInfo/UserInfo';
import Navigation from './Navigation/Navigation';
import Calendario from './Calendario/Calendario';

function App() {
    const [tab, setTab] = useState(0);
    const [curDate, setDate] = useState(new Date());

    return (
        <div className="App">
            <div className="App-header">
                <h1 className="title"> Prenota Appuntamento </h1>
                        { tab === 0 ? <Calendario curDate={curDate} setDate={setDate} /> : <UserInfo /> }
                <br/>
                <Navigation tab={tab} onChange={setTab} />
            </div>
        </div>
    );
};

export default App;
