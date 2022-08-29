export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      <ul className="fixed top-0 flex w-full flex-row gap-x-10 border-b border-slate-200 bg-slate-50 px-7 py-3 md:gap-x-20 md:px-20">
        {children}
      </ul>
    </nav>
  );
}
