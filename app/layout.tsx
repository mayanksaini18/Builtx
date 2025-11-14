import RootLayout from "./components/RootLayout";
import "./globals.css";

export const metadata = {
 title: {
    template: "%s - Built X",
    default: "Built X - Content, Marketing, and Web Solutions",
  },
  description:
    "We are a premier digital agency specializing in content creation, strategic digital marketing, and bespoke web solutions."

};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
