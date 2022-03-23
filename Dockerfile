############################################################
#                          NODE                            #
############################################################
# Pull latest official node image
FROM node:16.14.0-alpine
# Set environment variables
ENV PATH /app/node_modules/.bin:$PATH
RUN ls -al

# Set working directory and copy local contents
WORKDIR /app
COPY ./ ./
RUN ls -al
RUN chown -R node:node /app
RUN ls -al

# Switch user to node and install dependencies
USER node
RUN npm install

# Expose ports
EXPOSE 3000
EXPOSE 35729

# Start the React application
CMD ["npm", "start"]