import LayoutStructure from "@/components/layout-structure";

export const metadata = { title: 'Connect with Josue Rushanika'};

export default function Layout({ children }) {
  return (
    <LayoutStructure
      background="bg-gradient-to-b from-slate-100 to-pink-100"
    >
      {children}
    </LayoutStructure>
  );
}
