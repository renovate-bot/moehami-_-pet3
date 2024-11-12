// import components
import Head from 'next/head';
<<<<<<< HEAD
// testa23333
=======
// testa2
>>>>>>> 22d4abe3cac62b82860557ef161f690f0e4a8a44
import Pets from '../components/Pets';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Adoption from '../components/Adoption';
import PetName from '../components/PetName';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Hero />
      <Pets />
      <Services />
      <Adoption />  
    <PetName />
  <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
