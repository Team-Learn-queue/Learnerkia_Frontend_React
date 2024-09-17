import PageHeader from "../../layout/secondary/PageHeader";
import NavBtn from "../../common/buttons/NavBtn";

const CreateNewRole = () => {
  return (
    <div className="">
      <PageHeader
        pageName={"Create New Role"}
        hasHeaderNav={true}
        headerNavName={"Role Mangement"}
        headerNavUrl={"/role-management"}
      />

      <div className="h-[70vh] flex justify-center items-center bg-lrnrkia-white ">
        <div className="w-[80%] max-w-[900px] min-h-80  text-center relative">
          <div className="flex flex-col justify-start items-start gap-2">
            <label htmlFor="role name">Enter Role Name</label>
            <input type="text" className="w-full max-w-[600px] h-12" />
          </div>

          <div className="absolute bottom-0 right-0">
            <NavBtn buttonName={"Next"} navUrl={"permissions"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewRole;
