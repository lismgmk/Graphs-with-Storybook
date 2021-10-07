import { Story, Meta } from '@storybook/react'
import React from 'react'

import { Graphs, IProps } from '.'

export default {
  title: 'Graphs',
  component: Graphs,
} as Meta

const Template: Story<IProps> = (args) => (
  <div style={{ backgroundColor: 'lightgrey', padding: 24 }}>
    <Graphs {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
