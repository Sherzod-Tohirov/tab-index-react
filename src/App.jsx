import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Text } from "./components/Text";
import './app.css';
export default function App() {
  const [contentMap, setContentMap] = useState({
    positive: "Positive content",
    negative: "Negative content",
    neutral: "Neutral content",
  });
  const [content, setContent] = useState(contentMap.negative);
  const [opacity, setOpacity] = useState({ pos: "25", neg: "100", neut: "25" });
  useEffect(() => {
    if (/positive/gi.test(content))
      setOpacity({ neg: "25", pos: "100", neut: "25" });
    if (/negative/gi.test(content))
      setOpacity({ neg: "100", pos: "25", neut: "25" });
    if (/neutral/gi.test(content))
      setOpacity({ neg: "25", pos: "25", neut: "100" });
  }, [content]);

  return (
    <>
      <div className="container mx-auto">
        <div
          className="
                wrapper 
                max-w-[650px] 
                w-full
                absolute 
                left-[50%] 
                top-[50%] 
                translate-x-[-50%] 
                translate-y-[-50%]
                bg-white
                rounded-md 
                p-8
            "
        >
          <Form setContent={setContent} contentMap={contentMap} />
          <List opacity={opacity} setContent={setContent} contentMap={contentMap} />
          <Text content={content} />
        </div>
      </div>
    </>
  );
}
