import Counter from "./Counter/Counter";
import Select from "./Select/Select";
import {useState} from "react";
import {ChildBlock, FilterWrapper, SelectsWrapper} from "./style";
import {filter} from "../../../../data/siteConfig";

function Filter({
                    adultsCount,
                    setAdultsCount,
                    setChildrenCount,
                    childrenCount,
                    setRoomsCount,
                    roomsCount
                }) {

    const counters = [
        {
            id: 1,
            onChange: setAdultsCount,
            count: adultsCount,
            text: 'Adults',
            minCount: 1,
            maxCount: 30
        },
        {
            id: 2,
            onChange: setChildrenCount,
            count: childrenCount,
            text: 'Children',
            minCount: 0,
            maxCount: 10
        },
        {
            id: 3,
            onChange: setRoomsCount,
            count: roomsCount,
            text: 'Rooms',
            minCount: 1,
            maxCount: 30
        }
    ]

    const [addRemoveSelect, setAddRemoveSelect] = useState([])

    return (
        <FilterWrapper>
            {
                counters.map(i => <Counter addRemoveSelect={addRemoveSelect}
                                           setAddRemoveSelect={setAddRemoveSelect}
                                           {...i}
                                           key={i.id}
                />)
            }
            {
                childrenCount > 0 &&
                <ChildBlock>
                    <p>
                        {filter.childBlock.titleFirst}<br/>{filter.childBlock.titleSecond}
                    </p>
                    <SelectsWrapper>
                        {
                            addRemoveSelect.map((item, index) => {

                                return (<Select key={`${item}-${index}`}
                                                index={index}
                                />)
                            })
                        }
                    </SelectsWrapper>
                </ChildBlock>
            }
        </FilterWrapper>
    );
}

export default Filter;
