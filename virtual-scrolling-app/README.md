# VirtualScrollingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

This project implements a virtual scrolling table using Angular. The table displays user data with columns such as `user_id`, `user_name`, `user_dob`, and `user_address`. Additional data can be loaded using a "Show More" button.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Table of Contents
1. [Project Description](#project-description)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Test Cases](#test-cases)
7. [Future Improvements](#future-improvements)
8. [Authors](#authors)


## Features

- Virtual scrolling with an Angular table
- "Show More" button to load additional data
- Bootstrap styling for a responsive and clean UI
- Dynamic data generation and display

## Technologies Used

- Angular
- Angular CDK
- Bootstrap
- TypeScript

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/virtual-scrolling-table.git
   cd virtual-scrolling-table

2. **Install dependencies**:

   Install dependencies:

3. **Run the application** :

ng serve

4. Access the application:

Open your browser and navigate to http://localhost:4200/.

5. Run Tests:

ng test



### 6. **Usage**
   - Explain how to use the application, what users should expect, and how they can interact with the table.

```markdown
## Usage

- When the application loads, a table with user data is displayed.
- The table initially loads 10 rows of data.
- Click the "Show More" button to load the next 10 rows.
- Data is dynamically generated and displayed in the table.

### Screenshots

Include screenshots if possible to provide a visual reference for the application.


## Test Cases

### 1. Initial Data Load
**Test**: Verify that the table initially loads 10 rows of data.
**Expected Outcome**: The table should display 10 rows when the application is first loaded.

### 2. "Show More" Button Click
**Test**: Verify that clicking the "Show More" button loads the next 10 rows of data.
**Expected Outcome**: The table should display 20 rows after the first click, 30 rows after the second click, and so on.

### 3. Table Data Structure
**Test**: Verify that each row in the table contains the correct data fields: `user_id`, `user_name`, `user_dob`, and `user_address`.
**Expected Outcome**: Each row should display the appropriate data for each column.

### 4. Dynamic Data Generation
**Test**: Verify that the dynamically generated data is unique and follows the expected format.
**Expected Outcome**: Each new row should have a unique `user_id` and corresponding data.

### 5. Responsive Design
**Test**: Verify that the table layout adjusts correctly on different screen sizes (e.g., mobile, tablet, desktop).
**Expected Outcome**: The table should be responsive and maintain its structure on all screen sizes.


## Future Improvements

- Implement infinite scrolling to replace the "Show More" button.
- Add sorting and filtering functionality to the table.
- Implement server-side pagination with real API data.
- Improve the UI with more advanced Bootstrap components.




