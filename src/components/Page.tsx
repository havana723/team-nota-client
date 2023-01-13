import styled from "@emotion/styled";
import { Teamnote } from "../types";
import Content from "./Content";

const PageContainer = styled.div<{ layout: string }>`
  width: ${(props) => (props.layout[0] === "v" ? "210mm" : "297mm")};
  height: ${(props) => (props.layout[0] === "v" ? "297mm" : "210mm")};
  padding: 20mm;
  margin: 10mm auto;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  column-count: ${(props) => +props.layout[props.layout.length - 1]};
  column-rule: 1px solid black;
  column-fill: auto;
  word-break: break-all;
`;

interface Props {
  teamnote: Teamnote;
}

const Page: React.FC<Props> = (props) => {
  const { teamnote } = props;

  return (
    <>
      <PageContainer layout={teamnote.layout}>
        <Content teamnote={teamnote} />
      </PageContainer>
    </>
  );
};

export default Page;
