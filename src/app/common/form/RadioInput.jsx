import React from 'react'
import {Form, Radio} from 'semantic-ui-react'

const RadioInput = ({input, width, type, label}) => {
    return (
        <Form.Field>
            <div className='ui radio'>
                {/* <input {...input} type={type}/>{' '} */}
                <Radio label>{label}</Radio>
            </div>
        </Form.Field>
    )
}

export default RadioInput
