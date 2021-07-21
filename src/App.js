import { useEffect, useState } from 'react';
import Header from './components/header/header.component';
import Wrapper from './components/wrapper/wrapper.component';
import Switch from './components/switch/switch.component';
import data from './data.json';
import TopCardList from './components/top-card/card-list/top-card-list.component';
import OverViewList from './components/overview-card/overview-list/overview-list.component';
import './app.css';

function App() {
  const [socialMediaStats] = useState(data);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const colorScheme = isDarkMode ? 'dark-mode' : 'light-mode';

  function handleMatchMedia(mqList) {
    setDarkMode(mqList.matches);
    setChecked(mqList.matches);
  }

  useEffect(() => {
    const mqList = window.matchMedia('(prefers-color-scheme: dark)');
    mqList.addEventListener('change', handleMatchMedia);
    setDarkMode(mqList.matches);
    setChecked(mqList.matches);
    return () => {
      mqList.removeEventListener('change', handleMatchMedia);
    };
  }, []);

  return (
    <div className={`dashboard-app ${colorScheme}`}>
      <Wrapper>
        <Header>
          <Switch
            setDarkMode={setDarkMode}
            isChecked={isChecked}
            setChecked={setChecked}
          />
        </Header>
        <main>
          <TopCardList stats={socialMediaStats.stats_social_media} />
          <OverViewList stats={socialMediaStats.stats_grow} />
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
