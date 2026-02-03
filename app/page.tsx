import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1 className="text-xl">
          <Link className="underline underline-offset-1" href="/about">Tanza</Link>
          {" "}
          is a...
        </h1>
        <section className="chooser columns-2">
          <div className="chooser__choice chooser__choice-a underline underline-offset-1 text-lg text-pink-500 hover:text-amber-400">
            <Link href="/resume">Developer</Link>
          </div>
          <div className="chooser__choice chooser__choice-b underline underline-offset-1 text-lg text-red-600 hover:text-amber-400">
            <Link href="/portfolio">Artist</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
