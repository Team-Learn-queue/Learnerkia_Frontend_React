import PageHeader from "../../layout/secondary/PageHeader";
import NavBtn from "../../common/buttons/NavBtn";
import RoleManagementTable from "../../common/tables/RoleManagementTable";
import useFetch from "../../../hooks/useFetch";

const RoleManagement = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(data);
  return (
    <div>
      <PageHeader
        pageName={"Role Management"}
        actionButton={
          <NavBtn buttonName={"Create New Role"} navUrl={"create-role"} />
        }
      />
      <RoleManagementTable />
      {/* <h1 className="bg-slate-400 min-w-5 h-5">
        {isLoading ? "Loading" : "Done Loading!"}
      </h1> */}
    </div>
  );
};

export default RoleManagement;
