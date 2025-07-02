import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSecond />
      {children}
      <Footer />
    </>
  );
}
