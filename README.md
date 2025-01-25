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

# Additional Instructions for Good Documentation:

## 1. Specifications for Roman Numerals
- Reference the [Wikipedia page for Roman Numerals](https://en.wikipedia.org/wiki/Roman_numerals) for a clear definition of how Roman numerals work and their rules.

## 2. Provide Detailed Documentation
- **README.md**: 
- **How to build and run your project**: Clearly explain the setup process.
- **Your engineering and testing methodology**: Provide insights on how the application is structured and tested.
- **Your packaging layout**: Describe the folder and file structure of your project.
- **Dependency attribution**: List any third-party libraries or tools used.
- **Inline documentation** in your source code:
- Add comments within your code to clarify logic and key sections.

## 3. Error Handling
- Ensure proper error handling is implemented in your application. Handle common error scenarios (e.g., invalid input, service failures) and provide clear, informative responses to the user.
