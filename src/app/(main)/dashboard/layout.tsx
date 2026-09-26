import { AppSidebar } from "@/components/AppSidebar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppSidebar />
      {children}
    </>
  );
}
