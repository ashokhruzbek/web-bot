import './App.css'
import Card from './components/card/Card'
import { getData } from './constants/db'
const courses = getData()
const App = () => {
  return (
     <>
    <h1 className='agent'>AgentX</h1>
    <div className="cards__container">
        {courses.map(course => (
           <Card key={course.id} course={course}/>
        ))}

    </div>
    </>
  )
}

export default App