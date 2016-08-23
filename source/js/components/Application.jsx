import React from 'react';
import Option from './Option.jsx';

const items = [
  'One',
  'Two',
  'Three'
];

var selectElementStyle = {
  marginTop: '20px',
  marginBottom: '10px'
};

let Application = React.createClass({

  getInitialState: function () {
    return {
      selectedOptionValue: items[0]
    };
  },

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    console.log(this.state.selectedOptionValue, 'is selected.');
  },

  handleOptionChange: function (changeEvent) {
    let selectedOptionValue = changeEvent.target.value;

    this.setState({
      selectedOptionValue: selectedOptionValue
    });
  },

  createOption: function (label) {
    return <Option label={label} key={label} />;
  },

  createOptions: function () {
    return items.map(this.createOption);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">

            <form onSubmit={this.handleFormSubmit}>

              <select 
                className="form-control" 
                style={selectElementStyle}
                value={this.state.selectedOptionValue} 
                onChange={this.handleOptionChange}>

                {this.createOptions()}
              </select>

              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
});

export default Application;