import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Về Dự Án
                        <span className="block text-green-600">LIVERA</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Khám phá chi tiết về dự án sản xuất bột nha đam và tổ chức của chúng tôi
                    </p>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    {/* PDF Header */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Tài liệu dự án LIVERA</h3>
                                    <p className="text-green-100 text-sm">Thông tin chi tiết về dự án và tổ chức</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                </button>
                                <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PDF Content */}
                    <div className="h-96 bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">Tài liệu PDF</h4>
                            <p className="text-gray-500 mb-4">Nhấn vào nút bên dưới để xem tài liệu chi tiết</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                                onClick={() => window.open('https://drive.google.com/file/d/your-pdf-id/view', '_blank')}
                            >
                                Xem tài liệu PDF
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Project Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                >
                    {/* Project Overview */}
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tổng quan dự án</h3>
                        <p className="text-gray-600">Dự án sản xuất bột nha đam hữu cơ với quy trình hiện đại và chất lượng cao</p>
                    </div>

                    {/* Organization */}
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tổ chức</h3>
                        <p className="text-gray-600">Đội ngũ chuyên gia và nhân viên có kinh nghiệm trong lĩnh vực nông nghiệp hữu cơ</p>
                    </div>

                    {/* Technology */}
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Công nghệ</h3>
                        <p className="text-gray-600">Sử dụng công nghệ hiện đại trong quy trình sản xuất và đóng gói sản phẩm</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
