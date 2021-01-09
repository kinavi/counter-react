export type FieldPropsType = {
    dataId?: string;
} & FieldType

export type FieldType = {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder: string;
    mix?: string;
    isRequired?: boolean;
    Icon?: JSX.Element;
    hasError?: string;
}
