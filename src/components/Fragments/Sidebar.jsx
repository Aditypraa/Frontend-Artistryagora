import SideBarLink from "../Elements/SideBarLink";

function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <img
          src="https://floatui.com/logo.svg"
          width={150}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-2 bg-gray-800">
          <SideBarLink to="/">Home</SideBarLink>
          <SideBarLink to="/categories">Categories</SideBarLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
