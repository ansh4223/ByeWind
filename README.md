# ByeWind Dashboard Application [Live Demo](https://bye-wind-nine.vercel.app/)

ByeWind is a modern React dashboard application with a clean UI featuring eCommerce analytics, order management, and interactive data visualizations.

![ByeWind Dashboard](./public/ByeWind.svg)

## 🚀 Getting Started

Follow these instructions to set up and run the ByeWind dashboard application on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher) or [Yarn](https://yarnpkg.com/) (v1.22 or higher)
- Git

### Installation

#### Step 1: Clone the repository

```bash
git clone https://github.com/ansh4223/ByeWind.git
cd ByeWind
```

#### Step 2: Install dependencies

Using npm:
```bash
npm install
```

Or using Yarn:
```bash
yarn install
```

> **Special Note:** If you encounter peer dependency issues with react-simple-maps, you may need to install it separately with the legacy-peer-deps flag:
> ```bash
> npm install react-simple-maps --legacy-peer-deps
> ```

This will install all the required packages defined in the `package.json` file, including:
- React 19.1.1
- Material UI 7.3.2
- Recharts 3.2.1
- React Router DOM 7.9.1
- Zustand 5.0.8
- And other dependencies

### Running the Application

#### Development Mode

To start the application in development mode:

```bash
npm start
```

Or using Yarn:
```bash
yarn start
```

This will:
- Start the development server
- Open the application at [http://localhost:3000](http://localhost:3000) in your default browser
- Enable hot reloading for real-time updates as you modify the code

#### Production Build

To create a production-optimized build:

```bash
npm run build
```

Or using Yarn:
```bash
yarn build
```

This will generate a `build` directory with optimized production files that you can deploy to a web server.

To serve the production build locally:

```bash
npx serve -s build
```

## 🧩 Features

- **Dashboard Analytics**: View key metrics like customers, orders, revenue, and growth
- **Interactive Charts**: Visualize data with line charts, donut charts, and projections
- **Order Management**: Browse, filter, and manage orders in a data table
- **Dark/Light Mode**: Toggle between theme preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Right Panel Features**: Activity feed, contacts, and notifications

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test` or `yarn test`

Launches the test runner in interactive watch mode

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you need to customize the configuration, you can eject from Create React App.

## 📁 Project Structure

```
src/
├── assets/          # Images and icons
├── components/      # Reusable UI components
├── data/            # Mock data for demonstration
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── store/           # Zustand state management
├── styles/          # Theme and global styles
└── utils/           # Helper functions
```

## 🔧 Technologies Used

- **React**: UI library for building the interface
- **Material UI**: Component library for consistent design
- **Zustand**: State management solution
- **React Router**: Navigation and routing
- **Recharts**: Data visualization charts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
