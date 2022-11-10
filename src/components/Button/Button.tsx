import styles from './Button.module.css'
import React from "react";

interface ButtonProps extends React.ComponentPropsWithRef<'button'>{
    color: 'orange' | 'blue' | 'red'
}

export const Button:React.FC<ButtonProps> = ({children, color, onClick,...props}) => {
    const className = `${styles.button} ${styles[`button_${color}`]}`

    return <button className={className} onClick={onClick} {...props}>{children}</button>
}