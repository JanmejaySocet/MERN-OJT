import {Link} from 'react-router-dom';
const Navbar = ()=>{
    return(
        <>
          <nav Style="background-color:#fff;padding: 10px; border-bottom: 1px solid #dee2e6; justify-content: space-between; align-items: center; display: flex; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div Style="color:white; font-size:50px"><img src="https://silveroakuni.ac.in/upload/images/250x70.webp" alt="" /></div>
        <ul Style= "list-style-type: none; gap: 30px; display: flex; justify-content: space-around; align-items: center; padding: 0;">
            <li>
                <Link to="/" Style= "text-decoration: none;color:#6a0dad">Home</Link>        
            </li>
            <li><Link to="/Teachers" Style= "text-decoration: none;color:#6a0dad">Teachers</Link></li>
            <li><Link to="/Holidays" Style= "text-decoration: none;color:#6a0dad">Holidays</Link></li>
            <li><button Style= "Background-color:#6a0dad;padding:10px 30px;border-radius:15px;color:white; " >Contact Us</button></li>
        </ul>
        
      </nav>

        </>
    )
}
export default Navbar;