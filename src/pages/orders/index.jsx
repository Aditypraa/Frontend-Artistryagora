import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, setDate, setPage } from "../../redux/orders/actions";
import { fetchListEvents } from "../../redux/list/actions";
import { formatDate } from "../../utils/formatDate";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import SearchInput from "../../components/Elements/SearchInput";
import TableFragments from "../../components/Fragments/TableFragments";
import InputDate from "../../components/Elements/InputDate";

function PagesOrder() {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders);

  let [isShowed, setIsShowed] = useState(false);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch, orders.page, orders.date]);

  useEffect(() => {
    dispatch(fetchListEvents());
  }, [dispatch]);

  const displayDate = `${
    orders.date?.startDate ? formatDate(orders.date?.startDate) : ""
  }${orders.date?.endDate ? " - " + formatDate(orders.date.endDate) : ""}`;

  return (
    <>
      <Breadcrumbs textSecound={"Orders"} />
      <CmsLayouts>
        <div className="flex flex-wrap">
          <div
            className="cursor-pointer relative"
            onClick={() => setIsShowed(true)}
          >
            <SearchInput query={displayDate} />
            {isShowed && (
              <InputDate
                date={orders.date}
                setIsShowed={() => setIsShowed(!isShowed)}
                onChangeDate={(ranges) => dispatch(setDate(ranges.selection))}
              />
            )}
          </div>
        </div>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <TableFragments
              status={orders.status}
              thead={[
                "Nama",
                "Email",
                "Judul",
                "Tanggal Event",
                "Tanggal Order",
                "Lokasi",
              ]}
              data={orders.data}
              tbody={[
                "name",
                "email",
                "title",
                "date",
                "orderDate",
                "venueName",
              ]}
              pages={orders.pages}
              actionNotDisplay
              handlePageClick={({ selected }) =>
                dispatch(setPage(selected + 1))
              }
            />
          </div>
        </div>
      </CmsLayouts>
    </>
  );
}

export default PagesOrder;
