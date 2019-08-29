import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class RadioGroupFAType extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  render() {
    return (
      <Form>
        <Form.Field>
          <Radio
            label='Corporation'
            name='radioGroup'
            value='Corporation'
            checked={this.state.value === 'Corporation'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Limited Liability Company (LLC)'
            name='radioGroup'
            value='Limited Liability Company (LLC)'
            checked={this.state.value === 'Limited Liability Company (LLC)'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Limited Partnership (LP)'
            name='radioGroup'
            value='Limited Partnership (LP)'
            checked={this.state.value === 'Limited Partnership (LP)'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Limited Liability Partnership (LLP)'
            name='radioGroup'
            value='Limited Liability Partnership (LLP)'
            checked={this.state.value === 'Limited Liability Partnership (LLP)'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Partnership'
            name='radioGroup'
            value='Partnership'
            checked={this.state.value === 'Partnership'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Sole Proprietorship'
            name='radioGroup'
            value='Sole Proprietorship'
            checked={this.state.value === 'Sole Proprietorship'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Other (Please Specify) - must enable a textbox if this option is selected.'
            name='radioGroup'
            value='Other (Please Specify) - must enable a textbox if this option is selected.'
            checked={this.state.value === 'Other (Please Specify) - must enable a textbox if this option is selected.'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
         Selected value: <b>{this.state.value}</b> 
        </Form.Field>
      </Form>
    )
  }
}

export default RadioGroupFAType