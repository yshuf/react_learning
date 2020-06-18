import React from 'React'
import ProTypes from 'prop-types'

export default class AddName extends components {
    // 声明属性
    static propTypes = {
        lastName: propTypes.string.isRequired,
        addNameCreater: propTypes.func.isRequired,
        lastage: propTypes.number.isRequired,
        addAgeCreater: propTypes.func.isRequired,
        addNameAsync: propTypes.func.isRequired,
    }

}