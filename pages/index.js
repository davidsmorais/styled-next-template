import Head from "next/head";
import { Row } from "Components/Layout";

const Home = () => (
  <div>
    <Head>
      <title>Next.js on the Jamstack with Netlify!</title>
    </Head>
    <h1>
      Next.js on the <a href="https://jamstack.org">Jamstack</a>
    </h1>

    <Row>
      <h3>
        Hooray 🎉 - youve built this with{" "}
        <a href="https://nextjs.org">Next.js</a>!
      </h3>
    </Row>
  </div>
);

export default Home;
