import Navbar from './Navbar'
import Footer from './footer.jsx'



const Teachers = () => {
    const teachers = [
        {name: "John Doe", subject: "Mathematics"}, 
        {name: "Jane Smith", subject: "Science"},
        {name: "Emily Johnson", subject: "English"}];
        
    return (
        <>  
            <Navbar />
            <h1>Teachers</h1>
            <p>List of teachers will be displayed here.</p>
            <h1>{teachers.map((teacher, index) => (
                    <li key={index}>
                        {teacher.name} - {teacher.subject}
                    </li>
                ))}</h1>
            <Footer />
        </>
    );
}
export default Teachers;