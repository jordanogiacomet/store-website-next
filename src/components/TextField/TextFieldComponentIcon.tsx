import React, { ElementType } from "react";

interface TextFieldComponentIconProps {
    icon: ElementType;
}

const TextFieldComponentIcon: React.FC<TextFieldComponentIconProps> = ({ icon: Icon }) => {
    return <Icon />;
}

export default TextFieldComponentIcon;