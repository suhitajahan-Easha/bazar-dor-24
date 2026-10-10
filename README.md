# বাজার দর | BazarDor

A modern, responsive Bengali market price application that helps users explore daily prices of essential products across different markets in Bangladesh. BazarDor presents market information in a clean interface, making it easier to compare prices and understand price changes at a glance.

## ✨ Key Features

1. **Daily Market Prices** — Browse prices of essential products, including rice, lentils, oil, vegetables, fish, meat, eggs, and spices.
2. **Product Price Comparison** — Explore product prices across different markets and compare minimum and maximum prices.
3. **Category-Based Navigation** — Find products quickly through organized categories and dedicated product pages.
4. **Price Change Indicators** — View price increases, decreases, and percentage changes to understand market trends.
5. **Authentication System** — Register and sign in securely using Better Auth, with support for email/password and social authentication.

## 🛠️ Technologies Used

| Technology             | Purpose                                                      |
| ---------------------- | ------------------------------------------------------------ |
| **Next.js**            | Build the user interface and application                     |
| **Next.js App Router** | Handle routing, page navigation, layouts, and loading states |
| **TypeScript**         | Improve code quality with static typing                      |
| **Tailwind CSS**       | Style the application and create responsive layouts          |
| **DaisyUI / HeroUI**   | Reusable UI components and styling                           |
| **Better Auth**        | Authentication and session management                        |
| **MongoDB**            | Store authentication and user-related data                   |
| **React Hot Toast**    | Display success and error notifications                      |

## 🚀 Getting Started

Follow these steps to run BazarDor locally.

### Prerequisites

* Node.js (LTS recommended)
* npm
* Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your repository's actual URL.

### 2. Navigate to the Project Directory

```bash
cd your-project-folder
```

Replace `your-project-folder` with your actual project folder name.

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root and add the environment variables required by your application.

For example:

```env
BETTER_AUTH_MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Use the exact variable names referenced in your source code. Configure OAuth credentials and callback URLs in the Google and GitHub developer consoles if social login is enabled. Never commit real credentials or secrets to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📁 Project Structure

```text
src/
├── app/             # App Router pages, layouts and route handlers
├── Components/      # Reusable UI components
└── lib/             # Authentication, types and utility functions

public/              # Static assets and images
```

*The structure above is a general overview; adjust it to match your actual repository.*

## 🔐 Authentication

BazarDor uses Better Auth to manage user authentication and sessions. Depending on the configured providers, users can register and sign in using email/password, Google, or GitHub.

Authentication credentials and environment variables must be configured before using protected routes or social login locally.

## 📱 Responsive Design

The application uses Tailwind CSS and reusable UI components to adapt its layout to desktop, tablet, and mobile screens.

## 🎯 Project Goal

The goal of BazarDor is to make essential market-price information easier to explore through a simple, accessible, and Bengali-friendly digital experience.

---

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**
