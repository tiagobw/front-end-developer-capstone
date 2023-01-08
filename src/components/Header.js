import NavHeader from './NavHeader';
import { useNavHeader } from '../hooks/useNavHeader';

import logo from '../assets/images/svg/logo.svg';
import hamburgerMenu from '../assets/images/svg/hamburgerMenu.svg';
import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  const { isVisible, handleIsVisible } = useNavHeader();

  return (
    <header className='header container'>
      <Link to='/'>
        <img src={logo} alt='Little Lemon' />
      </Link>
      <img
        src={hamburgerMenu}
        alt='Hamburger Menu'
        className='hamburger-menu'
        onClick={() => handleIsVisible(true)}
      />
      <NavHeader isVisible={isVisible} onClick={handleIsVisible} />
    </header>
  );
};

export default Header;
