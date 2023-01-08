import logo from '../assets/images/svg/logo.svg';
import Nav from './Nav';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <a href='/'>
        <img src={logo} alt='Little Lemon' />
      </a>
      <section>
        <h4>Navigation</h4>
        <Nav />
      </section>
      <section>
        <h4>Contact</h4>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <a href='https://facebook.com'>Facebook</a>
          </li>
          <li>
            <a href='https://instagram.com'>Instagram</a>
          </li>
          <li>
            <a href='https://twitter.com'>Twitter</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
