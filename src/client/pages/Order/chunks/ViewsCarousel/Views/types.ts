export type ComponentPropType = {
    srcImg: any; // TODO: !!
    altImg: string;
    className?: string;
}
export type CommonPreviewAttrsType = { size?: 'lg' | 'md' }
export type CommonPreviewPropsType = (
    props: ComponentPropType & CommonPreviewAttrsType
) => JSX.Element
