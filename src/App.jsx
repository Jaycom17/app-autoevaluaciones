import AcademicPeriodList from './components/AcademicPeriodList.jsx'
import CreateAcademicPeriodForm from './components/CreateAcademicPeriodForm.jsx'
import CreateLaborForm from './components/CreateLaborForm.jsx'
import LaborList from './components/LaborList.jsx'
import LoginForm from './components/LoginForm.jsx'
import MainPage from './components/MainPage.jsx'
import NavigationItem from './components/NavigationItem.jsx'
import SelfEvaluationForm from './components/SelfEvaluationForm.jsx'
import SelfEvaluationList from './components/SelfEvaluationList.jsx'
import SelfEvaluationItem from './components/SelfEvaluationItem.jsx'
import UpdateAcademicPeriodForm from './components/UpdateAcademicPeriodForm.jsx'
import UpdateLaborForm from './components/UpdateLaborForm.jsx'

import ProtectedRoute from './routes/ProtectedRoute.jsx'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from './context/AuthContext.jsx'

function App() {
  return(
    <AuthProvider>
      <BrowserRouter basename="/autoevaluaciones" id = "App">
        <Routes>
          <Route path="/login" element= {<LoginForm/>}/>
          <Route element= {<ProtectedRoute/>}>
            <Route path="/" element= {<> <NavigationItem/> <MainPage/> </>}/>
            <Route path="/academic-periods" element= {<> <NavigationItem/> <AcademicPeriodList/> </>}/>
            <Route path="/academic-periods/create" element= {<> <NavigationItem/> <CreateAcademicPeriodForm/> </>}/>
            <Route path="/academic-periods/update/:id" element= {<> <NavigationItem/> <UpdateAcademicPeriodForm/> </>}/>
            <Route path="/labor/create" element= {<> <NavigationItem/> <CreateLaborForm/> </>}/>
            <Route path="/labor/update/:id" element= {<> <NavigationItem/> <UpdateLaborForm/> </>}/>
            <Route path="/labor" element= {<> <NavigationItem/> <LaborList/> </>}/>
            <Route path="/self-evaluations" element= {<> <NavigationItem/> <SelfEvaluationList/> </>}/>
            <Route path="/self-evaluations/create" element= {<> <NavigationItem/> <SelfEvaluationForm /> </>}/>
            <Route path="/self-evaluations/make" element= {<> <NavigationItem/> <SelfEvaluationItem/> </>}/>
            <Route path="*" component={() => <Navigate to="/" replace/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
