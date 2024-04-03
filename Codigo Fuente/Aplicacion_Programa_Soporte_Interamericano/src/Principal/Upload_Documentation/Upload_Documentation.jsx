import React, { useState } from 'react';
import './Upload_Documentation.css'

const Upload_Documentation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
  };
  return (
    <div class="container">
	<div class="row">
	  <div class="col-md-6">
    <div class="menu-container">
            <input 
              type="text" 
              className="menu-input" 
              value={selectedOption || 'Select an option...'}
              onClick={toggleMenu} 
              readOnly
            />
            <button onClick={toggleMenu} className="menu-btn">
              <i className={`fas fa-chevron-${menuOpen ? 'up' : 'down'} fa-lg`}></i>
            </button>
            <div className="dropdown-content" style={{ display: menuOpen ? 'block' : 'none' }}>
              <a href="#" onClick={() => handleOptionClick('WRITING')}>WRITING</a>
              <a href="#" onClick={() => handleOptionClick('READING')}>READING</a>
            </div>
          </div>
	      <form method="post" action="#" id="#">
              <div class="form-group files">
                <label>Upload Your File </label>
                <input type="file" class="form-control" multiple="" />
              </div>
          </form>
	      
	  </div>
	</div>
</div>
  )
}

export default Upload_Documentation