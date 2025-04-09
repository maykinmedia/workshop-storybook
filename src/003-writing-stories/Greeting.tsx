export interface GreetingProps {
    fullName: string;
}

const Greeting: React.FC<GreetingProps> = ({fullName}) => (
    <div>
        <h3>Hi {fullName}</h3>
        <p>Don't forget to hydrate!</p>
    </div>
);

export default Greeting;
