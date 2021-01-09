export type ButtonPropsType = {
    onClick: () => void;
    children: JSX.Element | JSX.Element[] | string;
    isHidden?: boolean;
    isBlocked?: boolean;
    mix?: string;
    className?: string;
}
