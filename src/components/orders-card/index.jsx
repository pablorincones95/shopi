import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa6";

const OrdersCard = (props) => {
  const { totalPrice, totalProduct } = props;

  return (
    <div className="flex justify-between items-center mb-5 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full items-center">
        <p className="flex flex-col">
          <span className="font-medium">01.02.25</span>
          <span className="font-medium">{totalProduct} Articles</span>
        </p>

        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl ">${totalPrice}</span>
          <FaAngleRight className="cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProduct: PropTypes.number.isRequired,
};

export { OrdersCard };
