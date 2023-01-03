import React, { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./Components/Avatar";
import PartList from "./Components/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
  neckwear: 18,
  earrings: 32,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [eyebrow, setEyebrow] = useState(0);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [neckwear, setNeckwear] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setEyebrow(Math.floor(Math.random() * total.eyebrows));
    setHat(Math.floor(Math.random() * total.hat));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
    setEarrings(Math.floor(Math.random() * total.earrings));
  };
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="container">
      <div className="heading">Character</div>
      <div className="sub-heading">Customization</div>
      <div className="main-body">
        <div className="avatar-container">
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              mouth={mouth}
              eyebrow={eyebrow}
              hat={hat}
              glasses={glasses}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              neckwear={neckwear}
              earrings={earrings}
            />
            <button className="button" onClick={() => randomize()}>
              Randomize it!
            </button>
          </div>
        </div>

        <div className="list-container">
          <div className="selection">
            <h2>Body</h2>
            <PartList
              total={total.body}
              path="body"
              set={setBody}
              selected={body}
            />
          </div>
          <div className="selection">
            <h2>Eyes</h2>
            <PartList
              total={total.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
            />
          </div>
          <div className="selection">
            <h2>Hair</h2>
            <PartList
              total={total.hair}
              path="hair"
              set={setHair}
              selected={hair}
            />
          </div>
          <div className="selection">
            <h2>Mouths</h2>
            <PartList
              total={total.mouth}
              path="mouths"
              set={setMouth}
              selected={mouth}
            />
          </div>
          <div className="selection">
            <h2>Eyebrows</h2>
            <PartList
              total={total.eyebrows}
              path="eyebrows"
              set={setEyebrow}
              selected={eyebrow}
            />
          </div>
          <div className="selection">
            <h2>Hats</h2>
            <PartList
              total={total.hat}
              path="accessories/hats"
              set={setHat}
              selected={hat}
            />
          </div>
          <div className="selection">
            <h2>Glasses</h2>
            <PartList
              total={total.glasses}
              path="accessories/glasses"
              set={setGlasses}
              selected={glasses}
            />
          </div>
          <div className="selection">
            <h2>Clothing 1</h2>
            <PartList
              total={total.clothing1}
              path="clothes/layer_1"
              set={setClothing1}
              selected={clothing1}
            />
          </div>
          <div className="selection">
            <h2>Clothing 2</h2>
            <PartList
              total={total.clothing2}
              path="clothes/layer_2"
              set={setClothing2}
              selected={clothing2}
            />
          </div>
          <div className="selection">
            <h2>Clothing 3</h2>
            <PartList
              total={total.clothing3}
              path="clothes/layer_3"
              set={setClothing3}
              selected={clothing3}
            />
          </div>
          <div className="selection">
            <h2>Neckwear</h2>
            <PartList
              total={total.neckwear}
              path="accessories/neckwear"
              set={setNeckwear}
              selected={neckwear}
            />
          </div>
          <div className="selection">
            <h2>Earrings</h2>
            <PartList
              total={total.earrings}
              path="accessories/earrings"
              set={setEarrings}
              selected={earrings}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
