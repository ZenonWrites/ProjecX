import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { ChangeRequestTable } from "./components/ChangeRequestTable";
import { CreateCRModal } from "./components/CreateCRModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1">
        <Header onNewCRClick={() => setIsModalOpen(true)} />

        <main className="p-8">
          <ChangeRequestTable />
        </main>
      </div>

      <CreateCRModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
