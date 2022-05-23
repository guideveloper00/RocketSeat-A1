interface repositoryProps {
  repository: {
    name: string;
    html_url: string;
    description: string;
  };
}

export function RepositoryItem(props: repositoryProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
