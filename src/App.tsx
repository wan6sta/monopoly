import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { GamePage } from './pages/GamePage/Game'

export const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/game' element={<GamePage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	)
}
