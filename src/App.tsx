import "./App.css";
import Layout from "./components/Layout";
import Page from "./components/Page";
import sample from "./sample.json";
import { Teamnote } from "./types";

const App: React.FC = () => {
  const teamnote = sample as Teamnote;

  return (
    <>
      <Layout>
        <Page layout={teamnote.layout} />
      </Layout>
    </>
  );
};

export default App;
