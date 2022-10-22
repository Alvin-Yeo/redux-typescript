import { Provider } from "react-redux";
import { store } from "../../redux";
import RepositoriesList from "../RepositoriesList";
import RepositoriesSearch from "../RepositoriesSearch";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RepositoriesSearch />
      <RepositoriesList />
    </Provider>
  );
};

export default App;
