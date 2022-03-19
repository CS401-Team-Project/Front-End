# Pull latest official node image
FROM node:16.14.0-bullseye

# Set working directory
WORKDIR /app

COPY package*.json ./

RUN npm install react-scripts -g
RUN npm install

COPY . .

# Expose ports
EXPOSE 3000
EXPOSE 35729

# Start the React app
CMD ["npm", "start"]
