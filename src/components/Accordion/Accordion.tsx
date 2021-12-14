import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any)=>void
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any)=>void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.onChange}>---{props.title}---</h3>
}

function AccordionBody(props: AccordionBodyType) {

    return (
        <ul>
        {props.items.map((m, i) =>
         <li onClick={() => props.onClick(m.value)} key={i}>{m.title}</li>)}
            </ul>)
}
        export default Accordion;