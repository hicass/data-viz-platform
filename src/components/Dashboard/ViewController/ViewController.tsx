import { FC } from 'react';
import DashboardControlButtons from './ViewControllerButtons';
import SearchBar from '../../ui/SearchBar';

const dashboardViews = [
  { title: 'Charging Stations', active: true },
  { title: 'Fleet Sizing', active: false },
  { title: 'Parking', active: false },
];

const ViewController: FC = () => {
  return (
    <section className="flex flex-col sm:flex-row p-4 justify-between gap-6 text-sm">
      <DashboardControlButtons dashboardViews={dashboardViews} />

      <div>
        <SearchBar />
      </div>
    </section>
  );
};

export default ViewController;
