# Backend - Spring Boot

## Step 1: Clone the project from GitHub
- Unzip the project from GitHub to your local machine.
- Open the project in Eclipse or Spring Tool Suite (STS).

## Step 2: Run the Spring Boot application
- Right-click on the project.
- Select **Run As → Spring Boot App** to start the application.

## Step 3: Verify the server is running
- The application will now be running on port **8080**.
- You should see the Spring Boot banner in your console indicating the app is up and running.

## Step 4: Test the API
- Open your browser or Postman and navigate to: 
http://localhost:8080/romannumeral?query=3

- This will invoke the Roman numeral conversion API.

## Step 5: Run Unit Tests
- Navigate to the **src/test/java** folder where the test files are located.
- There are two test files: `RomanNumeralControllerTest` and `RomanNumeralConverterTest`.

## Step 6: Run `RomanNumeralControllerTest`
- Right-click on **RomanNumeralControllerTest**.
- Select **Run As → JUnit Test** to execute the test cases in this file.

## Step 7: Run `RomanNumeralConverterTest`
- Right-click on **RomanNumeralConverterTest**.
- Select **Run As → JUnit Test** to execute the test cases in this file.

---
# Application Monitoring and Logging

This application uses Spring Boot’s Actuator and logging capabilities to monitor its health, gather metrics, and log events. Below are the steps to test the health, metrics, and logging functionalities in your application.

### 1. Test Health Endpoint

The health endpoint allows you to check the overall health of the application. To test it:

- **URL**: `http://localhost:8080/actuator/health`
- Open a browser or use a tool like **Postman** to make a `GET` request to the above URL.

**Expected Response**:
```json
{
  "status": "UP"
}


# Frontend - React Setup

## Step 1: Open Terminal in Visual Studio Code
- Launch **Visual Studio Code**.
- Open the integrated terminal by navigating to **View → Terminal**.

## Step 2: Create a New React Application
- Run the following command to create a new React app:
npx create-react-app roman-numeral-converter


## Step 3: Install Dependencies
- Once the app is created, navigate to the project directory and install the required dependencies:

npm install @adobe/react-spectrum


## Step 4: Navigate to the Project Directory
- Change the directory to the newly created `roman-numeral-converter` project folder:

cd roman-numeral-converter


## Step 5: Update `App.js` and `App.css`
- Modify the `App.js` and `App.css` files located in the **src/** directory to implement your application logic and styling.
- Additionally, create a **Dockerfile** in the root directory of your project and add the necessary Docker configuration code.

## Step 6: Run the React Application
- Once the updates are made, start the development server by running:

npm start


## Step 7: Verify the React Application
- The React app will run and automatically open in your default browser.
- The server will be hosted on **localhost:3000**.

**Note**: Ensure that the React application runs on port **3000** since the backend is also configured to use port 3000.


# Docker Setup

## Docker Setup in Backend - Spring Boot

### Step 1: Create Dockerfile
- In the root directory of the **RomanNumeralApp** project, create a file named **Dockerfile**.

### Step 2: Build the Project with Maven
- Right-click on the project folder and select **Run As → Maven Build**.
- In the **Goals** field, enter:

clean install

- Click **Run** to build the project.

### Step 3: Verify Docker JAR File
- Once the build is complete, you will find the **docker jar file** in the **target/** directory.

### Step 4: Install Docker Desktop
- Make sure **Docker Desktop** is installed on your computer. If it's not installed, download and install it from the official Docker website.

### Step 5: Open Terminal and Navigate to Project Directory
- Open your terminal and navigate to the **RomanNumeralApp** project directory.

### Step 6: Build the Docker Image
- Run the following command to build the Docker image:

docker build -t roman-numeral-app .


### Step 7: Verify the Docker Image Build
- To confirm that the image was built successfully, run the following command:

docker run -p 8080:8080 roman-numeral-app


### Step 9: Access Your Application
- Once the container is running, you can access the application by opening your browser or using Postman or cURL to make a request to:

http://localhost:8080/romannumeral?query=3


### Step 10: Stop the Running Docker Container
- To stop the running container, first find the container ID by running:

docker ps

- Once you have the container ID, stop the container with:
docker stop <container_id>


- Optionally, after stopping the container, you can remove it using:

docker rm <container_id>


---

## Docker Setup in Frontend - React

### Step 1: Create Dockerfile for React App
- In the **Roman-Numeral-converter** project directory, create a file named **Dockerfile** and paste the necessary Docker configuration code.

### Step 2: Navigate to the React Project Directory
- Open a terminal and navigate to the **Roman-Numeral-converter** project directory.

### Step 3: Build the Docker Image
- Build the Docker image for the React app by running the following command:

docker build -t roman-numeral-frontend .


### Step 4: Run the Docker Container for React App
- After the Docker image has been built, run the container and map the ports using the following command:

docker run -p 3000:80 roman-numeral-frontend


### Step 5: Test the Frontend Application
- Once the container is running, you can access the frontend application in your browser at:

http://localhost:3000



