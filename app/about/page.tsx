import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl">Tanza J. Solis</h1>
      <h2 className="text-xl">Artist && Code Monkey</h2>
      <p>
        Hi everyone! I'm Tanza. I'm a painter by day and a programmer also by
        day.
      </p>
      <p>
        I'm getting laid off soon so here I am catching up on skills. Yippee!
      </p>
      <div className="chooser__choice chooser__choice-b underline underline-offset-1 text-lg text-red-600 hover:text-amber-400">
        <Link href="/">
          <span>{"\u21ab"}</span> Back
        </Link>
      </div>
    </main>
  );
}
