import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProcessVideoSection from './components/ProcessVideoSection';
import AnimationSection from './components/AnimationSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            <main className="pt-20">
                <HeroSection />
                <ProcessVideoSection />
                <AnimationSection />
                <ProductsSection />
                <AboutSection />
            </main>
            
            <Footer />
        </div>
    );
}

export default App;
