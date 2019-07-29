/**
 * Created by tinyakov.ru on 28.07.2019.
 */

import React from "react";

function Review(props) {
  return (
    <div>
      <div>
        {props.user + " : "}
        {props.text}
      </div>
    </div>
  );
}

export default Review;
