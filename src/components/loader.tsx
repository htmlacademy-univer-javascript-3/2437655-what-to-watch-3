import { FidgetSpinner } from 'react-loader-spinner';
import { ReactNode } from 'react';

type LoaderProps = {
  isLoading: boolean;
  children: ReactNode;
};
export const Loader = ({ isLoading, children }: LoaderProps) => {
  const loader = (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <FidgetSpinner
        height={100}
        width={100}
        ariaLabel="fidget-spinner-loading"
        visible
      />
    </div>
  );
  return <> {isLoading ? loader : children} </>;
};
