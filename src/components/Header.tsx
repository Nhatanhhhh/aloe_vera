import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
        >
            <div className="px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            LIVERA
                        </span>
                    </motion.div>
                    
                    {/* Navigation */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('process')}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span className="hidden sm:inline">Tìm hiểu thêm</span>
                            <span className="sm:hidden">Tìm hiểu</span>
                        </motion.button>
                        <nav className="hidden md:flex space-x-6">
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                href="#process" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('process');
                                }}
                                className="text-green-600 font-medium hover:text-green-700 transition-colors cursor-pointer"
                            >
                                Quy trình
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                href="#animation" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('animation');
                                }}
                                className="text-green-600 font-medium hover:text-green-700 transition-colors cursor-pointer"
                            >
                                Mô phỏng
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.1 }}
                                href="#products" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('products');
                                }}
                                className="text-green-600 font-medium hover:text-green-700 transition-colors cursor-pointer"
                            >
                                Sản phẩm
                            </motion.a>
                        </nav>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
