type ActionBarType = {
  title?: string;
  children?: React.ReactNode | React.ReactElement;
};

const ActionBar = ({ title, children }: ActionBarType) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
