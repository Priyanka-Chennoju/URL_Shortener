"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    setShortUrl(data.short);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>

      <input
        className="border p-3 w-full max-w-md rounded shadow"
        type="text"
        placeholder="Enter your long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={handleShorten}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Shorten URL
      </button>

      {shortUrl && (
        <p className="mt-6 text-lg">
          Short URL:{" "}
          <a href={shortUrl} className="text-blue-700 underline">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}


