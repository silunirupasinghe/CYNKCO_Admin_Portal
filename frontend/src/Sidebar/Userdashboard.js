import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";

// Placeholder components
const ChangePassword = () => <div className="p-4">Change Password Page</div>;
const Dashboard = () => <div className="p-4">Dashboard Page</div>;

const UserDashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // Prevent both horizontal & vertical scrolling globally
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflowX = "auto";
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="flex h-screen w-screen max-w-full overflow-hidden box-border">
      {/* Sidebar */}
      <AdminSidebar onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <div className="flex-1 p-5 ml-[235px] w-[calc(100vw-235px)] h-screen box-border flex flex-col">
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2">
          {currentPage === "dashboard" && <Dashboard />}
          {/* Uncomment these as needed */}
          {/* {currentPage === "ChangePassword" && <ChangePassword />}
          {currentPage === "event" && <Events />}
          {currentPage === "eventreg" && <EventsReg />}
          {currentPage === "news" && <News />}
          {currentPage === "contact" && <ContactUsMain />}
          {currentPage === "vendors" && <Vendors />}
          {currentPage === "pillars" && <Pillar />}
          {currentPage === "blog" && <Blog />}
          {currentPage === "office" && <RegionalOffices />}
          {currentPage === "leadership" && <Leadership />}
          {currentPage === "training" && <Trainings />}
          {currentPage === "trainingReg" && <TrainingReg />} */}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 text-black flex items-center justify-end w-full">
          <p className="text-xs pr-2">
            © 2025 Connex Codeworks (Pvt) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;