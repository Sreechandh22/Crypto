# 🚀 Crypto Price Tracker

Welcome to the **Crypto Price Tracker** documentation!  
This project is a real-time cryptocurrency price tracking dashboard built using **Next.js, React Query, and the CoinCap API**.

---

## **🎯 Project Overview**
The Crypto Price Tracker allows users to:
- 🔹 View real-time prices of the **top 5 cryptocurrencies**.
- 🔹 **Search** for any cryptocurrency by name or symbol.
- 🔹 **Auto-refresh** the price data at regular intervals.
- 🔹 **Manually refresh** prices using a refresh button.
- 🔹 Experience a **futuristic, dark-themed UI**.

### **🔹 Tech Stack**
| **Technology**   | **Purpose**                                |
|-----------------|------------------------------------------|
| **Next.js**     | Frontend framework for server-side rendering |
| **React Query** | Efficient state management & API caching |
| **CoinCap API** | Fetching real-time crypto price data |
| **TailwindCSS** | Modern UI styling & responsiveness |

---

## **📌 Key Features**
### ✅ **Live Cryptocurrency Prices**
The dashboard fetches real-time price data using the **CoinCap API**, ensuring users always see the latest values.

### ✅ **Dynamic Search Functionality**
Users can search for any cryptocurrency by name or symbol.

### ✅ **Auto-Refresh & Manual Update**
- Auto-refresh fetches new prices every **30 seconds**.
- Users can manually update prices using the **"Refresh" button**.

### ✅ **State Management with React Query**
- Ensures **efficient API calls** without unnecessary re-fetching.
- Provides **automatic caching** to enhance performance.

### ✅ **Dark-Themed, Futuristic UI**
The interface is **sleek, modern, and fully responsive**, optimized for both desktop & mobile users.

---

## **🔧 Project Setup**
### **Prerequisites**
Ensure you have the following installed:
- **Node.js (v18 or later)**
- **npm (or yarn/pnpm)**
- **Git**
- **Vercel CLI (for deployment)**

### **🚀 Installation**
1️⃣ **Clone the repository**:
```sh
git clone https://github.com/Sreechandh22/crypto-tracker.git
```

## 2️⃣ Navigate to the project folder:

```sh
cd crypto-tracker/web-app
```

## 3️⃣ Install dependencies:
```sh
npm install
```

## 4️⃣ Run the development server:
```sh
npm run dev
```
## 5️⃣ Open in browser:
Go to http://localhost:3000 to view the dashboard.

### 🛠 API Integration
The application fetches live cryptocurrency prices from the CoinCap API.

🔗 API Endpoint:
```sh
https://api.coincap.io/v2/assets
```

### **🖥️ Deployment**
## 1️⃣ Login to Vercel:
```sh
vercel login
```

2️⃣ Deploy the web app:
```sh
cd crypto-tracker/web-app
vercel --prod
```

3️⃣ Deploy the documentation:
```sh
cd ../docs
vercel --prod
```
📌 Live Web App URL:
https://cryptotracker-navy-theta.vercel.app/


👨‍💻 Contributors
Sreechandh | GitHub: Sreechandh22

