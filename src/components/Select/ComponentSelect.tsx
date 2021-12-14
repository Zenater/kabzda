import React, {KeyboardEvent, useEffect, useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value?: any
}
type SelectType = {
    value: string
    title: string
    items: ItemType[]
    onClick: (value: any) => void
    onChange: (value: string) => void
}

export const ComponentSelect = (props: SelectType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);
    const selectedItem = props.items.find(i => i.value === props.value);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active);

    const itemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = event.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (event.key === 'Enter' || event.key === 'Escape') {
            setActive(false)
        }

        return <>{

            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}
            >{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i =>
                            <div className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                                 onMouseEnter={() => setHoveredElementValue(i.value)}
                                 key={i.value}
                                 onClick={() => itemClick(i.value)}>
                                {i.title}</div>)}
                    </div>
                }
            </div>
        }
        </>

    }
}

