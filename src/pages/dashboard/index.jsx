import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import CmsLayouts from "../../components/Layouts/CmsLayouts";

const PagesDashboard = () => {
  return (
    <>
      <Breadcrumbs />
      <CmsLayouts>
        <div className="flex justify-center">
          <h1>Dashboard</h1>
        </div>
      </CmsLayouts>
    </>
  );
};

export default PagesDashboard;
