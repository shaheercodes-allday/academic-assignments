import { useEffect } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, []);

  return (
    <div>
      <h1>Welcome to Libxcel - NSBT</h1>
      <p>Your one-stop solution for library management.</p>
    </div>
  )
}

export default HomePage