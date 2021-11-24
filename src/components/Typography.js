import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
  font-family: OldWizard;
  font-size: 96px;
  line-height: 105px;
  text-align: ${(props) => props.align || 'center'};
  letter-spacing: 4px;
  text-transform: capitalize;
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  ${({ gradient, theme }) =>
    gradient &&
    `
    background: ${theme.gradients[gradient] || theme.gradients.titleGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `};
  ${({ stroke, theme }) =>
    stroke &&
    `    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: ${
      theme.colors[stroke] || theme.colors.accent
    };`};
`;

const Subtitle = styled.h2`
  font-family: editundo;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 22px;
  text-align: ${(props) => props.align || 'center'};
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  ${({ gradient, theme }) =>
    gradient &&
    `
  background: ${theme.gradients[gradient] || theme.gradients.titleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`};
`;

const Heading = styled.h3`
  font-family: 'editundo';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 16px;
  text-align: ${(props) => props.align || 'center'};
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  ${({ gradient, theme }) =>
    gradient &&
    `
  background: ${theme.gradients[gradient] || theme.gradients.titleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`};
`;

const Body = styled.p`
  font-family: editundo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: ${(props) => props.align || 'center'};
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  ${({ gradient, theme }) =>
    gradient &&
    `
  background: ${theme.gradients[gradient] || theme.gradients.titleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`}
  &:hover {
    color: ${({ theme, hoverColor }) =>
      (hoverColor && theme.colors[hoverColor]) || ''};
  }
`;

const StyledLink = ({ as, href, children, color, hoverColor, size, align }) => {
  const renderLinkComponent = {
    body: (...props) => <Body {...props} />,
    heading: (...props) => <Heading {...props}>{children}</Heading>,
    title: (...props) => <Title {...props} />,
    subtitle: (...props) => <Subtitle {...props} />,
  }[as.toLowerCase() || 'Body'];
  console.log(
    '🚀 ~ file: Typography.js ~ line 89 ~ StyledLink ~ renderLinkComponent',
    renderLinkComponent,
    as
  );

  return (
    <Link prefetch href={href} passHref>
      {renderLinkComponent({
        color,
        align,
        hoverColor,
        size,
        children,
      })}
    </Link>
  );
};

export default { Body, Heading, Subtitle, Title, Link: StyledLink };
