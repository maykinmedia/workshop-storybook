import { useState } from 'react';

import Greeting from '../003-writing-stories/Greeting';
import Card from '../004-story-context/Card';

interface Values {
    name: string;
    amount: number;
}

export interface FormProps {
    onSubmit: (values: Values) => void | Promise<void>;
}

const Form: React.FC<FormProps> = ({onSubmit}) => {
    const [values, setValues] = useState<Values>({
        name: 'Engelbert Humperdinck',
        amount: 1,
    });

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
            <h1>Interaction</h1>

            <form
                onSubmit={async e => {
                    e.preventDefault();
                    await onSubmit(values);
                }}
                style={{display: 'flex', gap: '1em', flexDirection: 'column'}}
            >
                <FormRow>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name || ''}
                        onChange={e => {
                            setValues({...values, name: e.target.value});
                        }}
                        style={{padding: '.4em'}}
                    />
                </FormRow>

                <FormRow>
                    <label htmlFor="amount">Number of preview items</label>
                    <input
                        type="number"
                        min={1}
                        max={10}
                        step={1}
                        id="amount"
                        name="amount"
                        value={values.amount || '1'}
                        onChange={e => {
                            setValues({...values, amount: parseInt(e.target.value) || 1});
                        }}
                        style={{padding: '.4em'}}
                    />
                </FormRow>
            </form>

            {
                Array.from({length: values.amount}, (_, index) => (
                    <Card title={`Preview ${index + 1}`} modifiers={['padded', 'compact', 'shadow']}>
                        <Greeting fullName={values.name} />
                    </Card>
                ))
            }
        </div>
    );
};

const FormRow: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div style={{display: 'flex', gap: '2em', alignItems: 'center'}}>
        {children}
    </div>
);

export default Form;
