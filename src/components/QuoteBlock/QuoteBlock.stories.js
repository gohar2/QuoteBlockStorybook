import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import QuoteBlock from './QuoteBlock';

export default {
  title: 'QuoteBlock',
  component: QuoteBlock,
  argTypes: {
    title: { control: 'text' },
    underline: { control: 'boolean' },
    bgConfig: { control: 'color' },
    textBoxBgColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

const Template = (args) => <QuoteBlock {...args} />;

const quote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export const BrandA = Template.bind({});
BrandA.args = {
  title: 'Brand A',
  quote,
  ctaText: 'Call to Action',
};
BrandA.decorators = [
  (Story) => (
    <ThemeContext.Provider value={ThemeContext._currentValue}>
      <Story />
    </ThemeContext.Provider>
  ),
];

export const BrandB = Template.bind({});
BrandB.args = {
  title: 'Brand B',
  quote,
  ctaText: 'Call to Action',
};
BrandB.decorators = [
  (Story) => (
    <ThemeContext.Provider value={ThemeContext._currentValue2}>
      <Story />
    </ThemeContext.Provider>
  ),
];