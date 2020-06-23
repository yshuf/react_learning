import React, { useState } from 'react'

function HookComponent () {

    let [count, setCount] = useState(0)
    return (
        <div>
            hook
            <button onClick={() => { setCount(count += 1) }}}}> +</button>

        <p>   {count}</p>
        </div >
    )
}

export default HookComponent