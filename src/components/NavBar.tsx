function Navbar() {
  return (
    <>
      <div className="logo">BudgeIT</div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Download</li>
        </ul>
      </div>
      <div className="user-actions">
        <button className="btn login">Login</button>
        <button className="btn signup">Signup</button>
      </div>
    </>
  );
}

export default Navbar;
