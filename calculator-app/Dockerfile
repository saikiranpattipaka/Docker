# Use the official Nginx base image
FROM nginx:alpine

# Remove default static files (optional, for clarity)
RUN rm -rf /usr/share/nginx/html/*

# Copy your static website files (HTML, CSS, JS)
COPY . /usr/share/nginx/html

# Expose the default Nginx HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
