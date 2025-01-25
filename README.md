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

