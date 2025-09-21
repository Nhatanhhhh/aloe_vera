import React from 'react';

const Products: React.FC = () => {
    const products = [
        {
            name: "Pure Aloe Vera Powder",
            description: "100% organic aloe vera powder with maximum nutrient concentration",
            price: "$29.99",
            features: ["200:1 Concentrate", "100% Organic", "No Additives", "250g Package"],
            image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Best Seller"
        },
        {
            name: "Aloe Vera Capsules",
            description: "Convenient capsules for easy daily consumption",
            price: "$24.99",
            features: ["500mg per capsule", "60 capsules", "Easy to swallow", "Pure powder"],
            image: "https://images.unsplash.com/photo-1597317002281-847004a40d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Popular"
        },
        {
            name: "Aloe Vera Gel Powder",
            description: "Reconstitutable powder for topical and internal use",
            price: "$34.99",
            features: ["Reconstitutable", "Topical use", "Internal use", "500g Package"],
            image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Premium"
        }
    ];

    const benefits = [
        {
            icon: "🌿",
            title: "Digestive Health",
            description: "Supports healthy digestion and gut function"
        },
        {
            icon: "💪",
            title: "Immune Support",
            description: "Boosts natural immune system function"
        },
        {
            icon: "✨",
            title: "Skin Health",
            description: "Promotes healthy, glowing skin from within"
        },
        {
            icon: "🔥",
            title: "Anti-Inflammatory",
            description: "Natural anti-inflammatory properties"
        },
        {
            icon: "💧",
            title: "Hydration",
            description: "Supports optimal hydration and electrolyte balance"
        },
        {
            icon: "⚡",
            title: "Energy Boost",
            description: "Natural energy and vitality enhancement"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-8">
                {/* Products Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">
                        Our Products
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Premium quality aloe vera products crafted with care and precision. 
                        Choose from our range of pure, organic formulations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {product.badge}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {product.description}
                                </p>
                                
                                <div className="space-y-2 mb-6">
                                    {product.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center">
                                            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-green-600">
                                        {product.price}
                                    </span>
                                    <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-gray-800 mb-6">
                            Health Benefits
                        </h3>
                        <p className="text-xl text-gray-600">
                            Discover the powerful health benefits of pure aloe vera powder
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-3xl">{benefit.icon}</span>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                                    {benefit.title}
                                </h4>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nutritional Information */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-6">
                                Nutritional Profile
                            </h3>
                            <p className="text-lg text-gray-600 mb-8">
                                Our aloe vera powder contains over 200 active compounds including 
                                vitamins, minerals, amino acids, and enzymes.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-semibold text-gray-800">Vitamin A</span>
                                    <span className="text-green-600 font-bold">High</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-semibold text-gray-800">Vitamin C</span>
                                    <span className="text-green-600 font-bold">High</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-semibold text-gray-800">Vitamin E</span>
                                    <span className="text-green-600 font-bold">High</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-semibold text-gray-800">Acemannan</span>
                                    <span className="text-green-600 font-bold">Very High</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-semibold text-gray-800">Antioxidants</span>
                                    <span className="text-green-600 font-bold">Very High</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Aloe Vera nutritional benefits"
                                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
