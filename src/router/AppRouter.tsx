import { Routes, Route } from "react-router-dom"
import { AuthRouter } from "../auth/routes/AuthRouter"
import { JournalRouter } from '../journal/routes/JournalRouter';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="auth/*" element={<AuthRouter/>}></Route>
        <Route path="/*" element={<JournalRouter/>}></Route>
    </Routes>
  )
}
