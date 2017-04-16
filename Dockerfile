FROM kkarczmarczyk/node-yarn

# Prepare app directory
RUN mkdir -p /sandbox
WORKDIR /sandbox
ADD . /sandbox

# Install dependencies
RUN yarn

# Build the app
RUN npm run build

# Expose the app port
EXPOSE 4000

# Start the app
CMD npm start