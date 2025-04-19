import './App.css';
import HeroSection from './Components/HeroSection';
import ProductImage from './Components/ProductImage';
import WhatsAppButton from './Components/WhatsAppButton';
import Benefits from './Components/Benefits';
import CustomerReviews from './Components/CustomerReviews';
import Header from './Components/Header';


function App() {
  return (
    <>
        <Header /> 
        <div className="container">
        <HeroSection />
        <ProductImage />
        <WhatsAppButton />
        <Benefits />
        <CustomerReviews />
        </div>

    </>
  );
}

export default App;
