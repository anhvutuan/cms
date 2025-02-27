require('dotenv').config(); // Nạp biến môi trường từ .env
const express = require('express');
const cors = require('cors');
const pool = require('./database'); // Kết nối MariaDB
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json()); // Middleware xử lý JSON
app.use(cors()); // Kích hoạt CORS để React frontend có thể gọi API

// Kiểm tra kết nối MariaDB
pool.getConnection()
    .then(conn => {
        console.log('✅ Kết nối MariaDB thành công');
        conn.release();
    })
    .catch(err => {
        console.error('❌ Lỗi kết nối MariaDB:', err);
        process.exit(1); // Thoát nếu không thể kết nối database
    });

// Routes
app.use('/auth', authRoutes);

// Xử lý lỗi toàn cục
app.use((err, req, res, next) => {
    console.error('Lỗi Server:', err);
    res.status(500).json({ message: 'Lỗi server!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
