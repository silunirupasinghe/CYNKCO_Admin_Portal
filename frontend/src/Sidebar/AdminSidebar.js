import React, { useState } from "react";
import {
  HomeIcon, // Dashboard
  PowerIcon, // Logout
  ChevronDownIcon, // ExpandMore
  ChevronUpIcon, // ExpandLess
} from "@heroicons/react/24/outline";

const AdminSidebar = ({ onNavigate }) => {
  const [selectedNav, setSelectedNav] = useState("dashboard");
  const [openSections, setOpenSections] = useState({});

  const user = {
    full_name: "Admin User",
    email: "admin@connexglobal.com",
  };

  const navItems = [
    { text: "Dashboard", icon: <HomeIcon className="w-6 h-6" />, action: "dashboard" },
    // Uncomment and add icons as needed
    // { text: "Vendors", icon: <UserGroupIcon className="w-6 h-6" />, action: "vendors" },
    // { text: "Pillars", icon: <DocumentTextIcon className="w-6 h-6" />, action: "pillars" },
    // {
    //   text: "News",
    //   icon: <NewspaperIcon className="w-6 h-6" />,
    //   action: "news",
    //   children: [
    //     { text: "Blogs", action: "blog" },
    //     { text: "News", action: "news" },
    //   ],
    // },
    // {
    //   text: "Events & Webinar",
    //   icon: <CalendarIcon className="w-6 h-6" />,
    //   action: "events",
    //   children: [
    //     { text: "Events", action: "event" },
    //     { text: "Event Reg", action: "eventreg" },
    //   ],
    // },
    // { text: "Contact Us", icon: <PhoneIcon className="w-6 h-6" />, action: "contact" },
    // {
    //   text: "About Us",
    //   icon: <ChartBarIcon className="w-6 h-6" />,
    //   action: "about",
    //   children: [
    //     { text: "Regional Offices", action: "office" },
    //     { text: "Leadership", action: "leadership" },
    //   ],
    // },
    // {
    //   text: "Services",
    //   icon: <CogIcon className="w-6 h-6" />,
    //   action: "service",
    //   children: [
    //     { text: "Trainings", action: "training" },
    //     { text: "Training Reg", action: "trainingReg" },
    //   ],
    // },
  ];

  const handleNavClick = (action, hasChildren) => {
    if (hasChildren) {
      setOpenSections((prev) => ({ ...prev, [action]: !prev[action] }));
    } else {
      setSelectedNav(action);
      onNavigate(action);
    }
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-[250px] h-screen p-4 bg-gray-50 text-black flex flex-col justify-between fixed top-0 left-0 z-50">
      {/* User Info */}
      <div className="flex items-center p-2 border-b border-gray-200">
        <div className="w-10 h-10 bg-indigo-900 text-white rounded-full flex items-center justify-center mr-2">
          {user.full_name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-bold text-sm">{user.full_name}</p>
        </div>
      </div>

      {/* Navigation List */}
      <ul className="flex-1 p-0">
        {navItems.map((item, index) => (
          <li key={index}>
            <div
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedNav === item.action
                  ? "bg-indigo-900 text-white"
                  : "hover:bg-gray-100 hover:text-indigo-900 hover:translate-x-1"
              }`}
              onClick={() => handleNavClick(item.action, item.children)}
            >
              <span
                className={`mr-2 w-6 h-6 ${
                  selectedNav === item.action ? "text-white" : "text-black"
                }`}
              >
                {item.icon}
              </span>
              <span className="flex-1">{item.text}</span>
              {item.children &&
                (openSections[item.action] ? (
                  <ChevronUpIcon className="w-6 h-6" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6" />
                ))}
            </div>

            {/* Collapsible Submenu */}
            {item.children && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[item.action] ? "max-h-40" : "max-h-0"
                }`}
              >
                <ul className="pl-8">
                  {item.children.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`p-2 cursor-pointer ${
                        selectedNav === subItem.action
                          ? "text-indigo-900"
                          : "text-black hover:text-indigo-900"
                      }`}
                      onClick={() => handleNavClick(subItem.action, false)}
                    >
                      {subItem.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <div className="p-2 border-t border-gray-200">
        <button
          className="w-full bg-red-600 text-white p-2 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200"
          onClick={handleLogout}
        >
          <PowerIcon className="w-6 h-6 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;