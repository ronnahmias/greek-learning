import AuthFooter from "@components/footer/auth.footer";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthFooter />
      {children}
    </>
  );
}
