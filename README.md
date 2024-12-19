# Getting Started

## Installation

1. **Close the repository**
    
    ```bash
    git clone https://github.com/hicass/data-viz-platform.git <desired-directory-name>
    ```
    
2. **Install the dependencies**
    
    ```bash
    npm i
    ```
    
3. **Run the development server**
    
    ```bash
    npm run dev
    ```
    

## Configuration

Environment variables are required to connect to Firebase for authentication:

- `VITE_FIREBASE_API_KEY` - Your Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN` - Your Firebase Auth Domain
- `VITE_FIREBASE_PROJECT_ID` - Your Firebase Project ID
- `VITE_FIREBASE_STORAGE_BUCKET` - Your Firebase Storage Bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID` - Your Firebase Messaging Sender ID
- `VITE_FIREBASE_APP_ID` - Your Firebase App ID
- `VITE_FIREBASE_MEASUREMENT_ID` - Your Firebase Measurement ID

You will need to set up a Firebase project to retrieve these keys. Once the project is created, you can find the keys in your project’s settings under the **"Your apps"** section, specifically in **SDK setup and configuration**.

Place these variables in a `.env` file:

```jsx
// .env

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_domain
```

<br />

# Features Implemented

- Google OAuth Authentication via Firebase.
- Navigation Bar positioned on the right side.
- Dashboard Screen:
  - A view controller nav bar at the top, along with a search bar.
  - Best Scenario Results section with reusable scenario result cards.
  - Graph Section featuring an interactive graph.
  - Key Performance Indicator Section with reusable performance cards.
- Variable Panel:
  - Slides out when the "Edit Variables" button on the dashboard is clicked.
  - A search bar for users to easily find variables.
  - A variable category card displaying various categories of variables.
  - Functionality allowing users to select multiple variables.
  - Hovering over a variable selector for 1.5 seconds reveals a context window with detailed information about the variable.
- Simple Authentication Page.
- Simple Profile Page.
- Responsive Design to ensure compatibility across devices.

<br />

# Technical Decisions and Trade-Offs

- I opted for `useState` for state management instead of integrating a dedicated package, prioritizing speed and efficient design implementation, which accounts for 40% of the evaluation criteria. Using `useState` streamlined the development process by eliminating the need to configure or implement an additional package. While it serves as a practical and efficient temporary solution for the app's current simplicity, incorporating a state management library like Redux in the future would provide a more robust and scalable way to manage and update the application's state.
- The `nivo` package was used to implement the graph, primarily to expedite the development process. As it was my first experience with graph implementation, additional time was required to familiarize myself with the documentation. While `nivo` effectively facilitated quick integration, its customization options are  limited, for instance, the tooltip is not easily customizable. Given more time, I would consider switching to a different library, such as MUI, which offers a line graph component with greater customization options, including a customizable tooltip.
- Tailwind CSS was incorporated to accelerate the development process and ensure consistency in design. Initially, I started creating custom Tailwind color themes to enforce uniformity and improve codebase maintainability, as this would simplify updating colors in the future. However, I discovered that the design wireframe utilized over 35 colors. To prioritize speed, I opted to use arbitrary values throughout the codebase instead. Similarly, font sizes rely on Tailwind's default text sizes. Introducing a design system with custom Tailwind rules for color naming and font sizing would enhance maintainability and scalability, making this a potential area for future refactoring and improvement.

<br />

# Limitations

- The values for the Key Performance Card are currently stored as strings, which prevents direct numerical operations. A potential improvement would involve converting these values into numbers and adding a mechanism to specify their type, whether they represent a percentage, a standard number, or a currency amount. This enhancement would make the data more versatile and easier to work with in various contexts.
- Currently, mapped item keys are based on their index (`idx`) number, which may lead to potential issues in the future, such as incorrect re-renders or loss of performance when the list changes dynamically. A better approach would be to use unique identifiers for keys to ensure stability and maintainability.
- Currently, authentication is only available through Google OAuth.
- Using `useState` for state management can lead to inefficiencies as the application's scope and complexity grow.
- The current implementation of colors and font sizes using Tailwind CSS makes the codebase harder to maintain.
- Due to time constraints, edge cases have not been handled properly.

<br />

# Time Spent

Until MVP was reached:  **11.04 hours**

Total: **14.43 hours**