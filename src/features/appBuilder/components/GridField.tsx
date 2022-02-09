import { CSSProperties } from "react";
import { Col } from "react-bootstrap";

interface Width {
  Min: number;
  Max: number;
}

interface Format {
  Value: string;
  Text: string;
}

interface Properties {
  DisableSearch?: number;
  Width?: Width;
  AllowOrdering?: boolean;
  AllowInlineEditing?: boolean;
  Formats?: Format[];
}

export interface FieldConfig {
  Type: number;
  Caption: string;
  CaptionPosition: number;
  SelectionMode: number;
  Properties: Properties;
}

interface Props {
  fieldConfig: FieldConfig;
}

const GridField = (props: Props) => {
  const { fieldConfig } = props;
  const gridFieldStyles: CSSProperties = {
      padding: '1em',
      backgroundColor: '#35858B',
      borderRadius: '10px',
      marginBottom: '1em',
      color: 'white'
  }
  return (
    <Col xs={3}>
      <div style={gridFieldStyles}>{fieldConfig.Caption}</div>
    </Col>
  );
};

export default GridField;
