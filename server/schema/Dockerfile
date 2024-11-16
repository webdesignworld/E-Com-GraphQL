# Base image
FROM node


# Set the working directory inside the container
WORKDIR /home/app

# Install dependencies
RUN npm install


# Copy package.json and package-lock.json files
COPY package*.json ./


# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Command to run your application
CMD ["npm", "start"]
