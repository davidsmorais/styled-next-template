import React from 'react';
import PropTypes from 'prop-types';

import NextImage from 'next/image';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  > div {
    ${({ theme, borderRadius }) =>
      borderRadius && theme.borderRadius(borderRadius)};
  }
`;

const Image = ({
  src,
  layout,
  width,
  height,
  borderRadius,
  className,
  alt,
  children,
}) => (
  <StyledImageContainer borderRadius={borderRadius} className={className}>
    {(src && (
      <NextImage
        alt={alt}
        src={src}
        layout={layout}
        width={width}
        height={height}
      />
    )) ||
      ''}
    {children}
  </StyledImageContainer>
);

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  layout: PropTypes.oneOf(['fill', 'intrinsic', 'responsive', 'fixed']),
  alt: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

Image.defaultProps = {
  layout: 'intrinsic',
};

export default Image;
