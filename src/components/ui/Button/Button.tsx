import cls from './Button.module.css'
import { ButtonHTMLAttributes, FC, InputHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = props => {
	const { disabled, children, ...otherProps } = props

	return (
		<button
			disabled={disabled}
			className={`${cls.Button} ${disabled ? cls.error : ''}`}
			{...otherProps}
		>
			{children}
		</button>
	)
}
