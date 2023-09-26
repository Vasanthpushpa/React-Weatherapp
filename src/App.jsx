import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherComponent from './Components/WeatherComponent.jsx/WeatherComponent'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  
  return (
    <>
<QueryClientProvider client={queryClient}>
<WeatherComponent/>
</QueryClientProvider>
    </>
  )
}

export default App
