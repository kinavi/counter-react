export type IconProps = {
    width: string;
    height: string;
    fill: string;
}
export type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
// 'sm' | 'md' | 'bs'

export type WithSizePropsType = {
    size?: SizeType;
    fill?: string;
}
