import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-white">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl shadow-black/20 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent/80">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-400">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-[#e0bc4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
