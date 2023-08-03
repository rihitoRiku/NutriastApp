import React, { ReactNode } from "react";
import { useRouter } from "next/router";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

// type LayoutProps = {
//   children: React.ReactNode;
//   title: string;
// };

// export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
//   return (
//     <>
//       <Navbar title={title} />
//       <main>{children}</main>
//     </>
//   );
// }
