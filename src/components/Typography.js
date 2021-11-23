import styled from 'styled-components';

const Title = styled.h1`
  font-family: OldWizard;
  font-size: 96px;
  line-height: 105px;
  text-align: ${props => props.align || 'center'};
  letter-spacing: 4px;
  text-transform: capitalize;
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  ${({ gradient,theme }) => gradient && `
    background: ${theme.colors[gradient] || theme.colors.titleGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `};
`

const Subtitle = styled.h2`
font-family: editundo;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 22px;
text-align: ${props => props.align || 'center'};
color: ${({ theme, color }) => theme.colors[color || 'white']};
${({ gradient,theme }) => gradient && `
  background: ${theme.colors[gradient] || theme.colors.titleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`};
`

const Heading = styled.h3`
font-family: editundo;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 16px;
text-align: ${props => props.align || 'center'};
color: ${({ theme, color }) => theme.colors[color || 'white']};
${({ gradient,theme }) => gradient && `
  background: ${theme.colors[gradient] || theme.colors.titleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`};
`


const Body = styled.h3`
font-family: editundo;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-align: ${props => props.align || 'center'};
color: ${({ theme, color }) => theme.colors[color || 'white']};
${({ gradient,theme }) => gradient && `
  background: ${theme.colors[gradient] || theme.colors.titleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`};
`

export default {Body, Heading, Subtitle, Title}
