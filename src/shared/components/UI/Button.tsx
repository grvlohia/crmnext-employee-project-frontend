import { ColorVariant } from "../../interfaces/Colors";
import {Button as ReactButton, ButtonProps} from 'react-bootstrap'

export interface Props extends ButtonProps {
    color?: ColorVariant
}

const Button = (props: Props) => {
    const {color} = props;
    let variant = color;
    return (
        <ReactButton variant={variant} {...props} ></ReactButton>
    )
}

export default Button;