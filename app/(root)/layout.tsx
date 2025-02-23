import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();

  // If not authenticated, redirect to root (login) page
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main className="flex h-screen">
      <Sidebar {...user} />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...user} />
        <Header userId={user.$id} accountId={user.accountId} />
        <div className="main-content">{children}</div>
      </section>
      <Toaster />
    </main>
  );
};

export default Layout;
