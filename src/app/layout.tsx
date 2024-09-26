import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
  });
  

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px]">
          <div className="flex-l flex flex-col h-full">{children}</div>
          </main>
        </body>
    </html>
  );
}
