import restaurantFood from '../assets/images/jpg/restaurantFood.jpg';

const HeroSection = () => {
  return (
    <div className='hero-section__wrapper'>
      <section className='hero-section container'>
        <h2 className='hero-section__title'>Little Lemon</h2>
        <h3 className='hero-section__subtitle'>Chicago</h3>
        <p className='hero-section__paragraph'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a table</button>
        <img
          className='hero-section__img'
          src={restaurantFood}
          alt='4 Sandwiches'
        />
      </section>
    </div>
  );
};

export default HeroSection;
