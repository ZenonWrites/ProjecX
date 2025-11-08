import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";



export function ProjectCard({
  title,
  subtitle,
  status,
  progress,
  clientName,
  projectId,
  domainName,
  startingDate,
}: ProjectCardProps) {
  return (
    // ADDED: 'max-w-lg' to give the card a nice width, but stop it from stretching.
    // ADDED: 'w-full' so it behaves well on small screens (in a 1-column layout)
    <div className="w-full max-w-lg bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-gray-900">{title}</h3>
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
          {status}
        </Badge>
      </div>

      <p className="text-gray-500 text-sm mb-4">{subtitle}</p>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm text-gray-900">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="text-sm">
          <span className="text-gray-500">Client Name:</span>
          <div className="text-gray-900">{clientName}</div>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Project ID:</span>
          <div className="text-gray-900">{projectId}</div>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Domain Name:</span>
          <div className="text-gray-900">{domainName}</div>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Starting Date:</span>
          <div className="text-gray-900">{startingDate}</div>
        </div>
      </div>
    </div>
  );
}