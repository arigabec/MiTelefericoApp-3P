import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Outlet/>
        </div>
    );
};

export default HomePage;