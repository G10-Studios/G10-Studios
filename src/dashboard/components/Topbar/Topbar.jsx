import "./Topbar.css";

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="topbar-right">
        <span>Welcome 👋</span>
      </div>
    </header>
  );
}

export default Topbar;