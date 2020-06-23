import React, { useState } from 'react'

function HookComponent () {

    let [count, setCount] = useState(0)
    return (
        <div>
            hook
            <button> +</button>

            {count}
        </div>
    )
}

export default HookComponent