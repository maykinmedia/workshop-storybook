import type {Meta, StoryObj} from '@storybook/react';
import Card from './Card';

export default {
    title: 'More about stories / argTypes',
    component: Card,
    args: {
        title: 'A string title',
        children: <p>A JSX body, which looks quite horrible with the default controls.</p>,
    },
    argTypes: {

    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Padded: Story = {
    args: {
        modifiers: ['padded'],
    },
};

export const PaddedWithShadow: Story = {
    args: {
        modifiers: ['shadow', 'padded', 'compact'],
    },
};
