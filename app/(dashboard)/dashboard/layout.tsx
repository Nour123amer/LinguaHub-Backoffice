import DashboardHeader from "@/components/DashboardHeader";
import DashboardSideBar from "@/components/DashboardSideBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default async function DashboardLayout({ 
  children, 
}: { 
  children: React.ReactNode; 
}) {

  return (
    <TooltipProvider>
    <SidebarProvider>
      <div  className="flex h-screen overflow-hidden w-full" >
      <DashboardSideBar />

      <SidebarInset className="flex flex-col">
        <DashboardHeader />
        <div className="flex-1 p-4 overflow-auto  ">
          {children} 
        </div>
        </SidebarInset>
      </div>

    </SidebarProvider>
    </TooltipProvider>
    
  );
}
