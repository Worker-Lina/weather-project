import { memo, useCallback, useRef } from 'react';
import { Input } from '../../../shared/ui/Input';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers/StoreProvider';
import { fetchCities } from '../../../entities/City/model/services/fetchCities';
import { getCitySearch } from '../../../entities/City/model/selectors/citySelectors';
import { useDebounce } from '../../../shared/lib/hooks/useDebounce/useDebounce';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDetectOutsideClick } from '../../../shared/lib/hooks/useDetectOutsideClick/useDetectOutsideClick';
import { cityActions } from '../../../entities/City';
import { City } from '../../../entities/City/model/types/city';
import { weatherActions } from '../../../entities/Weather/model/slice/weatherSlice';

const SelectCityStyled = styled.div`
    position:relative;
    width: 100%;
    max-width: 600px;
`

const Dropdown = styled.div`
    position: absolute;
    top:45px;
    left:0;
    width: 100%;
    border-radius: 8px;
    background: #ffffffdb;
    overflow:hidden;

`
const DropdownItem = styled.div`
    padding: 10px 20px;
    color: #191919;
    cursor: pointer;
    transition: .3s;
    &:hover{
        background: #5a82978f;
    }
`

export const SelectCity = memo(() => {
    const search = useSelector(getCitySearch);

    const dropdown = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdown as React.RefObject<HTMLDivElement>, false);

    const dispatch = useAppDispatch();
    const cities = useSelector((state: StateSchema) => state.city.cities);
    
    const fetchData = useCallback(() => {
        dispatch(fetchCities());
    }, [dispatch]);
    
    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(cityActions.setSearch(search));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );
    
    const handleSelectCity = (city:City) => {
        setIsActive(false);
        dispatch(weatherActions.setSelectCity(city));
    }

    return (
        <SelectCityStyled ref={dropdown}>
            <div onClick={() => setIsActive(true)}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                />
            </div>
            {(cities && isActive) &&
                <Dropdown>
                    {cities?.map((city, index) =>
                        <DropdownItem
                            onClick={() => handleSelectCity(city)}
                            key={`city.name${index}`}
                        >{city.local_names?.ru ? city.local_names?.ru : city.name}, {city.country}</DropdownItem>
                    )}
                </Dropdown>
            }
        </SelectCityStyled>
    );
});