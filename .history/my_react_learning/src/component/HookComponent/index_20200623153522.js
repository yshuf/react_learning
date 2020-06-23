import React, { useState } from 'react'

function HookComponent () {

    let [count, setCount] = useState(0)
    return (
        <div>
            hook
            <button> +</button>

            <p>   {count}</p>
        </div>
    )
}

export default HookComponent