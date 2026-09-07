import students from '../data/student.json'
import Student from '../components/Student'

function Students() {
  return (
    <div className="students-list">
      <h1>Student List</h1>
      <div className="cards-container">
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </div>
  )
}

export default Students