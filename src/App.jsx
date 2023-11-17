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

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return(
    <BrowserRouter basename="/autoevaluaciones" id = "App">
      <Routes>
        <Route path="/login" element= {<LoginForm/>}/>
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
