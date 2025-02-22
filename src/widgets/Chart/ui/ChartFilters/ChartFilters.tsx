import { memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getWeatherType } from '../../../../entities/Weather/model/selectors/weatherSelectors';
import { weatherActions } from '../../../../entities/Weather/model/slice/weatherSlice';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch/useAppDispatch';

interface TabProps {
    active: boolean;
}

const Tab = styled.div`
    display:flex;
    gap:2px;
`
const TabItem = styled.div<TabProps>`
    padding: 10px 20px;
    cursor:pointer;
    transition: .3s;
    background: ${(props) => (props.active ? "#234455" : "transparent")};

    &:hover{
        background: #234455;
    }
`

interface TabItem {
    value: string,
    content: string,
}

export const ChartFilters = memo(() => {
    const selectType = useSelector(getWeatherType);

    const dispatch = useAppDispatch();

    const types:TabItem[] = [
        {
            value: 'temp',
            content: 'Температура',
        },
        {
            value: 'pressure',
            content: 'Давление',
        },
        {
            value: 'humidity',
            content: 'Влажность',
        },
        {
            value: 'wind_speed',
            content: 'Ветер',
        },
    ]

    const handleClick = (type:TabItem) => {
        dispatch(weatherActions.setType(type.value));
    }

    return (
        <Tab>
            {types.map(type =>
                <TabItem
                    onClick={() => handleClick(type)}
                    key={type.value}
                    active={type.value === selectType}
                >{type.content}</TabItem>
            )}
        </Tab>
    );
});