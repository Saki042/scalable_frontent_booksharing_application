# Use official Node.js image as the base image
FROM node:14-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code to the working directory
COPY . .

# Build the React app
# RUN npm run build

# Expose port 80 to the outside world
EXPOSE 3000

# Start nginx server
CMD ["npm", "start"]
