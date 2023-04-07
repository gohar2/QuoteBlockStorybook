import React from 'react';
import { ThemeContextBrandA, ThemeContextBrandB } from '../contexts/ThemeContext';
import QuoteBlock from '../container/QuoteBlock';
export default {
  title: 'QuoteBlock',
  component: QuoteBlock,
  argTypes: {
    underline: { control: 'boolean' },
  },
};

const Template = (args) => <QuoteBlock {...args} />;
export const BrandA = Template.bind({});
BrandA.args = {
  title: 'Possit etimam',
  subTitle: 'Morbi eget efficitur nunc.',
  quote: "A staycation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free watersports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained.",
  ctaText: 'Buy ticket',
  containerBackground: '#ffffff',
  texBoxBackground: '#ffffff',
  textColor: '#282828',
  ctaTextColor: '#ffffff',
  story: "BrandA"
}
BrandA.argTypes = {
  ...BrandA.argTypes,
  containerBackground: { control: 'select', options: ['#ffffff', '#FAF5EB'] },
  texBoxBackground: { control: 'select', options: ['#ffffff', '#FAF5EB'] },
  textColor: { control: 'select', options: ['#282828', '#ffffff'] },
};
BrandA.decorators = [
  (Story) => (
    <ThemeContextBrandA.Provider value={ThemeContextBrandA._currentValue}>
      <Story />
    </ThemeContextBrandA.Provider>
  ),
];

export const BrandB = Template.bind({});
BrandB.args = {
  title: 'Possit etimam',
  subTitle: 'Morbi eget efficitur nunc.',
  quote: "A staycation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free watersports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained.",
  ctaText: 'Buy ticket',
  containerBackground: '#F6F6F6',
  texBoxBackground: '#ffffff',
  textColor: '#282828',
  ctaTextColor: '#ffffff',
  story: "BrandB"
}
BrandB.argTypes = {
  ...BrandB.argTypes,
  containerBackground: { control: 'select', options: ['#F6F6F6', '#E6F1FA'] },
  texBoxBackground: { control: 'select', options: ['#ffffff', '#F6F6F6', '#E6F1FA', '#0057B7'] },
  textColor: { control: 'select', options: ['#282828', '#ffffff', '#000000'] },
};
BrandB.decorators = [
  (Story) => (
    <ThemeContextBrandA.Provider value={ThemeContextBrandA._currentValue2}>
      <Story />
    </ThemeContextBrandA.Provider>
  ),
];




