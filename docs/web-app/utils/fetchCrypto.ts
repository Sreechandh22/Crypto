import axios from "axios";

const API_URL = "https://api.coincap.io/v2/assets";
const API_KEY = "78d5cac8-bf36-4329-bc50-f4732ad3c07f"; // Your CoinCap API Key

const fetchCryptoPrices = async (searchQuery: string = "") => {
  try {
    const params = searchQuery
      ? { search: searchQuery, limit: 10 } // Allow users to search for up to 10 results
      : { ids: "bitcoin,ethereum,ripple,cardano,solana,dogecoin", limit: 5 }; // Default: Ensure 5 cryptos

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params,
    });

    const data = response.data.data;

    // Ensure exactly 5 results (fallback if API fails to return 5)
    if (!searchQuery && data.length < 5) {
      console.warn(`Expected 5 cryptos, got ${data.length}. API might be missing some.`);
    }

    return data.map((crypto: any) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol.toUpperCase(),
      price: parseFloat(crypto.priceUsd).toFixed(2),
    }));
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw new Error("Failed to fetch data");
  }
};

export default fetchCryptoPrices;
