import { CSSProperties, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DraggableCard from "./components/DraggableCard";
import data from "../../shared/GridJsonSample.json";
import Panel from "../../shared/components/UI/Panel";
import GridField, { FieldConfig } from "./components/GridField";
import DropArea from "./components/DropArea";

const LayoutCreator = () => {
  const [gridFields, setGridFields] = useState<FieldConfig[]>([]);
  const leftPanelStyles: CSSProperties = {
    backgroundColor: "#072227",
    padding: "1em",
    borderRadius: "15px",
  };

  const onDrop = (item: FieldConfig) => {
    setGridFields((prevState) => {
      const newState = [...prevState, item];
      return newState;
    });
  };

  const moveCard = (dragIndex: number, hoverIndex: number)  => {
    const movingField = gridFields[dragIndex];
    setGridFields((prevState) => {
      const newGridFields = prevState.filter((field, idx) => idx !== dragIndex);
      newGridFields.splice(hoverIndex, 0, movingField);
      return newGridFields;
    });
  }

  return (
    <Container>
      <Row>
        <Col xs={3} style={leftPanelStyles}>
          {data.category.map((cat) => {
            return (
              <Panel
                id={cat.Name}
                header={cat.Name}
                collapsible
                errors={{}}
                key={cat.Name}
                backgroundColor="#4FBDBA"
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {Object.entries(cat.Fields).map(([key, value]) => {
                    return (
                      <DraggableCard
                        key={key}
                        fieldConfig={value as FieldConfig}
                        disableDragging={gridFields.findIndex(elem => elem.Caption === value?.Caption) !== -1}
                      />
                    );
                  })}
                </div>
              </Panel>
            );
          })}
        </Col>
        <Col>
          <Container
            style={{
              padding: "0.5em",
              backgroundColor: "#072227",
              borderRadius: "15px",
            }}
          >
            <Row>
              {gridFields.map((field, idx) => {
                return (
                  <GridField
                    key={`${field.Caption}#${idx}`}
                    fieldConfig={field as FieldConfig}
                  />
                );
              })}
              {<DropArea onDrop={onDrop} addedFields={gridFields} />}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutCreator;
