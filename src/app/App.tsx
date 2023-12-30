import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";


export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', [theme], {})}>
      <Navbar />
      <div className={"page-content"}>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
