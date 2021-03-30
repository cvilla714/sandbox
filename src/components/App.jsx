import React from "react";
import emojis from "../emojipedia";
import Emojic from "./emojitcard";

console.log(emojis);

function createEmojiCard(emoji) {
  return (
    <Emojic
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
