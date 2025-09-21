import React from 'react';

const GrowingProcess: React.FC = () => {
    const steps = [
        {
            title: "Organic Cultivation",
            description: "Our aloe vera is grown in pristine organic farms using sustainable farming practices.",
            icon: "🌱",
            details: "No pesticides, no chemicals, just pure natural growth"
        },
        {
            title: "Optimal Climate",
            description: "Located in ideal growing conditions with perfect temperature and humidity.",
            icon: "☀️",
            details: "Mediterranean climate ensures maximum nutrient content"
        },
        {
            title: "Mature Harvest",
            description: "Plants are harvested at peak maturity when nutrient content is highest.",
            icon: "✂️",
            details: "3-5 year old plants provide the best quality leaves"
        },
        {
            title: "Quality Control",
            description: "Each leaf is carefully inspected for quality and freshness.",
            icon: "🔍",
            details: "Only the finest leaves make it to production"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">
                        Growing Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From seed to harvest, we ensure every step maintains the highest quality standards 
                        for our organic aloe vera cultivation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                                <span className="text-3xl">{step.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {step.description}
                            </p>
                            <p className="text-sm text-green-600 font-medium">
                                {step.details}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Process Flow */}
                <div className="mt-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <img
                                src="https://images.unsplash.com/photo-1597317002281-847004a40d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Aloe Vera farm"
                                className="w-full h-80 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6">
                                Sustainable Farming Practices
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Organic Certification</h4>
                                        <p className="text-gray-600">Certified organic by international standards</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Water Conservation</h4>
                                        <p className="text-gray-600">Efficient irrigation systems minimize water usage</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Soil Health</h4>
                                        <p className="text-gray-600">Natural composting maintains soil fertility</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowingProcess;
