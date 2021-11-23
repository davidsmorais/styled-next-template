import styled from 'styled-components';

export const Row = styled.div`
  background: ${({ background, theme }) => theme.colors[background] || 'transparent'};
  display: flex;
  flex-flow: row ${({ wrap }) => wrap ? 'wrap' : 'nowrap'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex: ${({ size }) => size || 0};
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
`;

export const Col = styled.div`
  background: ${({ background, theme }) => theme.colors[background] || 'transparent'};
  display: flex;
  flex-flow: column ${({ wrap }) => wrap ? 'wrap' : 'nowrap'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex: ${({ size }) => size || 0};
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
`;
