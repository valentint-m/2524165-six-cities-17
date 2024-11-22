import CitiesListScreen from '../../pages/cities-list-screen/cities-list-screen';

type AppScreenProps = {
  offersCount: number;
}

function App ({offersCount}: AppScreenProps): JSX.Element {
  return (
    <CitiesListScreen offersCount={offersCount} />
  );
}

export default App;
