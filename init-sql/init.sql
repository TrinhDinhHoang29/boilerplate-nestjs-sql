-- Tên file: init-sql/init.sql

-- PostgreSQL sẽ tự động tạo user (task_user) và database (task_db)
-- dựa trên các biến môi trường POSTGRES_USER và POSTGRES_DB trong docker-compose.yml.

-- Tuy nhiên, nếu bạn muốn đảm bảo, bạn có thể thêm các lệnh này:

-- 1. TẠO DATABASE (Nếu không tồn tại, nhưng thường đã được tạo bởi POSTGRES_DB)
-- Lệnh CREATE DATABASE chỉ chạy nếu database chưa được tạo.
SELECT 'CREATE DATABASE task_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'task_db')\gexec

-- 2. TẠO SCHEMA MẶC ĐỊNH (Không bắt buộc, nhưng tốt cho tổ chức)
\c task_db -- Kết nối tới database vừa tạo

-- Tạo schema 'public' nếu nó bị xóa hoặc tạo schema mới nếu muốn
CREATE SCHEMA IF NOT EXISTS public;

-- Đảm bảo quyền truy cập cho user task_user
-- User này được tạo tự động khi container khởi động (POSTGRES_USER)
GRANT ALL PRIVILEGES ON DATABASE task_db TO task_user;
GRANT ALL ON SCHEMA public TO task_user;

-- CHÚ Ý:
-- Nếu bạn đang sử dụng biến môi trường POSTGRES_USER và POSTGRES_DB trong Docker Compose,
-- bạn không cần phải TẠO USER và DATABASE trong script này.
-- PostgreSQL Docker image tự động tạo chúng dựa trên biến môi trường.

-- Script này chủ yếu để chạy các lệnh cấu hình sau khi DB đã được tạo
-- hoặc để thêm dữ liệu khởi tạo ban đầu.