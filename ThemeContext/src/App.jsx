import './App.css'
import { ThemeProvider } from './Contexts/Theme'

function App() {

  return (
    <> 
     <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div>
          
        </div>
     </ThemeProvider>
    </>
  )
}

export default App
