This repository contains a React application that demonstrates the use of the custom `useToast` hook, which simplifies displaying success, error, and promise notifications using the `react-hot-toast` library.

### Key Features:
- **useToast Hook:** Provides three main functions for displaying toasts:
  - `toastSuccess(message)`: Displays a success notification.
  - `toastError(message)`: Displays an error notification.
  - `toastPromise(promise, loading, success, error)`: Displays a notification based on the state of a promise.

- **Reusable Components:** The project includes reusable components such as `Title`, `Button`, and `ButtonsContainer`, which make up the user interface.

- **Asynchronous Notifications:** Demonstrates the use of toasts for asynchronous promises, displaying loading, success, or error messages depending on the outcome of the promise.

### Project Structure:
- **`components/`:** Contains reusable UI components.
- **`hooks/`:** Contains the `useToast` hook for managing notifications.
- **`styles/`:** Includes global styles for the application.

### How to Use:
- Clone the repository and install the dependencies or access the [CodeSandbox](https://codesandbox.io/) link.
- Run the application and interact with the buttons to see the different types of notifications in action.

This project is ideal for learning and applying the use of toasts effectively in React applications.