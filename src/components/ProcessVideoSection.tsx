import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ProcessVideoSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [isPlaying, setIsPlaying] = useState(false);

    const processSteps = [
        {
            title: "Chuẩn bị đất",
            description: "Làm đất tơi xốp, bón phân hữu cơ và tạo luống cao",
            icon: "🌱",
            duration: "1-2 tuần"
        },
        {
            title: "Trồng cây",
            description: "Trồng cây con với khoảng cách phù hợp, tưới nước đều đặn",
            icon: "🌿",
            duration: "2-3 tuần"
        },
        {
            title: "Chăm sóc",
            description: "Bón phân định kỳ, kiểm soát sâu bệnh, tưới nước đều",
            icon: "💧",
            duration: "3-4 tháng"
        },
        {
            title: "Thu hoạch",
            description: "Thu hoạch khi cây đạt độ trưởng thành, bảo quản đúng cách",
            icon: "✂️",
            duration: "1-2 tuần"
        }
    ];

    return (
        <section id="process" ref={ref} className="py-20 bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Quy Trình Trồng Trọt
                        <span className="block text-green-600">Chuyên Nghiệp</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Khám phá quy trình trồng trọt và thu hoạch nha đam một cách khoa học và hiệu quả
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                                {!isPlaying ? (
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsPlaying(true)}
                                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </motion.button>
                                ) : (
                                    <div className="w-full h-full bg-black flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                            <p className="text-lg">Video đang tải...</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            {/* Video Overlay Info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-2">Hướng dẫn trồng nha đam</h3>
                                    <p className="text-green-200">Từ A-Z quy trình trồng trọt chuyên nghiệp</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Process Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">Các bước thực hiện</h3>
                        
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                                        <span className="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
                                            {step.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { number: "95%", label: "Tỷ lệ thành công" },
                        { number: "4-6", label: "Tháng thu hoạch" },
                        { number: "500+", label: "Cây/1000m²" },
                        { number: "24/7", label: "Hỗ trợ kỹ thuật" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 bg-white rounded-xl shadow-lg"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessVideoSection;
