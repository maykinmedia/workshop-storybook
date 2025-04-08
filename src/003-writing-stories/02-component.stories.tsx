import type {Meta, StoryObj} from '@storybook/react';

import Greeting from './Greeting';

export default {
    title: 'Writing stories / Component stories',
    // component: Greeting,
    args: {
        // fullName: 'Muis',
    },
} satisfies Meta<typeof Greeting>;

type Story = StoryObj<typeof Greeting>;

export const ComponentIntrospection: Story = {};
