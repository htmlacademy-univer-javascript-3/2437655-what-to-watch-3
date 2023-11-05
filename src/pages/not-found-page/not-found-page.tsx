import {Link} from 'react-router-dom';

export function NotFoundPage(): JSX.Element{
  return (
    <div>
      <h2>404 Page not found</h2>
      <Link to="/">Back to main page</Link>
    </div>
  );
}
