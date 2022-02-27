# Pull latest official node image
FROM node:16.14.0-bullseye

# Expose ports
EXPOSE 3000
EXPOSE 35729

# Set current user
USER $user

# Set working directory
WORKDIR /app

# Add /app/node_modules/.bin to environment variables
ENV PATH /app/node_modules/.bin:$PATH

# Copy package files and install app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts -g

# Add React app to working directory
ADD . /app

# Start the React app
CMD ["npm", "start"]
