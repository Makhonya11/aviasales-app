import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/index.js'
import './index.css'
import App from './components/App/App'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>

)
