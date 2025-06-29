# Windows Calendar App

A modern, interactive calendar application built with React and Redux, featuring month/year navigation and a clean user interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Testing](#testing)
- [Configuration](#configuration)
- [Components](#components)
- [Redux State Management](#redux-state-management)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## 📅 Overview

This is a fully functional calendar application that allows users to navigate through different months and years. The application displays the current date prominently and provides an intuitive interface for browsing past and future dates. Built with modern React patterns and Redux for state management.

## ✨ Features

- **Interactive Calendar Display**: View calendar with proper date alignment
- **Month Navigation**: Navigate between months using arrow controls
- **Year Selection**: Switch between different years
- **Current Date Highlighting**: Shows today's date prominently
- **Responsive Design**: Works on different screen sizes
- **State Persistence**: Calendar state managed through Redux
- **Testing Suite**: Comprehensive test coverage with Jest and React Testing Library

## 🛠 Technology Stack

- **Frontend Framework**: React 18.2.0
- **State Management**: Redux 4.2.1 with React-Redux 8.0.5
- **Bundler**: Parcel 2.8.3
- **Testing**: Jest 30.0.3 with React Testing Library
- **Styling**: CSS3 with Google Fonts (Lilita One)
- **Build Tools**: Babel with JSX and ES6+ support

## 📁 Project Structure

```
Windows_Calender/
├── App.js                          # Main application component
├── index.html                      # HTML entry point
├── package.json                    # Project dependencies and scripts
├── babel.config.js                 # Babel configuration
├── jest.config.js                  # Jest testing configuration
├── constant.js                     # Application constants
├── style.css                       # Global styles
├── Component/
│   ├── utils.js                    # Utility functions
│   ├── utils.test.js              # Utility tests
│   ├── Card/
│   │   ├── Card.js                # Main calendar card component
│   │   ├── Card.test.jsx          # Card component tests
│   │   └── CardStyle.css          # Card component styles
│   └── DisplayOption/
│       ├── DisplayOption_Style.css # Display option styles
│       ├── Months.js              # Month selection component
│       ├── MonthsDate.js          # Month date display component
│       ├── TitleBar.js            # Title bar component
│       └── Year.js                # Year selection component
└── redux/
    ├── action.js                  # Redux action creators
    ├── Reducer.js                 # Redux reducer
    └── Store.js                   # Redux store configuration
```

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Windows_Calender
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:1234
   ```

## 🎯 Usage

### Basic Navigation

1. **Toggle Calendar**: Click the arrow button in the title bar to show/hide the calendar
2. **Navigate Months**: Use the left and right arrow buttons to move between months
3. **Select Month**: Click on the month name to open month selection view
4. **Select Year**: Navigate to year selection to choose different years
5. **Current Date**: The current date is highlighted and displayed in the title bar

### Calendar Views

- **Date View**: Default calendar view showing the current month's dates
- **Month View**: Grid view of all 12 months for quick selection
- **Year View**: Interface for selecting different years

## 📜 Scripts

Available npm scripts:

```bash
# Start development server
npm start

# Run tests
npm test

# Install dependencies
npm install
```

## 🧪 Testing

The project includes a comprehensive testing suite using Jest and React Testing Library.

### Running Tests

```bash
npm test
```

### Test Configuration

- **Test Environment**: jsdom (for DOM testing)
- **Setup**: @testing-library/jest-dom for custom matchers
- **Transform**: Babel Jest for JS/JSX files
- **CSS Mocking**: identity-obj-proxy for CSS imports

### Test Files

- `Component/utils.test.js` - Utility function tests
- `Component/Card/Card.test.jsx` - Calendar card component tests

## ⚙️ Configuration

### Babel Configuration

The project uses Babel for JavaScript transpilation:

- **@babel/preset-env**: For modern JavaScript features
- **@babel/preset-react**: For JSX transformation with automatic runtime

### Parcel Configuration

Parcel is used as the bundler with the following features:

- **Hot Module Replacement**: Automatic page refresh on changes
- **Asset Processing**: Handles CSS, images, and other assets
- **Development Server**: Built-in development server

## 🧩 Components

### Core Components

#### `App.js`
- Main application component
- Sets up Redux provider
- Renders title bar and calendar card

#### `TitleBar.js`
- Displays current date
- Toggle button for calendar visibility
- Uses Redux for state management

#### `Card.js`
- Main calendar display component
- Handles month navigation
- Manages calendar view states (date/month/year)

#### `MonthsDate.js`
- Renders individual dates in calendar grid
- Handles date selection logic

#### `Months.js`
- Month selection interface
- Grid view of all 12 months

#### `Year.js`
- Year selection component
- Allows navigation to different years

### Utility Components

#### `utils.js`
- Contains utility functions for date calculations
- Helper functions for calendar logic

## 🔄 Redux State Management

### State Structure

```javascript
{
  isOpen: boolean,        // Calendar visibility
  pageType: string,       // Current view ('date', 'month', 'year')
  month: number,          // Current month (0-11)
  year: number           // Current year
}
```

### Actions

- **DISPLAY_OPTION**: Toggle calendar visibility
- **PAGE_CHANGE**: Switch between different views
- **CHANGE_DATE**: Update current month and year

### Reducer

The reducer handles all state changes and maintains calendar state consistency.

## 🎨 Styling

### CSS Architecture

- **Global Styles**: `style.css` for application-wide styling
- **Component Styles**: Individual CSS files for each component
- **Google Fonts**: Lilita One font for enhanced typography

### Design Features

- **Modern UI**: Clean and intuitive interface
- **Responsive**: Adapts to different screen sizes
- **Animations**: Smooth transitions and hover effects
- **Color Scheme**: Professional color palette

## 📦 Dependencies

### Production Dependencies

- **react**: ^18.2.0 - Core React library
- **react-dom**: ^18.2.0 - React DOM rendering
- **react-redux**: ^8.0.5 - React bindings for Redux
- **redux**: ^4.2.1 - State management library
- **jest**: ^30.0.3 - Testing framework
- **jest-environment-jsdom**: ^30.0.2 - DOM testing environment
- **@testing-library/jest-dom**: ^6.6.3 - Custom Jest matchers

### Development Dependencies

- **@babel/core**: ^7.27.7 - Babel transpiler core
- **@babel/preset-env**: ^7.27.2 - Babel preset for modern JS
- **@babel/preset-react**: ^7.27.1 - Babel preset for React
- **@testing-library/react**: ^13.4.0 - React testing utilities
- **babel-jest**: ^30.0.2 - Babel Jest transformer
- **identity-obj-proxy**: ^3.0.0 - CSS module mocking
- **parcel**: ^2.8.3 - Application bundler
- **process**: ^0.11.10 - Process polyfill
- **redux-mock-store**: ^1.5.5 - Redux store mocking for tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Write tests for new components
- Use consistent code formatting
- Update documentation for new features

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Akash Verma**

---

## 🚀 Getting Started Quickly

For a quick start:

```bash
# Clone, install, and run
git clone <repository-url>
cd Windows_Calender
npm install
npm start
```

The application will be available at `http://localhost:1234`

## 📞 Support

If you encounter any issues or have questions, please check the existing issues or create a new one in the project repository.

---

**Happy Coding! 📅✨**
