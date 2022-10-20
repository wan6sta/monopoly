import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import { Input } from '../../components/ui/Input/Input'
import cls from './HomePage.module.css'
import { Button } from '../../components/ui/Button/Button'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
	const [userName, setUserName] = useState(v4().slice(0, 4))
	const [valueRoom, setValueRoom] = useState(v4().slice(0, 4))
	let joinError = userName.length <= 0 || valueRoom.length <= 0

	return (
		<div className='main'>
			<div className={cls.JoinIntoGame}>
				<label className={cls.whoYou}>
					<span>Кто ты?</span>
					<Input
						onChange={e => {
							setUserName(e.currentTarget.value)
						}}
						value={userName}
						type='text'
					/>
				</label>

				<div className={cls.cifryWrap}>
					<label className={cls.cifry}>
						<span>Сюда цифры</span>
						<Input
							value={valueRoom}
							onChange={e => {
								setValueRoom(e.currentTarget.value)
							}}
							type='text'
						/>
					</label>
					{joinError && <span className={cls.error}>Эээ поля заполняй</span>}
				</div>
			</div>

			<Button disabled={joinError}>Присоединиться</Button>

			<Link className={cls.create} to='/game'>
				Создать игру
			</Link>
		</div>
	)
}
