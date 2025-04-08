export interface GreetingProps {
    fullName: string;
}

const Greeting: React.FC<GreetingProps> = ({fullName}) => (
    <div>
        <h1>Hi {fullName}</h1>
        <p>Don't forget to hydrate!</p>
    </div>
);

export default Greeting;
