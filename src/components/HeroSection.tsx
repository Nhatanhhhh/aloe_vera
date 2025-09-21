import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-200 rounded-full opacity-25 animate-pulse"></div>
                <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-green-300 rounded-full opacity-40 animate-bounce"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                                    LIVERA
                                </span>
                                <span className="block text-gray-800 mt-2">
                                    Aloe Vera Powder
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Discover the complete journey from organic aloe vera cultivation to premium powder production. 
                                Learn about ingredients, growing process, and transformation into pure powder.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:cursor-pointer">
                                Explore Process
                            </button>
                            <button className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer">
                                Learn More
                            </button>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 lg:pt-8">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">100%</div>
                                <div className="text-sm sm:text-base text-gray-600">Organic</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">8</div>
                                <div className="text-sm sm:text-base text-gray-600">Process Steps</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">200:1</div>
                                <div className="text-sm sm:text-base text-gray-600">Concentration</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="relative">
                        <div className="relative group">
                            <img
                                src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Fresh Aloe Vera plants"
                                className="w-full h-80 sm:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 via-transparent to-transparent rounded-3xl"></div>
                            
                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-float">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-float-delayed">
                                <span className="text-green-600 font-bold text-sm">Pure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
