import React from 'react'
import {  Form,Checkbox } from 'semantic-ui-react'

const CheckboxInput = ({input, width, type, label})=> (
    <Form.Field>
   {/* <input {...input} type={type}/>{' '} */}
    <Checkbox label={<label>{label}</label>} />
    </Form.Field>
)

export default CheckboxInput

