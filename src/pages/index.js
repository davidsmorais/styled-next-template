import Head from 'next/head';
import { Row } from 'Components/Layout';
import Timeline from 'Components/Timeline';
import Text from 'Components/Typography';
import Icon from 'Components/Icon';
import Theme from 'Theme';

const Home = () =>
  !console.log(Theme) && (
    <div>
      <Head />
      <Text.Title gradient="titleGradient" stroke="accentAlt">
        Epoch Rift
      </Text.Title>
      <Timeline />
      <Row background="black" paddingVertical={16}>
        <Icon name="itch.io" size="2em" />
        <Icon name="twitter" size="2em" />
      </Row>
    </div>
  );

export default Home;
