FROM kkarczmarczyk/node-yarn

# Prepare app directory
RUN mkdir -p /sandbox
WORKDIR /sandbox
ADD . /sandbox

# Install dependencies
RUN yarn
RUN yarn add --dev typescript
RUN npm rebuild node-sass

# Build the app
RUN npm run production

# Expose the app port
EXPOSE 4000