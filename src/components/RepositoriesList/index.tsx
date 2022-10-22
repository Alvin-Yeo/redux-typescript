import { useTypedSelector } from "../../hooks/useTypedSelector";

const RepositoriesList = () => {
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading &&
        !error &&
        data.map((name, index) => <p key={index}>{name}</p>)}
    </>
  );
};

export default RepositoriesList;
