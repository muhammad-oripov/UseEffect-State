import { useState } from "react";
import { Wrapper } from "./Container/Wrapper";
import Layout from "./Layout/Layout";
import { Button, Input, HStack, Tag } from "@chakra-ui/react";
import "./App.css";


const tags = [
  "story",
  "comment",
  "poll",
  "pollopt",
  "show_hn",
  "ask_hn",
  "front_page",
];

function App() {
  let [val, setVal] = useState("");
  let [btn, setBtn] = useState("");
  return (
    <>
      <Layout>
        <header>
          <form>
            <Input
              padding="5px 10px 10px 10px"
              color="#fff"
              fontSize="20px"
              placeholder="Search for something..."
              type="text"
              onChange={(e) => setVal(e.target.value)}
              defaultValue={val}
            />
            <Button width="100px" backgroundColor="#FEFEFE">
              Search
            </Button>
          </form>
        </header>
        <main>
          <HStack spacing={4}>
            {tags.map((item, index) => (
              <Tag size="lg" key={index} onClick={(e) => setBtn(e.target.innerHTML)} variant="solid" colorScheme="teal">
                {item}
              </Tag>
            ))}
          </HStack>
          
          <div className="screen-wrapper">
            <h1>
              Robinhood is limiting purchases of stocks: AMC, Blackberry, Nokia,
              and GameStop
            </h1>
            <a href="https://www.apple.com">Read Full Story</a>
            <Wrapper  val={val} btn={btn} /> 
          </div>
        </main>
      </Layout>
    </>
  );
}

export default App;
