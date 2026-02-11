import { useState } from "react";
const Dashboard = () => {
  const [bug, setBug] = useState(false);
  if (bug) throw new Error("این یک خطای تستی است!");
  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl font-bold">📊 داشبورد</h1>
        <button
          onClick={() => setBug(true)}
          className="mt-4 px-4 py-2 bg-red-100 text-red-600 rounded"
        >
          تست خطا
        </button>
      </div>
    </>
  );
};

export default Dashboard;
