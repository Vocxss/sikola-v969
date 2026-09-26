"use client";
import { BookOpen, HelpCircle, Home, ListCheck, LogOut } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const navItems = [
  {
    title: "Beranda",
    icon: <Home />,
    url: "/beranda",
    isActive: true,
  },
  {
    title: "Kelas Saya",
    icon: <BookOpen />,
    url: "/kelas",
    isActive: false,
  },
  {
    title: "Task Flow",
    icon: <ListCheck />,
    url: "/task-flow",
    isActive: false,
  },
  {
    title: "Bantuan",
    icon: <HelpCircle />,
    url: "/help",
    isActive: false,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar variant="floating" className="mr-8">
      <SidebarContent className="justify-between">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton isActive={item.isActive}>
                <Link className="flex gap-4 items-center" href={item.url}>
                  {item.icon} {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarFooter>
          <SidebarMenuButton className="hover:bg-sidebar-accent pl-4 pt-4 border-t rounded-none border-primary/50">
            <SidebarMenuItem className="flex items-center text-destructive gap-4">
              <LogOut /> Keluar
            </SidebarMenuItem>
          </SidebarMenuButton>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};
