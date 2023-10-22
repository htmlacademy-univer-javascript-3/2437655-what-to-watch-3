import {MainPage, MainPageProps} from '../../pages/main-page/main-page.tsx';

export type AppProps = {
    mainPageProps: MainPageProps;
}

export function App({mainPageProps}: AppProps): JSX.Element{
  return (
    <MainPage {...mainPageProps}/>
  );
}
