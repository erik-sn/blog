FROM kkarczmarczyk/node-yarn

# Prepare app directory
RUN mkdir -p /project
WORKDIR /project
ADD . /project

# Install dependencies
RUN yarn

# Build the app
RUN npm build

# Expose the app port
EXPOSE 4000

# Start the app
CMD npm start