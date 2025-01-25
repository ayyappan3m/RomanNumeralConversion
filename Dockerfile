# Step 1: Build the React app
FROM node:16-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the React app
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the React app port
EXPOSE 3000

# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
