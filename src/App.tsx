import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Raiting/RatingRating";

import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";
import {ControlledCheckBox, Input} from "./components/Input";
import {ComponentSelect} from "./components/Select/ComponentSelect";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const [value, setValue] = useState('2')

    return (
        <div className={"App"}>
            {/*<UncontrolledInput/>*/}
            <Input/>
            <ComponentSelect value={value} title={"Madrid"} items={[
                {title: "her", value: 1},
                {title: "Hold", value: 2},
                {title: "Purple", value: 3}]}
                             onClick={() => (alert(`user with ID should be happy`))}
                             onChange={setValue}/>
            <ControlledCheckBox/>
            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[
                           {title: "Dimsc", value: 1},
                           {title: "Valera", value: 2},
                           {title: "Oly", value: 3}]}
                       onClick={(value) => (alert(`user with ID ${value} should be happy`))}
            />
            {/*<OnOff  on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Second Menu"} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (<h1>{props.title}</h1>)
}


export default App;
