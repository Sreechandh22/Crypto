"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchCryptoPrices from "../utils/fetchCrypto";

export default function CryptoList() {
  const [search, setSearch] = useState("");
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["cryptoData", search],
    queryFn: () => fetchCryptoPrices(search),
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    refetch();
  };

  return (
    <div className="container">
      {/* <h1>💎 Crypto Price Tracker</h1> */}
      
      <input
        type="text"
        placeholder="🔍 Search any cryptocurrency..."
        value={search}
        onChange={handleSearchChange}
      />
      
      <button onClick={() => refetch()}>🚀 Refresh Prices</button>

      {isLoading && (
        <p className="text-center text-cyan-400 animate-pulse mt-2">
          Fetching data...
        </p>
      )}
      {error && (
        <p className="text-center text-red-500">
          Error fetching data. Try again later.
        </p>
      )}

      <ul>
        {data?.length > 0 ? (
          <>
            {data?.map((crypto: { id: string; name: string; symbol: string; price: string }) => (
              <li key={crypto.id}>
                <span className="text-yellow-300">{crypto.name} ({crypto.symbol})</span>: 
                <span className="text-green-400"> ${crypto.price}</span>
              </li>
            ))}
          </>
        ) : (
          <p className="text-center text-gray-500">No results found</p>
        )}
      </ul>
    </div>
  );
}
