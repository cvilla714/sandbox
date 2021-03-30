import React from "react";
// import emojis from "../emojipedia";
import Emojicard from "./emojitcard";

// function createEmojiCard(emoji) {
//   return (
//     <EmojiCard
//       key={emoji.id}
//       emoji={emoji.emoji}
//       name={emoji.name}
//       meaning={emoji.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Emojicard />
        <Emojicard />
        <Emojicard />
      </dl>
    </div>
  );
}

export default App;
