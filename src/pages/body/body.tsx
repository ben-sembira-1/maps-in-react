import React from "react";

export default function Body() {
    return (
        <div>
            {Array.from(Array(100).keys()).map((number) => (<div key={number}>Line {number}</div>))}
        </div>
    )
}
