import styled from 'styled-components';

const getPadding = ({ paddingVertical = 0, paddingHorizontal = 0 }) => {
  return `${paddingVertical}px ${paddingHorizontal}px`;
};
export const Row = styled.div`
  background: ${({ background, theme }) =>
    theme.colors[background] || 'transparent'};
  display: flex;
  flex-flow: row ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex: ${({ size }) => size || 0};
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
  padding: ${(props) => getPadding(props)};
`;

export const Col = styled.div`
  background: ${({ background, theme }) =>
    theme.colors[background] || 'transparent'};
  display: flex;
  flex-flow: column ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex: ${({ size }) => size || 0};
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
  padding: ${(props) => getPadding(props)};
`;

export default { Row, Col };
