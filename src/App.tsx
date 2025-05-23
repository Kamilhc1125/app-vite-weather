import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import './App.css';
import { ThemeProvider } from './context/theme-provider';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
