export interface CardProps {
    /**
     * Title displayed at the top
     */
    title: React.ReactNode;
    /**
     * Body content
     */
    children: React.ReactNode;
    /**
     * Appearance modifiers
     */
    modifiers?: Array<'padded' | 'shadow' | 'compact'>;
    ignoredInArgTypesMDX?: false;
}

const Card: React.FC<CardProps> = ({title, children, modifiers = []}) => {
    const isPadded = modifiers.includes('padded');
    const withShadow = modifiers.includes('shadow');
    const isCompact = modifiers.includes('compact');
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: isCompact ? '0.2em' : '1em',
            padding: isPadded ? '1em' : 0,
            border: 'solid 1px rgba(0, 0, 0, 0.25)',
            boxShadow: withShadow ? '2px 2px 5px 0 rgba(0, 0, 0, 0.2)' : undefined,
        }}>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Card;
