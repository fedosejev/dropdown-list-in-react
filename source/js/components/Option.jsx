import React from 'react';

let Option = function (props) {
  return (
    <option value={props.label}>{props.label}</option>
  );
};

export default Option;