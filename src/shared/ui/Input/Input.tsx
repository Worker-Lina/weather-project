import { InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
}

const InputStyle = styled.input`
    border: 1px solid #efefef;
    height: 44px;
    outline: none;
    border-radius: 8px;
    padding: 0 20px;
    width: 100%;
    background: #ffffffdb;
`;

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <InputStyle 
            className={className}
            placeholder='Город'
            value={value}
            onChange={onChangeHandler}
        />
        
    );
});