import "./App.css";

function App() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="px-8 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-green-600">Aloe Vera</span>
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex items-center space-x-8">
                        <button className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-colors">
                            Online narudžbine
                        </button>
                        <nav className="flex space-x-6">
                            <a href="#" className="text-green-600 font-medium hover:text-green-700">Početna stranica</a>
                            <a href="#" className="text-green-600 font-medium hover:text-green-700">Proizvodi</a>
                            <a href="#" className="text-green-600 font-medium hover:text-green-700">Kontakt</a>
                        </nav>
                    </div>
                </div>
                
                {/* Green line */}
                <div className="mt-4 h-0.5 bg-green-500"></div>
            </header>

            {/* Main Content */}
            <main className="px-8 py-12">
                <div className="flex items-center justify-between">
                    {/* Left side - Text content */}
                    <div className="flex-1 max-w-2xl">
                        <div className="space-y-4 mb-8">
                            <h1 className="text-6xl font-bold">
                                <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                                    Beograd,
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                    Srbija
                                </span>
                                <br />
                                <span className="text-gray-800">
                                    Kvalitet
                                </span>
                            </h1>
                        </div>
                        
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Iskoristite sva bogatstva i darove koje vam priroda nudi, jer to zaslužujete.
                        </p>
                        
                        {/* Call to Action Buttons */}
                        <div className="flex space-x-4">
                            <button className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-colors shadow-lg">
                                Kontakt
                            </button>
                            <button className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors shadow-lg">
                                Brošura
                            </button>
                        </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Fresh Aloe Vera plants and slices"
                                className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
