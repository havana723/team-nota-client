import styled from "@emotion/styled";
import { TeamnoteLayout } from "../types";

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
  layout: TeamnoteLayout;
}

const Page: React.FC<Props> = (props) => {
  const { layout } = props;

  return (
    <>
      <PageContainer layout={layout}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
        tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
        quod mazim placerat facer possim assum. Typi non habent claritatem
        insitam; est usus legentis in iis qui facit eorum claritatem.
        Investigationes demonstraverunt lectores legere me lius quod ii legunt
        saepius.
      </PageContainer>
    </>
  );
};

export default Page;
