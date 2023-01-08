import { Link } from 'react-router-dom';

import '../styles/Button.css';

const Button = ({ children, to }) => {
  return to ? (
    <Link to={to} className='button'>
      {children}
    </Link>
  ) : (
    <Button className='button'>{children}</Button>
  );
};

export default Button;
