import React, {useState} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {

  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); 
  };

  const getListItemClassName = (language) => {
    return language === selectedLanguage ? 'selected' : '';
  };

  return (
    <div className='navbar'>
  <div className="logo-container">
    <img className="logo" src="../../../netflixlogo.png" alt="Netflix Logo" />
  </div>
  <div className="navbar-right">
  <div className="language-dropdown">
    <button className='selected-language-button' onClick={toggleDropdown}>{selectedLanguage}
    </button>
    {isDropdownOpen && (
      <div className="dropdown-menu">
        <ul>
          <li className={getListItemClassName('English')} onClick={() => handleLanguageSelect('English')}>English</li>
          <li className={getListItemClassName('Arabic')} onClick={() => handleLanguageSelect('Arabic')}>Arabic</li>
        </ul>
      </div>
    )}
  </div>
  <div className='signup'>
  <Link to="/signin">
    <button className='signup_btn'>Sign In</button>
    </Link>
  </div>
  </div>
</div>
  )
}

export default NavBar
