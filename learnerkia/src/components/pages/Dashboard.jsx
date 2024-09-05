import ActionBtn from "../common/buttons/ActionBtn";
import PageHeader from "../common/PageHeader";

const Dashboard = () => {
  return (
    <div>
      <PageHeader
        pageName={"Dashboard"}
        actionButton={<ActionBtn buttonName={"Action Btn"} />}
      />
    </div>
  );
};

export default Dashboard;
