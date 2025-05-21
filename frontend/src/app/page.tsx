'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchRows = async () => {
      const response = await fetch("http://localhost:8000/rows"); // Adjust the URL if needed
      const data = await response.json();
      setRows(data);
    };

    fetchRows();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col gap-8 items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Database Rows</h1>
        <ol className="list-inside list-decimal text-sm">
          {rows.map((row, index) => (
            <li key={index} className="mb-2">
              {JSON.stringify(row)} {/* Adjust this to display specific fields */}
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
