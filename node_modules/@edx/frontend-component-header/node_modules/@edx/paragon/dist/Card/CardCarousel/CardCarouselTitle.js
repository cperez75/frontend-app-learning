import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
function CardCarouselTitle(_ref) {
  let {
    children,
    as,
    className
  } = _ref;
  const Component = as || 'h2';
  return /*#__PURE__*/React.createElement(Component, {
    className: classNames('pgn__card-carousel-title', className)
  }, children);
}
CardCarouselTitle.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.string
};
CardCarouselTitle.defaultProps = {
  as: undefined,
  className: undefined
};
export default CardCarouselTitle;
//# sourceMappingURL=CardCarouselTitle.js.map