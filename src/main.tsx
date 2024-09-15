import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ToDoContextProvider from './contextApi/ToDoContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId="bbb043195c4f4df7a1c5955b61dc9c24"
      domain="https://studentyou.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <ToDoContextProvider>
        <App />
      </ToDoContextProvider>
    </KindeProvider>
  </StrictMode>,
)