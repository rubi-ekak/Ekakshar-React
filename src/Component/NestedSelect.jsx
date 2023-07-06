import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const options = [
  {
    label: 'Fruits',
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' }
    ]
  },
  {
    label: 'Vegetables',
    children: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'tomato', label: 'Tomato' }
    ]
  },
  {
    label: 'Drinks',
    children: [
      { value: 'water', label: 'Water' },
      { value: 'juice', label: 'Juice' },
      { value: 'soda', label: 'Soda' }
    ]
  }
];

const NestedSelect=()=>{
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    return (
      <div className="container">
        
        <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
        {/* <option value="4">Two</option>
        <option value="5">Three</option> */}
        </option>
      </select>
      <label for="floatingSelectGrid">Works with selects</label>
    </div>
  </div>
      </div>
    );
}

export default NestedSelect;
