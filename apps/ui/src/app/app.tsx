import { SWRConfig } from 'swr';
import styles from './app.module.scss';
import logo from '../assets/images/y-combinator-logo.png';
import StoryList from './story-list/StoryList';
import ErrorBoundary from './ErrorBoundary';
import { fetcher } from './utils/api';

export function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <div className={styles.app}>
        <header>
          <img width="40" height="40" src={logo} alt="Hacker News" />
          <h1>Hacker news</h1>
        </header>
        <main>
          <ErrorBoundary>
            <StoryList />
          </ErrorBoundary>
        </main>
      </div>
    </SWRConfig>
  );
}

export default App;
