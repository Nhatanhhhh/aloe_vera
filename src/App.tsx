import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import GrowingProcess from './components/GrowingProcess';
import ProductionProcess from './components/ProductionProcess';
import Products from './components/Products';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            <main className="pt-20">
                <HeroSection />
                <GrowingProcess />
                <ProductionProcess />
                <Products />
            </main>
            
            <Footer />
        </div>
    );
}

export default App;
