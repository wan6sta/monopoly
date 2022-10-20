import { FC, useEffect, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { JoinIntoGame } from '../JoinIntoGame/JoinIntoGame'
import { v4 } from 'uuid'
import { Input } from '../ui/Input/Input'
import cls from './HomePage.module.css'
import { Button } from '../ui/Button/Button'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
	const [userName, setUserName] = useState(v4().slice(0, 4))
	const [joinError, setJoinError] = useState(false)
	const [valueRoom, setValueRoom] = useState(v4().slice(0, 4))

	useEffect(() => {
		if (userName.length <= 0 || valueRoom.length <= 0) {
			setJoinError(prev => true)
		}
	}, [valueRoom, userName])

	return (
		<>
			<div className='main'>
				<label className={cls.whoYou}>
					<span>Кто ты?</span>
					<Input
						onChange={e => {
							setJoinError(prev => false)
							setUserName(e.currentTarget.value)
						}}
						value={userName}
						type='text'
					/>
				</label>

				<Link className={cls.create} to='/game'>
					Создать игру
				</Link>

				{/*<JoinIntoGame joinError={joinError} setJoinError={setJoinError} />*/}

				<div className={cls.JoinIntoGame}>
					<div className={cls.cifryWrap}>
						<label className={cls.cifry}>
							<span>Сюда цифры</span>
							<Input
								value={valueRoom}
								onChange={e => {
									setJoinError(prev => false)
									setValueRoom(e.currentTarget.value)
								}}
								type='text'
							/>
						</label>
						{joinError && <span className={cls.error}>Эээ поля заполняй</span>}
					</div>

					<Button disabled={joinError}>Присоединиться</Button>
				</div>
			</div>
			<Navbar />
		</>
	)
}
