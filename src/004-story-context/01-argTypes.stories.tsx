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
        // children: {control: {disable: true}},
        // children: {control: 'text'},
        // modifiers: {
        //     control: {type: 'check'},
        //     options: ['padded', 'shadow', 'compact'],
        // },
        // ignoredInArgTypesMDX: {table: {disable: true}},
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
