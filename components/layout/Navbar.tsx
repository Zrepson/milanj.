import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="logo">
          MILAN<span>.</span>
        </Link>

        <nav className="navigation">
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/lab">Lab</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}