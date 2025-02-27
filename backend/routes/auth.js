const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwtHelper');
const crypto = require('crypto'); //
const pool = require('../database'); // Kết nối DB

const router = express.Router();

// Đăng ký người dùng
router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Email đã tồn tại!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userId = crypto.randomUUID();
        await pool.query(
            'INSERT INTO users (id, username, email, password, role) VALUES (?, ?, ?, ?, ?)',
            [userId, username, email, hashedPassword, role || 'reader']
        );

        res.status(201).json({ message: 'Đăng ký thành công!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server!' });
    }
});

// Đăng nhập người dùng
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (users.length === 0) {
            return res.status(401).json({ message: 'Email không tồn tại!' });
        }

        const user = users[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Mật khẩu không chính xác!' });
        }

        // Tạo JWT
        const token = generateToken({ id: user.id, role: user.role });

        res.json({ message: 'Đăng nhập thành công!', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server!' });
    }
});

module.exports = router;
