import { CSSProperties, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import constants from "../../../shared/constants";
import { FieldConfig } from "./GridField";



type Props = {
  fieldConfig: FieldConfig
  disableDragging: boolean
};

const DraggableCard = ({fieldConfig, disableDragging}: Props) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: constants.ITEM_TYPES.FIELD,
      item: fieldConfig,
      canDrag: !disableDragging,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [disableDragging]
  );

  const cardStyles: CSSProperties = {
    display: "inline-block",
    borderRadius: "10px",
    padding: "1em",
    marginRight: "0.5em",
    marginBottom: "0.5em",
    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
    backgroundColor: "#072227",
    color: "white",
    opacity: isDragging || disableDragging ? 0.5 : 1
  };
  return (
    <div ref={dragRef} style={cardStyles}>
      {fieldConfig.Caption}
    </div>
  );
};

export default DraggableCard;
