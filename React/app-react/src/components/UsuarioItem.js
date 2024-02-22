function UsuarioItem({ usuario }) {
  return (
    <li>
      <h3>{usuario.id}</h3>
      <div>{usuario.name}</div>
    </li>
  );
}

export default UsuarioItem;
