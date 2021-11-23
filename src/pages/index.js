import Head from "next/head";
import { Row } from "Components/Layout";
import Timeline from "Components/Timeline";
import Text from 'Components/Typography';
import Theme from 'Theme'

const Home = () => !console.log(Theme) && (
  <div>
    <Head/>
    <Text.Title gradient="titleGradient" stroke="accentAlt">
      Epoch Rift
    </Text.Title>
    <Timeline />
    <Row>
    </Row>
  </div>
);

export default Home;
