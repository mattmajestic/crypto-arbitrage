# Stage 1: Build the Angular app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Add the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Expose port 4200 for the http-server
EXPOSE 4200

# Start http-server
CMD ["npm","start"]
