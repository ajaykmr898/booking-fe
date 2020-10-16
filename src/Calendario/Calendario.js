import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as moment from 'moment';

function Calendario(props) {
    let curDate = props.curDate;
    let setDate = props.setDate;
    console.log(props);

    const tileDisabled = ({date, view}) => {
        return moment().add(-1, 'days').isAfter(date);
    };

    const clickTime = (id, time) => {
        let arr = document.getElementsByClassName('time');
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('clicked');
        }
        let el = document.getElementById('time_' + id);
        console.log(id, el);
        el.classList.add('clicked');
    };

    const [hours, setHours] = useState([]);

    const onChange = (date: Date) => {
        setDate(date);
        getHours();
    };

    const getHours = () => {
        let hours = [{id: 1, time: '10:00'}, {id: 2, time: '11:00'}, {id: 3, time: '12:00'}];
        setHours(hours);
    };
    
    return (
        <div>
            <Calendar
                onChange={onChange}
                value={curDate}
                locale="IT"
                tileDisabled={tileDisabled}
            />
            {
                hours.map((v, k) => {
                    return (
                        <div key={k}>
                            <button className="time" id={'time_'+v.id} onClick={() => clickTime(v.id, v.time)}> {v.time} </button>
                        </div>
                    );
                })
            }
        </div>
    )
    
};

export default Calendario;
