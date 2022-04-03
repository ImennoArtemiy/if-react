import Counter from "./Counter/Counter";
import Select from "./Select/Select";
import './Filter.css'
import {useState} from "react";

function Filter({adultsCount, setAdultsCount, setChildrenCount,
                    childrenCount, setRoomsCount, roomsCount}) {

    const counters = [
        {
            id:1,
            onChange: setAdultsCount,
            count: adultsCount,
            text: 'Adults',
            minCount: 1,
            maxCount:30
        },
        {
            id:2,
            onChange: setChildrenCount,
            count: childrenCount,
            text: 'Children',
            minCount: 0,
            maxCount: 10
        },
        {
            id:3,
            onChange: setRoomsCount,
            count: roomsCount,
            text: 'Rooms',
            minCount: 1,
            maxCount: 30
        }
    ]

    const [addRemoveSelect, setAddRemoveSelect] = useState([])

    return (
        <div className='filter'>
            {
                counters.map(i => <Counter addRemoveSelect={addRemoveSelect}
                                           setAddRemoveSelect={setAddRemoveSelect}
                                           {...i}
                                           key={i.id}/>)
            }
            {
                childrenCount > 0 &&
                <div className='childBlock'>
                    <p>What is the age of the child you’re <br/> travelling with?</p>
                    <div className="selectsContainer">
                        {
                            addRemoveSelect.map((select, index) => <Select key={index}/>)
                        }
                    </div>

                </div>
            }
        </div>
    );
}

export default Filter;
