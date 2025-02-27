const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load biến môi trường

const JWT_SECRET = process.env.JWT_SECRET;

// Tạo JWT cho user
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, role: user.role }, // Payload
        JWT_SECRET,
        { expiresIn: '1h' } // Token hết hạn sau 1 giờ
    );
};

// Xác minh JWT
const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return null; // Trả về null nếu token không hợp lệ
    }
};

module.exports = { generateToken, verifyToken };
