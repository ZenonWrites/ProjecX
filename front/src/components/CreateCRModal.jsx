import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function CreateCRModal({ open, onOpenChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("CR Generated");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Create New CR</DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill the details to create a new CR
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700">
              Description<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Enter Description here....."
              className="min-h-24 resize-none border-gray-200 rounded-lg"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="module" className="text-gray-700">
                Select Module<span className="text-red-500">*</span>
              </Label>
              <Select required>
                <SelectTrigger
                  id="module"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select module" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                  <SelectItem value="ui-ux">UI/UX</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hours" className="text-gray-700">
                No. of Hours<span className="text-red-500">*</span>
              </Label>
              <Input
                id="hours"
                type="text"
                placeholder="Enter the no of hours"
                className="border-gray-200 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tasks" className="text-gray-700">
              Add Tasks<span className="text-red-500">*</span>
            </Label>
            <Input
              id="tasks"
              type="text"
              placeholder="Enter tasks here..."
              className="border-gray-200 rounded-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="impact" className="text-gray-700">
              Impact<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="impact"
              placeholder="Enter impact of Cr here....."
              className="min-h-24 resize-none border-gray-200 rounded-lg"
              required
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Generate CR
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </Button>
            <span className="text-xs text-gray-400 ml-2">
              *make field are important
            </span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
