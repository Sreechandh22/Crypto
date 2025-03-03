# 🔗 API Integration

The **Crypto Price Tracker** fetches live cryptocurrency prices using the **CoinCap API**.

---

## **🚀 How API Integration Works**
- The app **fetches real-time crypto prices** from **CoinCap API**.
- **React Query** caches responses to avoid redundant requests.
- The **search bar allows users to filter cryptocurrencies** dynamically.

---

## **🔹 API Endpoint Used**
We use the **`/assets`** endpoint to fetch cryptocurrency data.

### **🔗 Base API URL**
```sh
https://api.coincap.io/v2/assets
```

### **📌 Example API Call**
````ts
const API_URL = "https://api.coincap.io/v2/assets";

const fetchCryptoPrices = async (searchQuery: string) => {
  const response = await axios.get(API_URL, {
    params: searchQuery ? { search: searchQuery, limit: 10 } : { limit: 5 },
    headers: { Authorization: `Bearer YOUR_API_KEY` },
  });
  return response.data.data;
};
````

### 📌 API Response Format
The API returns data in JSON format.

🔹 Example Response
```json
{
  "data": [
    {
      "id": "bitcoin",
      "rank": "1",
      "symbol": "BTC",
      "name": "Bitcoin",
      "priceUsd": "43121.57",
      "marketCapUsd": "813728193492.23",
      "volumeUsd24Hr": "18937291019.56",
      "changePercent24Hr": "-1.29"
    },
    {
      "id": "ethereum",
      "rank": "2",
      "symbol": "ETH",
      "name": "Ethereum",
      "priceUsd": "3281.12",
      "marketCapUsd": "393283192391.00",
      "volumeUsd24Hr": "13929183919.12",
      "changePercent24Hr": "+0.92"
    }
  ]
}
```

✅ Includes price, rank, market cap, and 24h change

✅ Data is auto-updated every request

###  📌 Error Handling
We handle network issues and API rate limits gracefully.

🔹 Handling API Errors
````ts
const { data, error, isLoading } = useQuery({
  queryKey: ["cryptoData"],
  queryFn: fetchCryptoPrices,
});

if (isLoading) return <p>Loading...</p>;
if (error) return <p>⚠️ Error fetching data. Try again later.</p>;
````

