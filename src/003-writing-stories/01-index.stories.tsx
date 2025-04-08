import type {Meta, StoryObj} from '@storybook/react';

import Greeting from './Greeting';

interface Args {
    name: string;
}

export default {
    title: 'Writing stories / Render function',
    args: {
        name: 'Willy',
    },
} satisfies Meta<Args>;

type Story = StoryObj<Args>;

export const RenderFunction: Story = {
    name: 'Simple render function',
    render: () => <>I am a render function!</>,
}

export const RenderFunctionWithArgs: Story = {
    render: (args) => <div>...</div>,
    args: {
        name: 'Maxima',
    }
}

export const RenderGreeting: Story = {
};
