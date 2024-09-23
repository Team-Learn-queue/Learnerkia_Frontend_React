import PermissionListItem from "../../../../common/lists/PermissionListItem";
import SelectAllBtn from "../../../../common/buttons/SelectAllBtn";

const ReportAnalytics = () => {
  const permissionsList = [
    { id: 1, label: "View the report/analytics" },
    { id: 2, label: "Courses completion rate over time" },
    { id: 3, label: "Best performing courses" },
    { id: 4, label: "Average time spent learning per day " },
    { id: 5, label: "Average time spent learning per week" },
    { id: 6, label: "Average time spent learning per month" },
    { id: 7, label: "Average time spent learning per quarter" },
    { id: 8, label: "Average time spent learning per year" },
    {
      id: 9,
      label:
        "Average time spent learning over a period of time by time, date and year",
    },
    { id: 10, label: "Learners Performance Reports" },
  ];
  return (
    <div>
      <SelectAllBtn />

      <div>
        {permissionsList.map((permission) => (
          <PermissionListItem
            key={permission.id}
            settingName={permission.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportAnalytics;
