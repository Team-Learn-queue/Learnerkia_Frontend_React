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

import Groups from "../components/pages/Groups";
import Permissions from "../components/pages/RoleManagement/permissions/Permissions";
import User from "../components/pages/RoleManagement/permissions/subPages/User";
import ContentManagement from "../components/pages/RoleManagement/permissions/subPages/ContentManagement";
import CertificateManagement from "../components/pages/RoleManagement/permissions/subPages/CertificateManagement";
import ReportAnalytics from "../components/pages/RoleManagement/permissions/subPages/ReportAnalytics";
import BillManagement from "../components/pages/RoleManagement/permissions/subPages/BillManagement";
import AdvancedCertificateMgmt from "../components/pages/RoleManagement/permissions/subPages/AdvancedCertificateMgmt";

const userRoutes = [
  { path: "", element: <Dashboard /> },
  { path: "registration", element: <Registration /> },
  { path: "members", element: <Members /> },
  { path: "groups", element: <Groups /> },
  { path: "role-management", element: <RoleManagement /> },
  { path: "role-management/create-role", element: <CreateNewRole /> },
  {
    path: "role-management/create-role/permissions",
    element: <Permissions />,
    children: [
      { path: "", element: <h3>Edit your permission settings here</h3> },
      { path: "user", element: <User /> },
      { path: "content-mgmt", element: <ContentManagement /> },
      { path: "certificate-mgmt", element: <CertificateManagement /> },
      { path: "report-analytics", element: <ReportAnalytics /> },
      { path: "bill-mgmt", element: <BillManagement /> },
      {
        path: "advanced-certificate-mgmt",
        element: <AdvancedCertificateMgmt />,
      },
    ],
  },

  { path: "knowledge-bank", element: <KnowledgeBank /> },
  { path: "billing", element: <Billing /> },
  { path: "session", element: <Session /> },
  { path: "account", element: <Account /> },
  { path: "settings", element: <Settings /> },
];

export default userRoutes;
