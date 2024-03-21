# Mini E-commerce Project

## Project Documentation

Welcome to the Mini E-commerce Project! This project is a simple web application that allows users to browse a list of products, add them to a shopping cart, and proceed to checkout. Below you'll find setup instructions, a feature list, and an architectural overview of the application.

### Setup Instructions

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
Navigate to the project directory: cd mini-ecommerce-project
Install dependencies using npm: npm install
Start the development server: npx nuxt dev


Open your browser and visit http://localhost:3000 to view the application.

Features

View a list of products with images, titles, and prices.
Add products to a shopping cart.
Adjust quantities and remove items from the cart.
Search for products by name.
Filter products by category or price range.
Click on a product to view more details.
Simple checkout form for entering payment and shipping information.

Architecture Overview
The application is built using Nuxt.js for the frontend. Here's an overview of the project structure:

src/components: Contains Vue components for the product list, shopping cart, product details modal, and checkout form.
src/views: Contains the main views of the application, such as the product list page.
src/store: Contains Vuex store modules for managing state related to the shopping cart.
The application fetches product data from the Fake Store API and uses Vuex for state management. Routing is handled using Vue Router.

Technologies Used
Nuxt.js
HTML/CSS
