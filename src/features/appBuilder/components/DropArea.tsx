import { Col } from "react-bootstrap";
import { useDrop } from "react-dnd";
import constants from "../../../shared/constants";
import { FieldConfig } from "./GridField";

type Props = {
  onDrop: (item: FieldConfig) => void;
  addedFields: FieldConfig[]
};

const DropArea = ({ onDrop, addedFields }: Props) => {
  
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: constants.ITEM_TYPES.FIELD,
    drop: (item: FieldConfig) => {
      console.log(item);
      onDrop(item);
    },
    canDrop: (item: FieldConfig) => {
      console.log(addedFields)
      return addedFields.findIndex(field => field.Caption === item.Caption) === -1;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), [addedFields]);
  return (
    <Col xs={3}>
      <div
        ref={dropRef}
        style={{
          padding: "1em",
          border: "2px dashed white",
          backgroundColor: isOver ? "rgba(53,133,139, 0.5)" : "transparent",
          color: 'white'
        }}
      >
        {"Drop Here"}
      </div>
    </Col>
  );
};

export default DropArea;
