import React from "react";
import classNames from 'classnames';

import './Button.scss';

//size: large, mideum, small
//color: blue, pink, gray
function Button({ 
    children,
    size,
    color,
    outline,
    fullWidth,
    className,
    ...rest
}) {
    return <button className={classNames('Button', size, color, {
        outline,
        fullWidth
    }, className)}
    {...rest}
    >{children}</button>;
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};

export default Button;