import { RepositoryItem } from "../repositoryItem";
import "../../styles/repositories.scss";
import { useEffect, useState } from "react";

interface repository {
  name: string;
  html_url: string;
  description: string;
}

export function RepositoryList() {
  // https://github.com/orgs/rocketseat/repos

  const [list, setList] = useState<repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((json) => {
        var lista = json.slice(0, 10);
        setList(lista);
      })
      .catch((err) => console.log("Erro de solicitação", err));
  }, []);

  console.log(list);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {list.map((repository, key) => (
          <RepositoryItem key={key} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
