import { Outlet } from "react-router-dom";

export const LayoutAuth = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Outlet />
    </main>
  );
};
