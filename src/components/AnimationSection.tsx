import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AnimationSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const animationSteps = [
        { name: "Gieo hạt", duration: 2000, color: "from-yellow-400 to-orange-500" },
        { name: "Nảy mầm", duration: 2000, color: "from-green-400 to-green-600" },
        { name: "Phát triển", duration: 3000, color: "from-green-500 to-emerald-600" },
        { name: "Thu hoạch", duration: 2000, color: "from-emerald-500 to-teal-600" }
    ];

    const startAnimation = async () => {
        setIsAnimating(true);
        setCurrentStep(0);
        
        for (let i = 0; i < animationSteps.length; i++) {
            setCurrentStep(i);
            await controls.start({
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
                transition: { duration: animationSteps[i].duration / 1000, ease: "easeInOut" }
            });
        }
        
        setIsAnimating(false);
    };

    useEffect(() => {
        if (isInView && !isAnimating) {
            const timer = setTimeout(() => {
                startAnimation();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <section id="animation" ref={ref} className="py-20 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Mô Phỏng Quy Trình
                        <span className="block text-green-600">Trồng Nha Đam</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trải nghiệm quy trình trồng trọt nha đam thông qua animation tương tác và hiệu ứng chân thực
                    </p>
                </motion.div>

                {/* Animation Display - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 shadow-2xl">
                        {/* Farm Field */}
                        <div className="relative h-96 bg-gradient-to-b from-green-200 to-green-300 rounded-xl overflow-hidden">
                            {/* Ground */}
                            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-amber-200 to-amber-100"></div>
                            
                            {/* Aloe Vera Plants with Real Images */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={controls}
                                    className="absolute bottom-10"
                                    style={{
                                        left: `${15 + i * 20}%`,
                                    }}
                                >
                                    {/* Seed Stage */}
                                    {currentStep === 0 && (
                                        <motion.div
                                            className="w-4 h-4 bg-yellow-400 rounded-full"
                                            animate={{
                                                scale: [0.5, 1, 0.5],
                                                y: [0, -5, 0]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )}

                                    {/* Germination Stage */}
                                    {currentStep === 1 && (
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 0.6 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                                alt="Young Aloe Vera"
                                                className="w-16 h-16 object-cover rounded-lg shadow-md"
                                            />
                                            <motion.div
                                                className="absolute -top-2 -left-2 text-2xl"
                                                animate={{
                                                    rotate: [0, 10, -10, 0],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                🌱
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {/* Growth Stage */}
                                    {currentStep === 2 && (
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 0.8 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <img
                                                src="https://res.cloudinary.com/dixqw22t3/image/upload/v1758468801/images_cix40y.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
                                                alt="Growing Aloe Vera"
                                                className="w-20 h-20 object-cover rounded-lg shadow-md"
                                            />
                                            <motion.div
                                                className="absolute -top-1 -right-1 text-xl"
                                                animate={{
                                                    rotate: [0, 15, -15, 0],
                                                    scale: [1, 1.2, 1]
                                                }}
                                                transition={{ duration: 2.5, repeat: Infinity }}
                                            >
                                                🌿
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {/* Mature Stage */}
                                    {currentStep === 3 && (
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <img
                                                src="https://res.cloudinary.com/dixqw22t3/image/upload/v1758468801/images_cix40y.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=140&q=80"
                                                alt="Mature Aloe Vera"
                                                className="w-24 h-24 object-cover rounded-lg shadow-lg"
                                            />
                                            <motion.div
                                                className="absolute -top-2 -right-2 text-2xl"
                                                animate={{
                                                    rotate: [0, 20, -20, 0],
                                                    scale: [1, 1.3, 1]
                                                }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            >
                                                ✂️
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Water droplets animation */}
                            {currentStep > 0 && (
                                <motion.div
                                    className="absolute top-8 left-1/2 transform -translate-x-1/2"
                                    animate={{
                                        y: [0, 30, 0],
                                        opacity: [0, 1, 0],
                                        scale: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <div className="text-3xl">💧</div>
                                </motion.div>
                            )}

                            {/* Multiple water droplets */}
                            {currentStep > 0 && (
                                <>
                                    <motion.div
                                        className="absolute top-12 left-1/4 text-2xl"
                                        animate={{
                                            y: [0, 25, 0],
                                            opacity: [0, 0.8, 0],
                                            scale: [0.3, 0.8, 0.3]
                                        }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                    >
                                        💧
                                    </motion.div>
                                    <motion.div
                                        className="absolute top-16 right-1/4 text-2xl"
                                        animate={{
                                            y: [0, 25, 0],
                                            opacity: [0, 0.8, 0],
                                            scale: [0.3, 0.8, 0.3]
                                        }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                                    >
                                        💧
                                    </motion.div>
                                </>
                            )}

                            {/* Sun */}
                            <motion.div
                                className="absolute top-6 right-6 text-5xl"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                            >
                                ☀️
                            </motion.div>

                            {/* Progress Bar */}
                            <div className="absolute top-4 left-4 right-4">
                                <div className="bg-white/90 backdrop-blur-sm rounded-full h-3 shadow-lg">
                                    <motion.div
                                        className={`h-full rounded-full bg-gradient-to-r ${animationSteps[currentStep]?.color || 'from-gray-400 to-gray-500'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentStep + 1) / animationSteps.length) * 100}%` }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                </div>
                                <div className="text-center mt-2">
                                    <span className="text-sm font-medium text-gray-700">
                                        {animationSteps[currentStep]?.name || 'Chờ bắt đầu'}
                                    </span>
                                </div>
                            </div>

                            {/* Real Aloe Vera Image for Harvest Stage */}
                            {currentStep === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute bottom-4 left-4 right-4"
                                >
                                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                                        <div className="flex items-center justify-center space-x-4">
                                            <img
                                                src="https://res.cloudinary.com/dixqw22t3/image/upload/v1758468801/images_cix40y.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                                                alt="Cây nha đam trưởng thành"
                                                className="w-16 h-16 object-cover rounded-lg shadow-md"
                                            />
                                            <div>
                                                <h4 className="text-lg font-semibold text-green-700">Cây Nha Đam Trưởng Thành</h4>
                                                <p className="text-sm text-gray-600">Sẵn sàng thu hoạch</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Control Panel */}
                        <div className="mt-8 flex justify-center space-x-4 hover:cursor-pointer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={startAnimation}
                                disabled={isAnimating}
                                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 hover:cursor-pointer ${
                                    isAnimating 
                                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl'
                                }`}
                            >
                                {isAnimating ? 'Đang chạy...' : 'Bắt đầu mô phỏng'}
                            </motion.button>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
                                <div className="text-2xl font-bold text-green-600">{currentStep + 1}/4</div>
                                <div className="text-gray-600 text-sm">Bước hiện tại</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
                                <div className="text-2xl font-bold text-blue-600">
                                    {animationSteps[currentStep]?.duration ? `${animationSteps[currentStep].duration / 1000}s` : '0s'}
                                </div>
                                <div className="text-gray-600 text-sm">Thời gian</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
                                <div className="text-2xl font-bold text-emerald-600">
                                    {currentStep === 3 ? '100%' : `${(currentStep + 1) * 25}%`}
                                </div>
                                <div className="text-gray-600 text-sm">Hoàn thành</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AnimationSection;
