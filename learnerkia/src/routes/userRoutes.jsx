import Account from "../components/pages/Account";
import Billing from "../components/pages/Billing";
import Dashboard from "../components/pages/Dashboard";
import KnowledgeBank from "../components/pages/KnowledgeBank";
import Members from "../components/pages/Members";
import Registration from "../components/pages/Registration";
import RoleManagement from "../components/pages/RoleManagement";
import Session from "../components/pages/Session";
import Settings from "../components/pages/Settings";

const userRoutes = [
  { path: "", element: <Dashboard /> },
  { path: "registration", element: <Registration /> },
  { path: "members", element: <Members /> },
  { path: "rolemanagement", element: <RoleManagement /> },
  { path: "knowledgebank", element: <KnowledgeBank /> },
  { path: "billing", element: <Billing /> },
  { path: "session", element: <Session /> },
  { path: "account", element: <Account /> },
  { path: "settings", element: <Settings /> },
];

export default userRoutes;
