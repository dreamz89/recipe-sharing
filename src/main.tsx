import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import App from '@/App'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Settings from '@/pages/Settings'
import Account from '@/pages/Account'
import EditProfile from '@/pages/EditProfile'
// import Profile from '@/pages/Profile'
// import Recipes from '@/pages/Recipes'
// import Recipe from '@/pages/Recipe'
// import Save from '@/pages/Save'
import NotFound from '@/pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="settings" element={<Settings />}>
            <Route path="account" element={<Account />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>
          {/* <Route path="profile" element={<Profile />} />
          <Route path="recipes">
            <Route index element={<Recipes />} />
            <Route path=":recipe" element={<Recipe />} />
            <Route path=":recipe/edit" element={<Save />} />
            <Route path="create" element={<Save />} />
          </Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
