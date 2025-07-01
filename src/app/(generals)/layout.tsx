import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";

export default function RootLayout({
  children,
  login,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
}) {
  return (
    <>
      <HeaderSecond />
      {children}
      {login}
      <Footer />
    </>
  );
}
