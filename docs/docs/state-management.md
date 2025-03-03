# 🔹 State Management in Crypto Price Tracker

State management plays a crucial role in efficiently handling API calls and ensuring smooth data updates in the **Crypto Price Tracker**.

This project uses **React Query** to manage API requests and caching.

---

## **🎯 Why React Query?**
We considered multiple state management approaches:

| **Approach**         | **Pros** | **Cons** |
|----------------------|---------|----------|
| **React `useState()` & `useEffect()`** | Simple for basic state | Causes unnecessary re-fetching, poor performance |
| **Context API** | Good for global state | Not optimized for API calls, lacks caching |
| **Zustand** | Minimal boilerplate | More suited for complex apps, lacks built-in API fetching tools |
| **React Query** ✅ | Auto-caching, background fetching, improves performance | Requires learning curve |

After evaluation, we chose **React Query** for its **efficient caching, API state handling, and refetching capabilities**.

---

## **🚀 How React Query Works**
React Query simplifies API requests by:
- **Caching API responses** to prevent redundant fetches.
- **Automatically refetching** data when needed.
- **Handling loading & error states** without `useEffect()`.

---

## **🔹 Implementation**
We use `useQuery()` from **React Query** to fetch cryptocurrency prices.

### **📌 Crypto Fetching Logic**
````ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://api.coincap.io/v2/assets";

const fetchCryptoPrices = async (searchQuery: string) => {
  const response = await axios.get(API_URL, {
    params: searchQuery ? { search: searchQuery, limit: 10 } : { limit: 5 },
  });
  return response.data.data;
};

export default function CryptoList() {
  const [search, setSearch] = useState("");

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["cryptoData", search],
    queryFn: () => fetchCryptoPrices(search),
    staleTime: 60000, // Cache data for 1 minute
  });

  return (
    <div>
      <input
        type="text"
        placeholder="🔍 Search cryptocurrency..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => refetch()}>🔄 Refresh</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data.</p>}
      {data?.map((crypto) => (
        <p key={crypto.id}>{crypto.name}: ${crypto.priceUsd}</p>
      ))}
    </div>
  );
}
````

✅ Automatically caches API responses

✅ Reduces redundant API calls

✅ Refetches on demand & keeps data fresh

### **🔧 Performance Optimization**

## 1️⃣ Avoiding Unnecessary API Calls
With React Query, data is cached and only refetched when:

The cache expires (staleTime setting).
The user manually clicks refresh.
The user searches for a new coin.

## 2️⃣ Auto-Refetch on Window Focus
If the user leaves & returns to the app, React Query automatically refreshes data, keeping prices up to date.
````ts
useQuery({
  queryKey: ["cryptoData"],
  queryFn: fetchCryptoPrices,
  refetchOnWindowFocus: true,
});
````
3️⃣ Background Fetching
Even when cached, React Query silently updates data in the background, avoiding loading delays.

