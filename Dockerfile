# Используем официальный Node.js образ
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект
COPY . .

# Строим проект
RUN npm run build

# Используем nginx для раздачи статичных файлов
FROM nginx:alpine

# Копируем билд из предыдущего шага
COPY --from=build /app/build /usr/share/nginx/html

# Экспонируем порт 80
EXPOSE 80

# Настроим Nginx для SPA
CMD ["nginx", "-g", "daemon off;"]