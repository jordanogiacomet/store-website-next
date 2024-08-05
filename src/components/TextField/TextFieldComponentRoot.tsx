import React from 'react';
import { TextField } from "@radix-ui/themes";

export interface TextFieldComponentRootProps {
    children: React.ReactNode;
    placeholder: string;
}

const TextFieldComponentRoot: React.FC<TextFieldComponentRootProps> = ({ children, placeholder }) => {
    return(
        <TextField.Root 
            placeholder={placeholder} 
            className='w-64 h-12 pl-2 border border-pink-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 flex items-center'
        >
            {children}
        </TextField.Root>
    );
};

export default TextFieldComponentRoot;