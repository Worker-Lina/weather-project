import { memo } from 'react';
import styled from 'styled-components';
import { City } from '../../../entities/City/model/types/city';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { weatherActions } from '../../../entities/Weather/model/slice/weatherSlice';

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height:100%;
    gap: 40px;

    h2{
        font-weight: 600;
        text-align:center;
        max-width: 500px;
    }
`
const Cities = styled.div`
    display:flex;
    gap: 20px;
`
const CityStyled = styled.div`
    padding: 10px 20px;
    font-size: 20px;
    background: #234455;
    border-radius: 8px;
    cursor:pointer;
    transition:.3s;

    &:hover{
        background: #13212b;
    }
`

export const DefaultCitySelect = memo(() => {
    const dispatch = useAppDispatch();

    const cities:City[] = [
        {
            name: "Astana",
            local_names: {
                "th": "อัสตานา",
                "lt": "Astana",
                "ky": "Астана",
                "bo": "ཨ་སི་ཐ་ན།",
                "fi": "Astana",
                "no": "Astana",
                "zh": "努尔-苏丹",
                "ce": "Астана",
                "os": "Астана",
                "cs": "Astana",
                "uz": "Astana",
                "pl": "Astana",
                "kv": "Астана",
                "be": "Астана",
                "fa": "آستانه",
                "mn": "Астана",
                "da": "Astana",
                "uk": "Астана",
                "ku": "Astana",
                "tr": "Astana",
                "hy": "Աստանա",
                "de": "Astana",
                "hi": "अस्ताना",
                "ta": "அஸ்தானா",
                "kk": "Астана",
                "tg": "Остона",
                "tt": "Астана",
                "id": "Astana",
                "eo": "Astana",
                "lv": "Astana",
                "hr": "Astana",
                "pt": "Astana",
                "an": "Astaná",
                "el": "Αστάνα",
                "sv": "Astana",
                "ar": "أستانا",
                "tk": "Astan",
                "am": "አስታና",
                "bn": "আস্তানা",
                "ru": "Астана",
                "sk": "Astana",
                "yi": "אסטאנא",
                "ur": "آستانہ",
                "pa": "ਅਸਤਾਨਾ",
                "he": "אסטנה",
                "nl": "Astana",
                "hu": "Asztana",
                "es": "Astaná",
                "ml": "അസ്താന",
                "ka": "ასტანა",
                "ps": "استانه",
                "en": "Astana",
                "et": "Astana",
                "ks": "آستانہ",
                "gr": "Ἀστάνη",
                "mk": "Астана",
                "sl": "Astana",
                "gl": "Astana",
                "ja": "ヌルスルタン",
                "mr": "अस्ताना",
                "bg": "Астана",
                "az": "Astana",
                "ug": "ئاستانا",
                "it": "Astana",
                "ca": "Astana",
                "is": "Astana",
                "kn": "ಅಸ್ತಾನ",
                "jv": "Astana",
                "ko": "아스타나",
                "sr": "Астана",
                "fr": "Astana"
            },
            lat: 51.1282205,
            lon: 71.4306682,
            country: "KZ",
            state: "Astana"
        },
        {
            name: "Phuket",
            local_names: {
                "en": "Phuket",
                "bn": "ফুকেট",
                "vi": "Phu Kẹt",
                "ko": "푸껫시",
                "th": "ภูเก็ต",
                "hi": "फूकेत",
                "de": "Phuket",
                "fr": "Phuket",
                "he": "פוקט",
                "zh": "普吉市",
                "ja": "プーケット",
                "ru": "Пхукет"
            },
            lat: 7.8847901,
            lon: 98.3891503,
            country: "TH",
            state: "Phuket Province"
        },
    ]

    const handleSelectCity = (city:City) => {
        dispatch(weatherActions.setSelectCity(city));
    }

    return (
        <Container>
            <h2>Введите название города в поле поиска или выберите один из предложенных ниже.</h2>
            <Cities>
                {cities.map(city =>
                    <CityStyled
                        onClick={() => handleSelectCity(city)}
                        key={city.lat}
                    >
                        {city.local_names?.ru ? city.local_names?.ru : city.name}
                    </CityStyled>
                )}
            </Cities>
        </Container>
    );
});