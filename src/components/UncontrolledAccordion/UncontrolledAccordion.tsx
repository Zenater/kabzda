import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean

}

export function UncontrolledAccordion(props: AccordionPropsType) {



let [collapsed, setCollapsed] = useState(false );


    return <div>
        <AccordionTitle title={props.titleValue} onClick={() =>{setCollapsed(!collapsed)}}/>

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

