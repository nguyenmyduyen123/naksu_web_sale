# Sử dụng image node chính thức
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /app


# Sao chép package.json và package-lock.json để cài đặt các dependencies trước
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc trong container
COPY . .

# Biên dịch ứng dụng Next.js
RUN npm run build

# Thiết lập biến môi trường
ENV NODE_ENV=production

# Expose port 3000 (mặc định Next.js chạy trên cổng này)
EXPOSE 3000

# Chạy ứng dụng Next.js
CMD ["npm", "start"]
