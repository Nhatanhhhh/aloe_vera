import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ProductsSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tất cả', icon: '🌿' },
        { id: 'fresh', name: 'Tươi', icon: '🥬' },
        { id: 'processed', name: 'Chế biến', icon: '🧴' },
        { id: 'cosmetics', name: 'Mỹ phẩm', icon: '💄' }
    ];

    const products = [
        {
            id: 1,
            name: 'Nha đam tươi nguyên lá',
            category: 'fresh',
            image: '🌱',
            description: 'Nha đam tươi 100% tự nhiên, không chất bảo quản',
            price: '25,000đ/kg',
            benefits: ['Làm mát cơ thể', 'Tăng cường miễn dịch', 'Làm đẹp da'],
            rating: 4.9,
            reviews: 128
        },
        {
            id: 2,
            name: 'Gel nha đam nguyên chất',
            category: 'processed',
            image: '🧴',
            description: 'Gel nha đam 99% nguyên chất, an toàn cho da',
            price: '45,000đ/chai',
            benefits: ['Dưỡng ẩm da', 'Làm dịu vết thương', 'Chống lão hóa'],
            rating: 4.8,
            reviews: 95
        },
        {
            id: 3,
            name: 'Mặt nạ nha đam',
            category: 'cosmetics',
            image: '💄',
            description: 'Mặt nạ nha đam tự nhiên, phù hợp mọi loại da',
            price: '35,000đ/túi',
            benefits: ['Làm sạch da', 'Thu nhỏ lỗ chân lông', 'Cấp ẩm sâu'],
            rating: 4.7,
            reviews: 76
        },
        {
            id: 4,
            name: 'Nước ép nha đam',
            category: 'processed',
            image: '🥤',
            description: 'Nước ép nha đam tươi, bổ sung vitamin và khoáng chất',
            price: '30,000đ/chai',
            benefits: ['Giải nhiệt', 'Thanh lọc cơ thể', 'Tăng cường sức khỏe'],
            rating: 4.6,
            reviews: 89
        },
        {
            id: 5,
            name: 'Kem dưỡng nha đam',
            category: 'cosmetics',
            image: '🧴',
            description: 'Kem dưỡng da mặt với chiết xuất nha đam tự nhiên',
            price: '65,000đ/tuýp',
            benefits: ['Dưỡng ẩm 24h', 'Chống nắng', 'Làm mờ vết thâm'],
            rating: 4.8,
            reviews: 112
        },
        {
            id: 6,
            name: 'Nha đam sấy khô',
            category: 'processed',
            image: '🍃',
            description: 'Nha đam sấy khô tự nhiên, bảo quản lâu dài',
            price: '40,000đ/túi',
            benefits: ['Dễ bảo quản', 'Giữ nguyên dưỡng chất', 'Đa dạng sử dụng'],
            rating: 4.5,
            reviews: 67
        }
    ];

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    return (
        <section id="products" ref={ref} className="py-20 bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Bộ Sưu Tập Sản Phẩm
                        <span className="block text-green-600">Nha Đam Chất Lượng</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Khám phá các sản phẩm nha đam đa dạng, từ nguyên liệu tươi đến các sản phẩm chế biến cao cấp
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md hover:shadow-lg'
                            }`}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            {/* Product Image */}
                            <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                                <motion.div
                                    className="text-6xl"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {product.image}
                                </motion.div>
                                
                                {/* Rating Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                                    <span className="text-yellow-500">⭐</span>
                                    <span className="text-sm font-medium">{product.rating}</span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                
                                {/* Benefits */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Lợi ích:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {product.benefits.map((benefit, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                                            >
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Price and Reviews */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                                    <span className="text-sm text-gray-500">{product.reviews} đánh giá</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 cursor-pointer"
                                    >
                                        Xem chi tiết
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 border border-green-500 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-all duration-300 cursor-pointer"
                                    >
                                        ❤️
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">Quan tâm đến sản phẩm của chúng tôi?</h3>
                        <p className="text-xl mb-6 opacity-90">
                            Liên hệ ngay để được tư vấn và đặt hàng sản phẩm nha đam chất lượng cao
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            Liên hệ ngay
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
