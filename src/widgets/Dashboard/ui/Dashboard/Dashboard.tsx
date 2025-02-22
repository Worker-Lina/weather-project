import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { fetchWeather } from '../../../../entities/Weather/model/services/fetchWeather';
import { getSelectCity } from '../../../../entities/Weather/model/selectors/weatherSelectors';
import { Chart, ChartFilters } from '../../../Chart';

export const Dashboard = memo(() => {
    const selectCity = useSelector(getSelectCity);

    const dispatch = useAppDispatch();

    const weathers = useSelector((state: StateSchema) => state.weather.weathers);

    useEffect(() => {
        if(selectCity){
            dispatch(fetchWeather());
        }
    }, [dispatch, selectCity])

    return (
        <>
            <ChartFilters/>
            {weathers && <Chart
                data={weathers}
            />}
        </>
    );
});
