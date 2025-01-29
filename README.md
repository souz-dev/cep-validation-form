## 📋 Sumary

1. 🚀 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 💾 [Environment Variables](#envs)
5. 💻 [Quick Start](#quick-start)
6. 🤝 [Contributing](#contributing)
7. 👥 [Authors](#authors)

## 🚀 Introduction

This project is a user registration form built with React, TypeScript, React Hook Form, and Zod for validation. The application provides a structured way to handle form submissions and integrates with an API for data validation.

## ⚙️ Tech Stack

- TypeScript
- React.js
- React Hook Form
- Zod
- TailwindCSS
- Axios

## 🔋 Features

- **Form Validation**: Uses Zod for schema-based validation.
- **API Integration**: Validates data through an external API.
- **Optimized Performance**: Utilizes React Hook Form for minimal re-renders.
- **Styled UI**: TailwindCSS for a clean and responsive design.

## 💾 Environment Variables

```
VITE_API_BASE_URL=http://localhost:3001
```

> **Note:** The backend API must be running locally. Follow the setup instructions at [CEP Validation API](https://github.com/souz-dev/cep-validation-api).

## 💻 Quick Start

### 00 - Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 01 - Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/register-form-fe
cd register-form-fe
```

### 02 - Install Dependencies

```bash
npm install
```

### 03 - Set Up Environment Variables

- Create a `.env` file in the root directory and add:
  ```
  VITE_API_BASE_URL=http://localhost:3001
  ```

### 04 - Run the Backend

Before starting the frontend, ensure the backend API is running:

```bash
git clone https://github.com/souz-dev/cep-validation-api
cd cep-validation-api
npm install
npm start
```

### 05 - Run the Frontend

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## 👥 Authors

