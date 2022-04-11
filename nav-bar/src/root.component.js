import { navigateToUrl } from "single-spa";

export default function Root(props) {

  const navigateTo = (path) => {
    navigateToUrl(path);
  }

  return (
    <ul>
      <li>
        <label onClick={() => navigateTo('/main')}>
            Main
        </label>
      </li>
      <li>
        <label onClick={() => navigateTo('/seccond')}>
            Seccond
        </label>
      </li>
    </ul>
  );
}
