import { Inter } from "next/font/google";
import "./styles.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaterLeak",
  description: "Monitorování havárie vody",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <header>
          <nav className="container">
            <Link href="/" className="logo">
              WaterLeak
            </Link>
            <ul>
              <li>
                <Link href="/register">Registrace</Link>
              </li>
              <li>
                <Link href="/unregister">Odhlášení</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-content">{children}</main>
        <footer>
          <p>
            &copy; <a href="https://david.huljak.cz">Dávid Huljak</a>{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </body>
    </html>
  );
}
