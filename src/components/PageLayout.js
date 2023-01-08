import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageLayout;
