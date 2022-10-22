import { useState } from "react";
import { useActions } from "../../hooks/useActions";

const RepositoriesSearch: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <>
      <h1>Search for a package:</h1>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </>
  );
};

export default RepositoriesSearch;
