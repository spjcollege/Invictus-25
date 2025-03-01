import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Medication Adherence Companion</h1>
            <p>Track your medications easily and stay on schedule.</p>
            <Link to="/register">Get Started</Link>
        </div>
    );
}

export default Home;
