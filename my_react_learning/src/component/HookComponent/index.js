import React, { useState, useEffect } from 'react'

function HookComponent () {

    let [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count
    })
    return (
        <div>
            hook
            <button onClick={() => { setCount(count += 1) }}> +</button>

            <p>   {count}</p>
        </div >
    )
}

export default HookComponent