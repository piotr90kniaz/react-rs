import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/UI';
import { NotificationProvider, VariablesProvider } from './context';
import { Dashboard } from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <VariablesProvider>
          <ErrorBoundary>
            <Layout>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Redirect to="/dashboard" />
              </Switch>
            </Layout>
          </ErrorBoundary>
        </VariablesProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
};

export default App;
