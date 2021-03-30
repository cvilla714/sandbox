import React from "react";
import emojipedia from "../emojipedia";

function EmojiCard(props) {
  return (
    <div>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {/* 💪 */}
            {props.emoji}
          </span>
          {/* <span>Tense Biceps</span> */}
          <span>{props.name}</span>
        </dt>
        {/* <dd>
          “You can do that!” or “I feel strong!” Arm with tense biceps. Also
          used in connection with doing sports, e.g. at the gym.
        </dd> */}
        <dd>
          {props.meaning}
        </dd>
      {/* </div>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            🙏
          </span>
          <span>Person With Folded Hands</span>
        </dt>
        <dd>
          Two hands pressed together. Is currently very introverted, saying a
          prayer, or hoping for enlightenment. Is also used as a “high five” or
          to say thank you.
        </dd>
      </div>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            🤣
          </span>
          <span>Rolling On The Floor, Laughing</span>
        </dt>
        <dd>
          This is funny! A smiley face, rolling on the floor, laughing. The face
          is laughing boundlessly. The emoji version of “rofl“. Stands for
          „rolling on the floor, laughing“.
        </dd>
      </div> */}
    </div>
  );
}

export default EmojiCard;
