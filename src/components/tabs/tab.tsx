export type TabProps = {
  name: string;
  children: JSX.Element;
};

export const Tab = ({ children }: TabProps) => children;
