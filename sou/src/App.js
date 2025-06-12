const App = () => {

  return (
    <>
    
    
    {/* inline css use */}
     {/* <h1 Style="color:blue">Janmejay Pandya</h1> */}
  {/* <h1 style={
    {
      color: 'blue',
    }
  }>Janmejay Pandya</h1> */}
  <nav>
    <ul Style="display:flex; list-style:none; justify-content:center; background-color:lightblue; gap:20px; padding:10px; margin:0;">
      <li ><a Style="text-decoration:none" href="/">Home</a></li>
      <li><a Style="text-decoration:none " href="/about">About</a></li>
      <li><a Style="text-decoration:none " href="/contact">Contact</a></li>
      <li><a Style="text-decoration:none " href="/services">Services</a></li>

    </ul>
  </nav>
    </>


  )
}
export default App
// This code defines a simple React component named `App` that renders an `<h1>` element with the text "helloworld".


