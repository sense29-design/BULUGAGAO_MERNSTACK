import { useParams } from 'react-router-dom'
import students from '../data/student.json'

function StudentDetails() {
  const { id } = useParams()
  const student = students.find((s) => s.id === parseInt(id))

  if (!student) {
    return <h2>Student not found</h2>
  }

  return (
    <div className="student-details">
      <h1>{student.name}</h1>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>Email:</strong> {student.email}</p>
    </div>
  )
}

export default StudentDetails