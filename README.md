
# 🛍️ PERN Product Store

A full-stack **Product Store** application built using the **PERN Stack** (PostgreSQL, Express.js, React, Node.js). Users can view, add, update, and delete products in the store, with persistent data storage in PostgreSQL.

## 🚀 Live Demo

Check out the live demo here: [https://pern-product-store-fjyb.onrender.com/](https://pern-product-store-fjyb.onrender.com/)

## 📸 Screenshots

**🖥️ Chat Interface**  
![Chat Interface](chat_ui.png)

**🔐 Login Page**  
![Login Interface](login_ui.png)

**📝 Register**  
![Register Interface](signup_ui.png)

## ✨ Features

- 🏪 **Product List:** View all products available in the store.

- ✍️ **Create Product:** Admins can add new products to the store.

- ✏️ **Update Product:** Admins can update existing products.

- ❌ **Delete Product:** Admins can remove products from the store.

- 🎨 **Theme Customization:** Switch between light and dark themes.

- 📦 **RESTful API** for handling product data operations.

- 🔄 **Persistent Data** stored in PostgreSQL.

**Frontend:**

- React
- React Router
- TailwindCSS
- React Hot Toast

**Backend:**

- Node.js
- Express.js
- PostgreSQL
- JWT Authentication (for admin routes)

## 📁 Project Structure

```bash
pern-product-store/
├── backend/           # Express + PostgreSQL API
│   ├── controllers/   # Logic for product CRUD
│   ├── models/        # Sequelize models for products
│   ├── routes/        # API routes for products
│   ├── middlewares/   # Authentication and other middlewares
│   └── config/        # Database and app config
├── frontend/          # React + TailwindCSS + State Management
│   ├── components/    # Reusable UI components (Navbar, etc.)
│   ├── pages/         # Home and Product pages
│   ├── store/         # Theme and other global states
│   └── App.jsx        # Main component with routing
└── package.json       # Project dependencies and scripts
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/melos-simeneh/pern-product-store.git
cd pern-product-store
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a .env file in the backend folder:

```ini
NODE_ENV=development
PORT=3000
PG_URL=
```

Start the backend server:

```bash
npm run dev
```

The backend server  will be available at [http://localhost:3000](http://localhost:3000)

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will be running at [http://localhost:5173](http://localhost:5173)

### ⚙️ Other way to run the app

Local Development

```bash
# Install dependencies and start both frontend and backend
npm install
npm run start
```

This will start the backend server using the backend/start script.

Build for Production

```bash
npm run build
```

This installs all dependencies in both frontend and backend and builds the React app.

## 🔌 How it Works

- **Product Operations:** The app supports basic CRUD (Create, Read, Update, Delete) operations for products through a RESTful API.

  - **GET** `/products`: Retrieves all products.

  - **POST** `/products`: Creates a new product.

  - **GET** `/products/:id`: Retrieves a specific product by ID.

  - **PUT** `/products/:id`: Updates a specific product by ID.

  - **DELETE** `/products/:id:` Deletes a specific product by ID.

- **Frontend:**

  - **HomePage** shows a list of products with options to add and modify (admin only).

  - **ProductPage** displays individual product details.

  - **Navbar** includes theme switching functionality and navigation.

- **Admin Authentication:** For modifying products, admins can authenticate using JWT tokens.

## 🧑‍💻 API Routes

- **POST** `/products` – Create a new product

- **GET** `/products` – Get all products

- **GET** `/products/:id` – Get a product by ID

- **PUT** `/products/:id` – Update a product by ID

- **DELETE** `/products/:id` – Delete a product by ID

## 📧 Contact

Made with 💚 by **MELOS**

📬 For issues, suggestions, or contributions, feel free to open an issue.
