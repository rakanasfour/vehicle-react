# Use node 16 alpine as the base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install axios


# Copy the entire application code
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
