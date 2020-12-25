export type TaskFieldPropsType = {
    iconRight: JSX.Element;
    value: string;
    onChange(value: string): void;
    onSave(): void;
    iconLeft?: JSX.Element;
    onRemove?(): void;
    placeholder?: string;
}
