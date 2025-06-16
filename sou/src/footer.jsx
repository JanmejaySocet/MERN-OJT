const Footer = () => {
    return (
        <>
        <footer>
      
  <div
    className="container"
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      backgroundColor: "#6a0dad",
      color: "#fff",
      padding: "40px",
    }}
  >
    <div
      className="f1"
      style={{
        flex: "1 1 200px",
        margin: "10px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Codeschool</h2>
      <p>Address: silver oak university</p>
    </div>

    <div
      className="f2"
      style={{
        flex: "1 1 200px",
        margin: "10px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Popular Links</h2>
      <ul style={{ listStyle: "none", padding: 0, }}>
        <li style={{margin:"10px 0px"}}><a href="/" style={{ color: "#fff", textDecoration: "none", }}> Home</a></li>
        <li style={{margin:"10px 0px"}}><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>Teaches</a></li>
        <li style={{margin:"10px 0px"}}><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Holidays</a></li>
        <li style={{margin:"10px 0px"}}><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a></li>
      </ul>
    </div>

    <div
      className="f3"
      style={{
        flex: "1 1 200px",
        margin: "10px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Social Profiles</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{margin:"10px 0px"}}><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}><i class="fa-brands fa-youtube"></i> Youtube</a></li>
        <li style={{margin:"10px 0px"}}><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}><i class="fa-brands fa-facebook"></i> Facebook</a></li>
        <li style={{margin:"10px 0px"}}><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}><i class="fa-brands fa-linkedin"></i> Linkedin</a></li>
        <li style={{margin:"10px 0px"}}><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}><i class="fa-brands fa-instagram"></i> Instagram</a></li>
      </ul>
    </div>

    <div
      className="f4"
      style={{
        flex: "1 1 200px",
        margin: "10px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Contact Us</h2>
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <textarea
          placeholder="Your Message"
          required
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            resize: "vertical",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#fff",
            color: "#6a0dad",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</footer>

        </>
    )
}
export default Footer;