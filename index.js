const express = require('express');
const app = express();
const port = 3000;

// Cấu hình để phục vụ file tĩnh từ thư mục 'public'
app.use(express.static('public'));

// Route chính
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);

        });
