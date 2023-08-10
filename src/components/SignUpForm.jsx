import { useState } from "react";
export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
// need to add an await below but i'm nto exactly sure where 
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Thank you for your submission");
    try { fetch('https://fsa-jwt-practice.herokuapp.com/signup')
    } catch (error) {
        setError(error.message);
    }
    
  }
  return (

    <div>
      <h2> Sign Up </h2>
      {error && <p> {error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
  }
