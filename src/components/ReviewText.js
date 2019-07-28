import React, { useState } from "react";

export default function ReviewText(props) {
  const { user, text } = props.review;
  const style = {
    marginTop: 10
  };
  return (
    <section style={style}>
      <b>{user}</b> : {text}
    </section>
  );
}
