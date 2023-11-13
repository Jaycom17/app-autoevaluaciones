import SelfEvaluationItem from "./components/SelfEvaluationItem.jsx"
import SelfEvaluationList from "./components/SelfEvaluationList.jsx"
import SelfEvaluationForm from "./components/SelfEvaluationForm.jsx"
import CreateAcademicPeriodForm from "./components/CreateAcademicPeriodForm.jsx"

function App() {
  return (
    <>
      <SelfEvaluationForm professor={{name: "juan", id: "10029230", labor: {period: "2023-2"}}}/>
    </>
  )
}

export default App
