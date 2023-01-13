import React from "react";

const TextRenderer: React.FC<{ text: string }> = (props) => {
  const split = props.text.replaceAll("\t", "  ").split("\n");
  return (
    <>
      {split.map((s, i) => (
        <React.Fragment key={i.toString()}>
          {i !== 0 ? (
            <>
              <br />
            </>
          ) : null}
          {s}
        </React.Fragment>
      ))}
    </>
  );
};

export default TextRenderer;
