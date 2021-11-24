// import styled from 'styled-components';
import HEADER_ITEMS from '../config/headerItems';
import Layout from './Layout';
import Text from './Typography';
import useTranslate from 'Hooks/useTranslate';

const Header = () => {
  const { t } = useTranslate('common');
  return (
    <Layout.Row background="black" fullWidth>
      <Layout.Row>
        {HEADER_ITEMS.map((item) => (
          <Layout.Col key={item.id} size={1}>
            <Text.Link as="heading" href={'/#'} color="white">
              {t(item.text)}
            </Text.Link>
          </Layout.Col>
        ))}
      </Layout.Row>
    </Layout.Row>
  );
};

export default Header;
