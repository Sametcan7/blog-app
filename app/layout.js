import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen mx-auto bg-gray-600">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}