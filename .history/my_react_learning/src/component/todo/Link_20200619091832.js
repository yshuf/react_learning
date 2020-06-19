import React, { Component } from 'react'
import PropType from 'prop-types'

const Link = ({ active, children, onclick }) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href=""
            onClick={e => {
                e.preventDefault(
                    onclick()
                )
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropType.bool.isRequired,
    children: PropType.node.isRequired,
    onClick: PropType.fun.isRequired
}
export default Link