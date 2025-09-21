import React from 'react';

const ProductionProcess: React.FC = () => {
    const processSteps = [
        {
            step: "01",
            title: "Harvesting & Selection",
            description: "Fresh aloe vera leaves are carefully harvested and selected for quality.",
            image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            step: "02", 
            title: "Cleaning & Preparation",
            description: "Leaves are thoroughly cleaned and prepared for processing.",
            image: "https://images.unsplash.com/photo-1597317002281-847004a40d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            step: "03",
            title: "Gel Extraction",
            description: "Pure aloe vera gel is extracted using advanced cold-press technology.",
            image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            step: "04",
            title: "Filtration & Purification",
            description: "Gel undergoes multiple filtration stages to ensure purity.",
            image: "https://images.unsplash.com/photo-1597317002281-847004a40d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            step: "05",
            title: "Concentration",
            description: "The purified gel is concentrated to enhance potency.",
            image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            step: "06",
            title: "Spray Drying",
            description: "Concentrated gel is transformed into fine powder using spray drying.",
            image: "https://images.unsplash.com/photo-1597317002281-847004a40d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            step: "07",
            title: "Quality Testing",
            description: "Powder undergoes rigorous quality and purity testing.",
            image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            step: "08",
            title: "Packaging",
            description: "Final product is packaged in eco-friendly, airtight containers.",
            image: "https://images.unsplash.com/photo-1597317002281-847004a40d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">
                        Production Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our state-of-the-art production facility ensures the highest quality aloe vera powder 
                        through an 8-step process that preserves all natural nutrients.
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
                    
                    <div className="space-y-12">
                        {processSteps.map((step, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                {/* Content */}
                                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                                                {step.step}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Image */}
                                <div className="lg:w-1/2 mt-8 lg:mt-0">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quality Assurance */}
                <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-gray-800 mb-6">
                            Quality Assurance
                        </h3>
                        <p className="text-xl text-gray-600">
                            Every batch undergoes comprehensive testing to ensure purity and potency
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Purity Testing</h4>
                            <p className="text-gray-600">99.9% pure aloe vera powder guaranteed</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Nutrient Analysis</h4>
                            <p className="text-gray-600">Comprehensive vitamin and mineral testing</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Safety Standards</h4>
                            <p className="text-gray-600">FDA approved and GMP certified facility</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionProcess;
