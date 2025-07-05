export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="bg-[#FFF6DA]">{children}</main>
    </>
  );
}
