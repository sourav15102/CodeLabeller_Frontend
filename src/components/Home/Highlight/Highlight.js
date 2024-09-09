import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-java.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "../Highlight/Highlight.css";

const Highlight = ({ language, code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="render_view line-numbers">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default Highlight;
