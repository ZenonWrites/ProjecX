import {
  LayoutDashboard,
  FolderKanban,
  GitPullRequest,
  KanbanSquare,
  ListTodo,
  CheckSquare,
  Calendar,
  Users,
  UserCircle,
  FolderOpen,
  BarChart3,
} from "lucide-react";


type NavigationItem = {
  icon: React.ElementType,
  label: string;
};

const navigationItems: NavigationItem[] = [
  { icon: LayoutDashboard, label: "Dashboard"},
  { icon: FolderKanban, label: "Projects" },
  { icon: GitPullRequest, label: "Change Request" },
  { icon: KanbanSquare, label: "Kanban Board" },
  { icon: ListTodo, label: "Tasks List" },
  { icon: CheckSquare, label: "To Do List" },
  { icon: Calendar, label: "Calendar", },
  { icon: Users, label: "Clients"},
  { icon: UserCircle, label: "Team Member" },
  { icon: FolderOpen, label: "File Manager" },
  { icon: BarChart3, label: "Reports"},
];

interface SidebarProps {
  activeItem: string;
}

export function Sidebar({activeItem}: SidebarProps) {
  return (
    <div className="w-60 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h1 className="text-blue-600 tracking-wide">PROJEX</h1>
      </div>

      <nav className="px-3 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          const isActive = item.label === activeItem;

          return (
            <a
              key={item.label}
              href="#"
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
