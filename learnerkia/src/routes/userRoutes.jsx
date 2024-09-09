import { Children } from "react";
import Account from "../components/pages/Account";
import Billing from "../components/pages/Billing";
import Dashboard from "../components/pages/Dashboard";
import KnowledgeBank from "../components/pages/KnowledgeBank";
import Members from "../components/pages/Members";
import Registration from "../components/pages/Registration";
import CreateNewRole from "../components/pages/RoleManagement/CreateNewRole";
import RoleManagement from "../components/pages/RoleManagement/RoleManagement";
import Session from "../components/pages/Session";
import Settings from "../components/pages/Settings";
import ActiveRoles from "../components/pages/RoleManagement/ActiveRoles";
import Groups from "../components/pages/Groups";

const userRoutes = [
  { path: "", element: <Dashboard /> },
  { path: "registration", element: <Registration /> },
  { path: "members", element: <Members /> },
  { path: "groups", element: <Groups /> },

  {
    path: "role-management",
    element: <RoleManagement />,
    // children: [{ path: "", element: <ActiveRoles /> }],
  },
  { path: "create-role", element: <CreateNewRole /> },

  { path: "knowledge-bank", element: <KnowledgeBank /> },
  { path: "billing", element: <Billing /> },
  { path: "session", element: <Session /> },
  { path: "account", element: <Account /> },
  { path: "settings", element: <Settings /> },
];

export default userRoutes;
