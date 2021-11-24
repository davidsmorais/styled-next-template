import styled from 'styled-components';
import HEADER_ITEMS from '../config/headerItems';
import Layout from './Layout';
import Text from './Typography';
import useTranslate from 'Hooks/useTranslate';
import Image from 'Components/Image';

const HeaderContainer = styled(Layout.Row)`
  position: sticky;
  z-index: 10;
  top: 0px;
`;

const Header = () => {
  const { t } = useTranslate('common');
  return (
    <HeaderContainer background="black" fullWidth paddingVertical={8}>
      <Layout.Col size={1} />
      <Layout.Col size={1}>
        <Image
          src="/images/dsmlogo_elp.png"
          width={90}
          height={90}
          layout="responsive"
          alt="DSM Author Logo"
        />
      </Layout.Col>
      <Layout.Col size={1} />
      {HEADER_ITEMS.map((item) => (
        <Layout.Col key={item.id} size={1} marginHorizontal={8}>
          <Text.Link
            as="heading"
            hoverColor="accentAlt"
            href={'/#'}
            color="white"
          >
            {t(item.text)}
          </Text.Link>
        </Layout.Col>
      ))}
      <Layout.Col size={2} />
    </HeaderContainer>
  );
};

export default Header;
