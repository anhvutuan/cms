# CMS Project

cms/
│── backend/              # 📂 Thư mục backend (Node.js + MariaDB)
│   │── node_modules/     # 📂 Thư viện npm (tự động tạo khi chạy `npm install`)
│   │── .env              # 🔧 Cấu hình biến môi trường (MariaDB, JWT secret)
│   │── package.json      # 📄 Thông tin dependencies của Node.js
│   │── package-lock.json # 📄 Khóa phiên bản npm
│   │── server.js         # 🚀 Server Express xử lý API
│   │── database.js       # 🔗 Kết nối MariaDB
│   ├── routes/           # 📂 Chứa các route API
│   │   ├── auth.js       # 📄 Xử lý đăng ký, đăng nhập
│   │   ├── users.js      # 📄 Quản lý người dùng
│   ├── models/           # 📂 Chứa các model database
│   │   ├── userModel.js  # 📄 Định nghĩa bảng users trong MariaDB
│   ├── middleware/       # 📂 Chứa các middleware (xác thực, phân quyền)
│   │   ├── authMiddleware.js # 🔑 Kiểm tra token JWT
│   ├── utils/            # 📂 Chứa các hàm tiện ích
│   │   ├── bcryptHelper.js  # 🔑 Mã hóa mật khẩu
│   │   ├── jwtHelper.js     # 🔑 Xử lý JWT
│   ├── README.md         # 📄 Hướng dẫn sử dụng backend
│
│── frontend/             # 📂 Thư mục frontend (React)
│   │── node_modules/     # 📂 Thư viện npm của React
│   │── public/           # 📂 Chứa file tĩnh (favicon, index.html)
│   │── src/              # 📂 Code React
│   │   ├── components/   # 📂 Chứa các component giao diện
│   │   │   ├── Navbar.js     # 📄 Thanh điều hướng
│   │   │   ├── PrivateRoute.js # 🔒 Bảo vệ route cần đăng nhập
│   │   ├── context/      # 📂 Quản lý state toàn cục
│   │   │   ├── AuthContext.js  # 📄 Xác thực người dùng
│   │   ├── pages/        # 📂 Các trang chính
│   │   │   ├── Home.js       # 🏠 Trang chủ
│   │   │   ├── Login.js      # 🔑 Đăng nhập
│   │   │   ├── Register.js   # 📝 Đăng ký
│   │   │   ├── Dashboard.js  # 📊 Trang quản lý (Admin/Writer)
│   │   ├── App.js        # 🚀 Thành phần chính của ứng dụng React
│   │   ├── index.js      # 🏁 File khởi động React
│   │   ├── api.js        # 🔗 Gửi request đến backend
│   ├── .env              # 🔧 Cấu hình biến môi trường frontend
│   ├── package.json      # 📄 Thông tin dependencies React
│   ├── package-lock.json # 📄 Khóa phiên bản npm
│   ├── README.md         # 📄 Hướng dẫn sử dụng frontend
│
│── .gitignore            # 🛑 Bỏ qua file không cần push lên GitHub
│── README.md             # 📄 Hướng dẫn chung

