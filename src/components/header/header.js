import "./header.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <a class="navbar-brand me-auto" href="#">
        Todo
      </a>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Add Todo
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Add random task
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
