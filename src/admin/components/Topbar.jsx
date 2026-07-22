import "./Topbar.css";
import { auth } from "../../firebase";

export default function Topbar() {

  const user = auth.currentUser;

  return (

    <header className="admin-topbar">

      <div>

        <h2>Admin Panel</h2>

        <p>
          Welcome back,
          <span>
            {" "}
            {user?.displayName || user?.email}
          </span>
        </p>

      </div>

    </header>

  );

}