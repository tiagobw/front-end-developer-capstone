import useMediaQuery from '../hooks/useMediaQuery';
import Nav from './Nav';

const NavHeader = ({ isVisible, onClick }) => {
  const isLg = useMediaQuery('lg');

  return isLg ? (
    <Nav className='nav-header' />
  ) : (
    <div
      className={`nav-header__container ${
        isVisible ? 'nav-header__container--visible' : ''
      }`}
    >
      <div className='nav-header__close' onClick={() => onClick(false)}>
        X
      </div>
      <Nav className='nav-header' />
    </div>
  );
};

export default NavHeader;
