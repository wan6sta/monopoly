import cls from './Input.module.css'
import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = props => {
	const { children, ...otherProps } = props

	return <input className={cls.Input} {...otherProps} />
}
