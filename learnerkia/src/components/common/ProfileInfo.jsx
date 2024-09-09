const ProfileInfo = ({ organizationName, profilePic }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img
        src={profilePic}
        alt="profile picture"
        className="w-11 h-11 bg-lrnrkia-white border-lrnrkia-medium-teal border-[1px] rounded-full p-1"
      />
      <span className="font-medium text-lg">{organizationName}</span>
    </div>
  );
};

export default ProfileInfo;
