import React, {useRef, useState} from 'react';

export const UncontrolledInput = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <input ref={inputRef}/>
            <button
                onClick={() => {
                    const el = inputRef.current as HTMLInputElement;
                    setValue(el.value)}}> save
            </button>- actual value: {value}
        </div>)
}