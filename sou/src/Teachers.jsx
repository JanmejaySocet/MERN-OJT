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
            {/* <h1>{teachers.map((teacher, index) => (
                    <li key={index}>
                        {teacher[0].name} - {teacher[0].subject}
                    </li>
                ))}</h1> */}
             
            
            <p>{teachers[0].name} - {teachers[0].subject}</p>
            <p>{teachers[1].name} - {teachers[1].subject}</p>
           
            <Footer />
        </>
    );
}
export default Teachers;