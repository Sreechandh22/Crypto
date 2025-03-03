# 🔥 Challenges & Solutions

Building the **Crypto Price Tracker** using **Next.js, React Query, and CoinCap API** had its own challenges. Below are some major obstacles and how they were resolved.

---

## **1️⃣ API Limitations & Data Fetching Issues**
### **⚠️ Issue:**
- The CoinCap API sometimes **returned fewer than 5 cryptocurrencies**, even when explicitly requested.
- Searching for certain cryptos would occasionally **return no results** due to API restrictions.

### ✅ **Solution:**
- Implemented **fallback logic** to ensure at least 5 cryptos display by setting default values.
- Added a **search bar** that dynamically filters based on user input.

### **📌 Code Fix:**
````ts
const params = searchQuery
  ? { search: searchQuery, limit: 10 }
  : { ids: "bitcoin,ethereum,ripple,cardano,solana", limit: 5 };

const response = await axios.get(API_URL, {
  headers: { Authorization: `Bearer API_KEY` },
  params,
});
````

## 2️⃣ State Management & Performance Optimization

### ⚠️ Issue:
- Initially, using React’s `useState()` + `useEffect()` caused unnecessary API calls on re-renders.
- Fetching data on every keystroke in the search bar caused performance lag.

### ✅ Solution:
- Switched to **React Query**, which caches results and reduces unnecessary API calls.
- Implemented **debouncing** in the search input to delay API requests.

### 📌 Code Fix:
```ts
const { data, error, isLoading, refetch } = useQuery({
  queryKey: ["cryptoData", search],
  queryFn: () => fetchCryptoPrices(search),
  staleTime: 60000, // Cache for 1 minute
});
````

## 3️⃣ Next.js Build Errors on Deployment

### ⚠️ Issue:
The build failed on Vercel due to:
- **Missing Axios** (`Module not found: Can't resolve 'axios'`).
- **ESLint blocking the use of `any`** (`Unexpected any. Specify a different type.`).

### ✅ Solution:
- Installed Axios manually:

```sh
npm install axios
```

Defined explicit TypeScript types instead of using any:
````ts
interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: string;
}
````
## 4️⃣ UI Design & Styling

### ⚠️ Issue:
- The default UI looked **basic and outdated**.
- Users wanted a **dark mode**, **futuristic**, and **premium look**.

### ✅ Solution:
- Added **glassmorphism effect** and **neon UI elements**.
- Used **TailwindCSS** for better styling and animations.

### 📌 Code Fix:
```css
.container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px rgba(0, 255, 255, 0.3);
}
```

## 5️⃣ Docusaurus Deployment Issues

### ⚠️ Issue:
- **Chunk loading errors** (`Loading chunk plugin---markdown-page failed.`).
- **Incorrect sidebar links** caused pages to be missing.

### ✅ Solution:
- Cleared cache and rebuilt the project:

````ts
npm run clear
npm run build
````

Fixed sidebar links in sidebars.ts:
````ts
const sidebars: SidebarsConfig = {
  sidebar: [
    { type: "doc", id: "intro" },
    { type: "doc", id: "setup" },
    { type: "doc", id: "api" },
    { type: "doc", id: "state-management" },
    { type: "doc", id: "challenges" },
  ],
};
````

## 🚀 Final Thoughts

✅ Fixed API limitations with fallback handling.  
✅ Optimized state management with React Query.  
✅ Resolved build & deployment errors on Vercel.  
✅ Improved UI with a futuristic, premium look.  
✅ Fixed Docusaurus documentation issues.  

### 💡 Lesson Learned:
Careful **state management**, **error handling**, and **deployment testing** are critical for production-ready applications.

