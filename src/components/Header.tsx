import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            LIVERA
                        </span>
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <span className="hidden sm:inline">Learn More</span>
                            <span className="sm:hidden">Learn</span>
                        </button>
                        <nav className="hidden md:flex space-x-6">
                            <a href="#process" className="text-green-600 font-medium hover:text-green-700 transition-colors">Process</a>
                            <a href="#benefits" className="text-green-600 font-medium hover:text-green-700 transition-colors">Benefits</a>
                            <a href="#about" className="text-green-600 font-medium hover:text-green-700 transition-colors">About</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
