import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { WritingProviderWrapper } from './context/writing.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WritingProviderWrapper>
      <App />
    </WritingProviderWrapper>
  </React.StrictMode>,
)
