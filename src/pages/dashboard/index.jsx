import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Header from "../../components/Elements/Header";
import State from "../../components/Elements/State";
import CmsLayouts from "../../components/Layouts/CmsLayouts";

const PagesDashboard = () => {
  return (
    <>
      <CmsLayouts>
        <Breadcrumbs />
        <div className="bg-gray-200">
          <Header />
          <State />
        </div>
      </CmsLayouts>
    </>
  );
};

export default PagesDashboard;
