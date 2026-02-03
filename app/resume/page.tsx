import React from "react";
import Link from "next/link";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-xl">Coming soon!</h1>
      <div className="chooser__choice chooser__choice-b underline underline-offset-1 text-lg text-red-600 hover:text-amber-400">
        <Link href="/">
          <span>{"\u21ab"}</span> Back
        </Link>
      </div>
    </main>
  );
}
