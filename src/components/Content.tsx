import styled from "@emotion/styled";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Teamnote } from "../types";
import TextRenderer from "./TextRenderer";

const H1 = styled.div`
  font-size: 12pt;
  font-weight: bold;
  font-family: "Computer Modern Serif", serif;
`;

const H2 = styled.div`
  font-size: 10pt;
  font-weight: bold;
  font-family: "Computer Modern Serif", serif;
`;

const Text = styled.div`
  font-size: 8pt;
  font-weight: bold;
  font-family: "Computer Modern Serif", serif;
`;

const Code = styled.div`
  font-size: 6pt;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  white-space: pre;
`;

interface Props {
  teamnote: Teamnote;
}

const Content: React.FC<Props> = (props) => {
  const { teamnote } = props;

  return (
    <>
      <H1>Contents</H1>
      <div style={{ height: "16px" }} />
      {teamnote.categories.map((category, categoryIdx) => {
        return (
          <>
            <H2>{`${categoryIdx + 1}. ${category.title}`}</H2>
            {category.contents.map((content, contentIdx) => {
              return (
                <Text>{`${categoryIdx + 1}.${contentIdx + 1}. ${
                  content.title
                }`}</Text>
              );
            })}
            <div style={{ height: "8px" }} />
          </>
        );
      })}
      <div style={{ height: "16px" }} />
      {teamnote.categories.map((category, categoryIdx) => {
        return (
          <>
            <H1>{`${categoryIdx + 1}. ${category.title}`}</H1>
            <div style={{ height: "8px" }} />
            {category.contents.map((content, contentIdx) => {
              return (
                <>
                  <H2>{`${categoryIdx + 1}.${contentIdx + 1}. ${
                    content.title
                  }`}</H2>
                  <div style={{ height: "8px" }} />
                  {content.type === "algorithm" ? (
                    <>
                      {content.explanation ? (
                        <>
                          <Text>{content.explanation}</Text>
                          <div style={{ height: "8px" }} />
                        </>
                      ) : null}
                      {content.timeComplexity ? (
                        <>
                          <Text>{content.timeComplexity}</Text>
                          <div style={{ height: "8px" }} />
                        </>
                      ) : null}
                      <Code>
                        <SyntaxHighlighter
                          language={content.language}
                          style={xcode}
                        >
                          {content.code}
                        </SyntaxHighlighter>
                      </Code>
                    </>
                  ) : (
                    <Text>
                      <TextRenderer text={content.text} />
                    </Text>
                  )}
                  {contentIdx === category.contents.length - 1 ? null : (
                    <div style={{ height: "8px" }} />
                  )}
                </>
              );
            })}
            <div style={{ height: "16px" }} />
          </>
        );
      })}
    </>
  );
};

export default Content;
