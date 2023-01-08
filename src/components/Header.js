import NavHeader from './NavHeader';
import { useNavHeader } from '../hooks/useNavHeader';

import logo from '../assets/images/svg/logo.svg';
import hamburgerMenu from '../assets/images/svg/hamburgerMenu.svg';

const Header = ({ className }) => {
  const { isVisible, handleIsVisible } = useNavHeader();

  return (
    <header className='header container'>
      <a href='/'>
        <img src={logo} alt='Little Lemon' />
      </a>
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
