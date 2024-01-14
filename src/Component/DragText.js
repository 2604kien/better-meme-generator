import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function DragText(props) {
    const [position, setPosition] = useState({ x: props.position.x, y: props.position.y });

    useEffect(() => {
        setPosition({ x: props.position.x, y: props.position.y });
    }, [props.position]);

    const handleDrag = (e, data) => {
        const newPosition = { x: data.x, y: data.y };
        setPosition(newPosition);
        props.handlePositionDrag(newPosition, props.id);
    };

    return (
        <Draggable
            axis="both"
            handle=".FirstText"
            bounds="parent"
            defaultPosition={position}
            grid={[1, 1]}
            scale={1}
            onDrag={handleDrag}
        >
            <h3 className="FirstText" style={{ fontSize: props.textSize + "rem" }}>
                {props.text}{" "}
            </h3>
        </Draggable>
    );
}