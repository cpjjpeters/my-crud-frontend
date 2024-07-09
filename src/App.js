import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("api/groups")
      .then((response) => response.json())
      .then((data) => {
        setGroups(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>Groups</h2>
          {groups.map((group) => (
            <div key={group.id}>{group.name}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
