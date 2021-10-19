import { Switch, Route } from 'react-router-dom';
import AssetsPage from '../pages/assetsPage/AssetsPage';
import Comparer from '../pages/comparer/Comparer';
import EmergencyContactPage from '../pages/emergencyContact/EmergencyContact';

const AppRouter = () => {
    return <Switch>
        <Route path="/" component={AssetsPage} exact/>
        <Route path="/comparer" component={Comparer} />
        <Route path="/emergency-contact" component={EmergencyContactPage} />
    </Switch>
}

export default AppRouter;
