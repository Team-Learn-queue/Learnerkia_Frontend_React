import PageHeader from "../../layout/secondary/PageHeader";
import NavBtn from "../../common/buttons/NavBtn";

const CreateNewRole = () => {
  return (
    <div className="h-full ">
      <PageHeader
        pageName={"Create New Role"}
        hasHeaderNav={true}
        headerNavName={"Role Mangement"}
        headerNavUrl={"/role-management"}
      />

      <div className="h-[70vh] flex flex-col justify-center gap-20 items-center bg-white p-10">
        <div className="flex justify-between items-center gap-6">
          <label htmlFor="role name">Enter Role Name</label>
          <input type="text" />
        </div>
        <NavBtn buttonName={"Next"} navUrl={"permissions"} />
      </div>
    </div>
  );
};

export default CreateNewRole;
