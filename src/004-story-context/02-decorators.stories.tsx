import type {Meta, StoryObj, Decorator} from '@storybook/react';

import Greeting from '../003-writing-stories/Greeting';
import Card from './Card';

interface Args extends React.ComponentPropsWithoutRef<typeof Greeting> {
    // TODO for `FancyDecorator``
}

// Implement me!
const withCard: Decorator<Args> = () => <div>TODO</div>;

export default {
    title: 'More about stories / decorators & parameters',
    component: Greeting,
    args: {
        fullName: 'Perry the Platypus',
    },
} satisfies Meta<Args>;

type Story = StoryObj<Args>;

export const SimpleDecorator: Story = {
    decorators: [withCard],
};

// Implement me!
const fancyWithCard: Decorator<Args> = () => <div>TODO</div>;

export const FancyDecorator: Story = {
    decorators: [fancyWithCard],
    args: {
        cardTitle: 'A controllable title',
        isPadded: true,
        hasShadow: true,
    },
};

// Implement me!
const withCardParameters: Decorator<React.ComponentPropsWithoutRef<typeof Greeting>> = () => (
    <div>TODO</div>
);

export const FancyDecoratorParameters: Story = {
    decorators: [withCardParameters],
    parameters: {
        card: {
            title: 'Card title via parameters',
            modifiers: ['padded', 'shadow'],
        },
    },
};
