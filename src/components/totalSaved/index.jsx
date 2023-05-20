import React from "react";

export function TotalSaved (props) {
    return (
      <nav className={props.className}>
        Total saved  $ {props.valor} usd
      </nav>
    );
  }