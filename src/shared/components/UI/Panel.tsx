import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import { ColorVariant } from "../../interfaces/Colors";
import { BsCaretRightFill } from "react-icons/bs";
import Button from "./Button";
import styleClasses from "./Panel.module.css";

interface Props {
  id: string;
  header?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  className?: string;
  color?: ColorVariant;
  children?: ReactNode | ReactNode[];
  errors?: any;
  backgroundColor?: string
}

const Panel = (props: Props) => {
  const { id, header, collapsible, className, color, children, errors, backgroundColor } = props;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setOpen(true);
    }
  }, [errors]);

  return (
    <Card
      className={clsx(color && "border-color", className)}
      style={{ marginBottom: "1em", backgroundColor: backgroundColor }}
    >
      {header ? (
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className={styleClasses.PanelTitle}>{header}</span>
          {collapsible ? (
            <Button
              color="light"
              style={{ outline: "none", boxShadow: "none", backgroundColor: 'transparent', border: 'none' }}
              onClick={() =>
                setOpen((prevState) => {
                  return !prevState;
                })
              }
              aria-controls={id}
              aria-expanded={open}
            >
              <BsCaretRightFill
                className={clsx(
                  styleClasses.RotateIcon,
                  open ? styleClasses.RotateDown : null
                )}
              />
            </Button>
          ) : null}
        </Card.Header>
      ) : null}
      <Collapse in={open}>
        <Card.Body id={id}>{children}</Card.Body>
      </Collapse>
    </Card>
  );
};

export default Panel;
