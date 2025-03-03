"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CryptoList from "../components/CryptoList";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">🚀 Crypto Price Tracker</h1>
        <CryptoList />
      </div>
    </QueryClientProvider>
  );
}
