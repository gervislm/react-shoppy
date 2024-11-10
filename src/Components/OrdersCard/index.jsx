import {
  CalendarDaysIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="items-center mb-3 border border-black rounded-lg p-3 w-80">
      <div className="flex justify-between items-center">
        <p className="flex flex-col">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-4 w-4 text-black" />
            <span className="font-light">01.02.24</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBagIcon className="h-4 w-4 text-black" />
            <span className="font-light">{totalProducts} articles</span>
          </div>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
