export interface TabProps {
  label: string;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = (props) => null;

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export const Tabs: React.FC<TabsProps> = ({ children: tabs }) => {
  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button key={tab.props.label}>{tab.props.label}</button>
        ))}
      </div>
      <div>
        {
          // ...
        }
      </div>
    </div>
  );
};
