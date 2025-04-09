import type {Meta, StoryObj} from '@storybook/react';
import {expect, fn, within} from '@storybook/test';

import Form from './Form';

export default {
    title: 'Advanced / Interaction tests',
    component: Form,
    args: {
        onSubmit: fn(),
    }
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const InteractionTests: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);

        // implement me!
    },
};
