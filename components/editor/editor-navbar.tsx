import React from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const EditorNavbar: React.FC<EditorNavbarProps> = ({
  isSidebarOpen,
  onToggleSidebar,
}) => {
  return (
    <nav className={cn(
      "h-14 border-b border-border-default bg-bg-elevated flex items-center justify-between px-4"
    )}>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
        >
          {isSidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
      </div>
      <div className="flex items-center gap-2">
      </div>
      <div className="flex items-center gap-2">
      </div>
    </nav>
  );
};
