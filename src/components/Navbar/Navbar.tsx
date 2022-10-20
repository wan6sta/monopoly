import cls from './Navbar.module.css'
import { FC } from 'react'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
	return <div className={cls.Navbar}></div>
}
