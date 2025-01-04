import PropTypes from "prop-types";
import { FaX } from "react-icons/fa6";

const OrderCard = (props) => {
  const { id, title, image, price, handleDelete } = props;

  return (
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {handleDelete && <FaX onClick={() => handleDelete(id)} />}
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
};

export { OrderCard };
