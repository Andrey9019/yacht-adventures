import PropTypes from "prop-types";

const ItemList = ({ yachtContent }) => {
  const {
    imageYacht,
    nameYacht,
    length,
    builder,
    shipyard,
    built,
    guests,
    price,
  } = yachtContent;

  return (
    <li className="bg-[--dark-blue-2] p-[18px] pb-6 rounded-3xl mb-6 md:mb-8 xl:mb-0 w-[335px] h-[469px] md:w-[344px] md:h-[508px] xl:w-[354px]">
      <img
        src={imageYacht.mobileSrc}
        srcSet={`${imageYacht.mobileSrc} 500w, ${imageYacht.desktopSrc} 1000w`}
        alt={nameYacht}
        className="rounded-3xl mb-6 md:mb-8 w-[299px] h-[250px] md:h-[268px] xl:w-[322px] object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="flex justify-between mb-6 md:mb-8 items-center">
        <h3 className="text-base font-bold w-[177px] uppercase truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {nameYacht}
        </h3>
        <span className="text-xs font-light tracking-[0.36px] whitespace-nowrap">
          LUXURY YAHTS
        </span>
      </div>
      <table className="text-sm">
        <tbody>
          {length && (
            <tr>
              <td className="w-[70px]">LENGTH</td>
              <td className="pl-8">{length}</td>
            </tr>
          )}
          {builder && (
            <tr>
              <td>BUILDER</td>
              <td className="pl-8">{builder}</td>
            </tr>
          )}
          {shipyard && (
            <tr>
              <td>SHIPYARD</td>
              <td className="pl-8">{shipyard}</td>
            </tr>
          )}
          {built && (
            <tr>
              <td>BUILT</td>
              <td className="pl-8">{built}</td>
            </tr>
          )}
          {guests && (
            <tr>
              <td>GUESTS</td>
              <td className="pl-8">{guests}</td>
            </tr>
          )}
          {price && (
            <tr>
              <td>PRICE</td>
              <td className="pl-8">{price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </li>
  );
};

// Додавання PropTypes для перевірки типів пропсів
ItemList.propTypes = {
  yachtContent: PropTypes.shape({
    imageYacht: PropTypes.shape({
      mobileSrc: PropTypes.string.isRequired,
      desktopSrc: PropTypes.string.isRequired,
    }).isRequired,
    nameYacht: PropTypes.string.isRequired,
    length: PropTypes.string,
    builder: PropTypes.string,
    shipyard: PropTypes.string,
    built: PropTypes.string,
    guests: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ItemList;
