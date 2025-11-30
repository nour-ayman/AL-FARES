<<<<<<< HEAD
# AL-FARES

## Project Description
**AL-FARES** is a full-stack web application designed to manage and display **school and university supplies**. The project includes both **frontend** and **backend** components, following a **Feature-First Architecture** to make the code modular, maintainable, and easy to scale.

The application is organized around the following **core features**:

1. **Auth** – User login, registration, and authentication.  
2. **Products** – Product listing, product details, and related UI components.  
3. **Categories** – Displaying and filtering products by category.  
4. **Search** – Searching products with instant results and suggestions.  
5. **Cart** – Managing cart items, quantities, and totals.  
6. **Checkout** – Order completion, shipping details, and payment workflow.  
7. **Home** – Landing page with featured products and categories.  

---

## Git Branching Workflow

Our workflow follows a standard multi-branch structure to ensure clean collaboration and separation of responsibilities.

### 🔵 **main**
- The **production-ready** branch.  
- Contains **only stable, tested, and approved** code.  
- No one pushes code directly here.
- Code reaches this branch only through **merging develop → main**.

---

### 🟣 **develop**
- The branch where **all active development** happens.  
- Every finished feature is merged into **develop**, not into main.  
- When develop becomes fully stable, we merge it into main.

---

### 🟢 **frontend-setup**
- The branch responsible for:
  - Initial React setup  
  - Folder structure  
  - Feature-first architecture setup  
  - Installing dependencies  
- After finishing structure setup, this branch is merged into **develop**.

---

### 🟠 **feature/** (Feature Branches)
Each feature has its own branch, for example:
- `feature/auth`
- `feature/products`
- `feature/categories`
- `feature/search`
- `feature/cart`
- `feature/checkout`
- `feature/home`

**Purpose of Feature Branches:**
- Each branch contains code for only *one* feature.  
- Developers work independently without affecting others.  
- When the feature is done → merge into **develop**.

---

## Team Members
- **Wezza** – Team Leader  
- **Assem** – Developer  
- **Hamza** – Developer  

---

## Technologies Used
- **Frontend:** React  
- **Backend:** Node.js + Express  
- **Database:** MongoDB / MySQL / PostgreSQL  
- **Version Control:** Git & GitHub  

📚 Git Documentation: https://git-scm.com/doc  
📚 React Docs: https://react.dev  
📚 Node.js Docs: https://nodejs.org/en/docs
=======
# Frontend Setup

This folder contains the **React frontend** for the AL-FARES project.  
It follows the **Feature-First Architecture** with the following features:

1. Auth
2. Products
3. Categories
4. Search
5. Cart
6. Checkout
7. Home

Technologies used: React, React Router, Context API.
>>>>>>> frontend-setup
