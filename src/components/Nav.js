import { Link } from 'react-router-dom';

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/reservations'>Reservations</Link>
        </li>
        <li>
          <Link to='/order-online'>Order Online</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
