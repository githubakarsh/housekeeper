import { TopNavigation, SideNavigation } from './components';
import AppRouter from './appRouter/AppRouter';

const App = () => {
  return (
    <div >
      <header>
        <TopNavigation />
      </header>
      <main className="main-container">
        <SideNavigation />
        <div className="content-container"><AppRouter /></div>
      </main>
    </div>
  );
}

export default App;
