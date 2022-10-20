import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage/HomePage'
import { Game } from '../Game/Game'

export const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/game' element={<Game />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	)
}
