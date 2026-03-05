"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { LayoutDashboard, Users, Settings } from "lucide-react"

export default function DashboardSideBar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Settings",
      href: "/dashboard/setting",
      icon: Settings,
    },
  ]

  return (
    <Sidebar className="border-r shrink-0 bg-white h-full">
      
      <SidebarHeader className="h-20 flex items-center px-6 border-b">
        <h2 className="text-lg font-semibold tracking-tight pt-5 text-[#185E99]">
          Admin Panel
        </h2>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase text-muted-foreground tracking-wider mb-4">
            Main Menu
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <SidebarMenuItem key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#9ECC46] text-white shadow-md"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      {item.title}
                    </Link>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 border-t">
        <div className="text-xs text-muted-foreground text-center">
          © 2025 LinguaHub
        </div>
      </SidebarFooter>

    </Sidebar>
  )
}
