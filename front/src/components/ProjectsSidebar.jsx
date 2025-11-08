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

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: FolderKanban, label: "Projects", active: true },
  { icon: GitPullRequest, label: "Change Request", active: false },
  { icon: KanbanSquare, label: "Kanban Board", active: false },
  { icon: ListTodo, label: "Tasks List", active: false },
  { icon: CheckSquare, label: "To Do List", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: Users, label: "Clients", active: false },
  { icon: UserCircle, label: "Team Member", active: false },
  { icon: FolderOpen, label: "File Manager", active: false },
  { icon: BarChart3, label: "Reports", active: false },
];

export function ProjectsSidebar() {
  return (
    <div className="w-60 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h1 className="text-blue-600 tracking-wide">PROJEX</h1>
      </div>

      <nav className="px-3 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href="#"
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${
                  item.active
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
