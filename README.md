# Extensions

This project includes the implementation of the following extensions as per the requirements:

---

### **Extension 1**: Expand the Range of Numbers to 1–3999

- The Roman Numeral Converter API has been updated to handle a broader range of input values, from `1` to `3999`.
- Proper validations are implemented to handle edge cases (e.g., input out of range, invalid input types) with detailed exception handling.
- **Test Cases**: Unit tests and Integration tests are added to verify the conversion for valid and invalid inputs.

---

### **Extension 2**: Create a Simple React App for the Roman Numeral API

The React frontend is designed to interact seamlessly with the Roman Numeral API and includes the following features:
- **Input Field**: Allows users to enter a number.
- **Button**: Triggers the API call to convert the input number to Roman numerals.
- **Display Field**: Shows the converted Roman numeral output.
- **Light and Dark Modes**: Provides a toggle to switch between light and dark themes for better user experience.

**Technology Used**:
- The application uses a UI component library for faster development:
  - **Library Justification**: [Your chosen library justification: e.g., used before, quick to bootstrap, recommended, etc.]
- The application ensures cross-origin communication between the React frontend (running on `localhost:3000`) and the Spring Boot backend (running on `localhost:8080`) by enabling **CORS**.

**Testing**:
- Thorough integration testing ensures the React frontend works correctly with the backend API.
- Mock test cases are included to verify individual frontend and backend behaviors.

---

### **Extension 3**: DevOps Capabilities for Production Readiness

The project includes additional DevOps features to facilitate production deployment, monitoring, and logging.

#### **1. Docker Integration**
- The application is containerized with Docker for easy deployment.
- **Backend Dockerfile**: Builds a Spring Boot application as a runnable container.
- **Frontend Dockerfile**: Builds the React application and serves it using Nginx.


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

- **Description**: The health endpoint checks the overall health of the application.
- **Steps**:
  1. Start your application.
  2. Open a browser or a tool like Postman.
  3. Make a `GET` request to the following URL:
     ```
     http://localhost:8080/actuator/health
     ```
  4. The expected response is:
     ```json
     {
       "status": "UP"
     }
     ```

---
### 2. Test Metrics Endpoint

- **Description**: The metrics endpoint provides detailed metrics about the application, such as memory usage, CPU usage, garbage collection, and more.
- **Steps**:
  1. Start your application.
  2. Open a browser or a tool like Postman.
  3. Make a `GET` request to the following URL:
     ```
     http://localhost:8080/actuator/metrics
     ```
  4. The expected response includes a list of metric names, like:
     ```json
     {
       "names": [
         "jvm.memory.used",
         "system.cpu.usage",
         "http.server.requests",
         "jvm.gc.pause",
         "jvm.memory.max",
         "jvm.memory.committed"
       ]
     }
     ```

---

### 3. Test Logs Locally

#### a. Console Logs
- **Description**: Logs will appear in the console during application runtime.
- **Steps**:
  1. Start your application.
  2. Trigger application events (e.g., make a request to `/romannumeral?query=5`).
  3. View the logs in the console. Example:
     ```
     2025-01-24 10:23:45 - INFO - Incoming request to convert number 5 to Roman numeral
     2025-01-24 10:23:45 - DEBUG - Conversion successful, Roman numeral: V
     ```

#### b. Log Files
- **Description**: Logs are saved to a file for persistent storage.
- **Steps**:
  1. Check the `logs/application.log` file in your project directory.
  2. Open the file to inspect logs. Example:
     ```
     2025-01-24 10:23:45 - INFO - Incoming request to convert number 5 to Roman numeral
     2025-01-24 10:23:45 - DEBUG - Conversion successful, Roman numeral: V
     ```

---

### 4. Logging Levels

- **Description**: Different logging levels capture varying degrees of detail. You can configure the levels in your `application.properties` or `application.yml` file.
- **Logging Levels**:
  - **INFO**: For general application flow.
    - Example: `Application started successfully.`
  - **DEBUG**: For more granular debugging details.
    - Example: `Incoming request to /romannumeral with query=5.`
  - **ERROR**: For logging critical issues or exceptions.
    - Example: `Failed to convert query to Roman numeral.`
- **Usage**:
  - Modify logging levels in `application.properties`:
    ```
    logging.level.org.springframework=DEBUG
    logging.level.com.example=INFO
    ```
  - Restart the application to apply changes.

---

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

## Step 4: Install Dependencies - web-virals

npm install web-vitals

## Step 5: Navigate to the Project Directory
- Change the directory to the newly created `roman-numeral-converter` project folder:

cd roman-numeral-converter


## Step 6: Update `App.js` and `App.css`
- Modify the `App.js` and `App.css` files located in the **src/** directory to implement your application logic and styling.
- Additionally, create a **Dockerfile** in the root directory of your project and add the necessary Docker configuration code.

## Step 7: Run the React Application
- Once the updates are made, start the development server by running:

npm start


## Step 8: Verify the React Application
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



