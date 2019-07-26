import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button,Breadcrumb } from "semantic-ui-react";
import TestPlaceInput from '../TestArea/TestPlaceInput';

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponenet extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <Fragment>
        <div>
          <h1>test component</h1>
          <h3>The answer is:{data}</h3>
          <Button onClick={incrementCounter} positive content='Increment' />
          <Button onClick={decrementCounter} negative content='Decrement' />
        </div>
        <br />
        <br />
        <br />
        <div>
          <button class='ui button'>
            <i class='pause icon' />
          </button>
          <button class='ui button'>
            <i class='play icon' />
          </button>
          <button class='ui button'>
            <i class='stop icon' />
          </button>
          <br />
          <div class='ui labeled button' tabindex='0'>
            <div class='ui red button'>
              <i class='heart icon' /> Like
            </div>

            <br />

            <h4>455</h4>
          </div>
          <br />
          <br />
          <Breadcrumb>
            <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section link>Store</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
          </Breadcrumb>

        <br />
        <br />
        <TestPlaceInput />
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponenet);
