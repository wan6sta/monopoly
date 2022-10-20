import cls from './JoinIntoGame.module.css'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Input } from '../ui/Input/Input'
import { Button } from '../ui/Button/Button'

interface JoinIntoGameProps {
	joinError: boolean
	setJoinError: (error: SetStateAction<boolean>) => void
}

export const JoinIntoGame: FC<JoinIntoGameProps> = ({
	joinError,
	setJoinError
}) => {
	const [valueRoom, setValueRoom] = useState('')

	if (valueRoom.length <= 0) {
		setJoinError(true)
	}

	return (
		<div className={cls.JoinIntoGame}>
			<label className={cls.cifry}>
				<span>Сюда цифры</span>
				<Input
					value={valueRoom}
					onChange={e => {
						setJoinError(false)
						setValueRoom(e.currentTarget.value)
					}}
					type='text'
				/>
			</label>

			<Button disabled={joinError}>Присоединиться</Button>
		</div>
	)
}
