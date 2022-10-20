import cls from './Game.module.css'
import { FC, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

interface GameProps {}

const socket = io('http://localhost:80')

export const GamePage: FC<GameProps> = () => {
	const [value, setValue] = useState('')

	const sendMessage = () => {
		socket.emit('message', { data: value })
	}

	useEffect(() => {
		socket.on('message', ({ data }) => {
			console.log(data)
		})
	}, [])

	return (
		<div className={cls.Game}>
			<div>
				<input
					value={value}
					onChange={e => setValue(e.currentTarget.value)}
					type='text'
				/>
				<button onClick={sendMessage}>Send</button>
			</div>
		</div>
	)
}
