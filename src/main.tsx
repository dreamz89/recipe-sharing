import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from '@/App'
// import Login from '@/pages/Login'
// import Signup from '@/pages/Signup'
// import Settings from '@/pages/Settings'
// import Profile from '@/pages/Profile'
// import Recipes from '@/pages/Recipes'
// import Recipe from '@/pages/Recipe'
// import NotFound from '@/pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:recipe" element={<Recipe />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
