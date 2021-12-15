import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}
/*
type ActionType = {
    type: string
}*/

/*
const reducer=(state:boolean, action:ActionType)=> {
    if(action.type==='Toggle-collapsed') {
        return !state
    }
    return state
}
*/

export function UncontrolledAccordion(props: AccordionPropsType) {

let [collapsed, setCollapsed] = useState(false );
/*let [collapsed, dispatch] = useReducer(reducer,false )*/


    return <div>
        {/*  <AccordionTitle title={props.titleValue} onClick={() =>{setCollapsed(!collapsed)}}/>*/}
{/*        <AccordionTitle title={props.titleValue} onClick={()=>dispatch({type:'Toggle-collapsed'})}/>*/}
        <AccordionBody tolik={collapsed}/>
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
}

type AccordionBodyType = {
    tolik: boolean
}

function AccordionBody(props: AccordionBodyType) {

    return (
        <>
            {props.tolik && <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>}
        </>

    )
}

