import React from "react";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50",
      !isOpen && "pointer-events-none"
    )}>
      <div
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div className={cn(
        "absolute left-0 top-0 bottom-0 w-80 rounded-xl bg-bg-surface border-r border-border-default transition-transform duration-300 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
          <div className="flex items-center justify-between h-14 px-4 py-3 border-b border-border-default">
            <div className="flex justify-center w-25">
              <h2 className="text-lg font-semibold text-text-primary">Projects</h2>
            </div>
            <div className="flex justify-center w-12">
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X />
              </Button>
            </div>
          </div>
        <Tabs defaultValue="my-projects" className="flex-1 flex flex-col h-9">
          <div className="flex flex-col items-center justify-center w-full h-16">
            <TabsList className="mx-4 my-2">
              <TabsTrigger value="my-projects">My projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="my-projects" className="flex-1 flex items-center justify-center text-text-muted px-4">
            No projects yet
          </TabsContent>
          <TabsContent value="shared" className="flex-1 flex items-center justify-center text-text-muted px-4">
            No shared projects yet
          </TabsContent>
        </Tabs>
        <div className="flex items-center justify-center h-16 p-4 border-t border-border-default">
          <Button className="w-78 h-11">
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </div>
    </div>
  );
};
