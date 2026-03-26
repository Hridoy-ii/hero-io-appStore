import { Link } from 'react-router-dom';
import appsData from '../../data/appsData.json';
import AppCard from '../apps/AppCard';

const TopApps = () => {
    // Get top 8 apps for the preview
    const topApps = appsData.slice(0, 8);

    return (
        <section className="container mx-auto px-4 -mt-2">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Trending Apps</h2>
                <p className="text-gray-600 mt-2">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>

            <div className="text-center mt-12">
                <Link to="/apps" className="btn btn-primary px-8 normal-case">
                    Show All
                </Link>
            </div>
        </section>
    );
};

export default TopApps;