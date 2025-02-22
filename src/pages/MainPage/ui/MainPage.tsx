import { memo } from 'react';
import { TopBar } from '../../../shared/ui/TopBar';
import { Container } from '../../../shared/ui/Container';
import { SelectCity } from '../../../features/selectCity';
import { Dashboard } from '../../../widgets/Dashboard';
import { useSelector } from 'react-redux';
import { getSelectCity } from '../../../entities/Weather/model/selectors/weatherSelectors';
import { DefaultCitySelect } from '../../../features/defaultCitySelect';

const MainPage = memo(() => {
    const selectCity = useSelector(getSelectCity);
    return (
        <Container>
            <TopBar/>
            <SelectCity/>
            {selectCity ?
                <Dashboard/>
                :
                <DefaultCitySelect/>
            }
        </Container>
    );
});

export default MainPage;