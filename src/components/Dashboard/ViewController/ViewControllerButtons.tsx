import { FC } from 'react';
import Button from '../../ui/Button';

type DashboardControlButtonType = {
  title: string;
  active: boolean;
};

interface DashboardControlButtonsProps {
  dashboardViews: DashboardControlButtonType[];
}

const ViewControllerButtons: FC<DashboardControlButtonsProps> = ({
  dashboardViews,
}) => {
  return (
    <ul className="flex gap-4">
      {dashboardViews.map((view, idx) => (
        <li key={idx}>
          <Button
            variant={view.active ? 'text' : 'blank'}
            onClick={() => console.log('Button Clicked!')}
            text={view.title}
            style={
              view.active
                ? 'bg-[#242424]'
                : 'border-opacity-0 hover:bg-[#242424] hover:border-opacity-100'
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ViewControllerButtons;
