import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
  args: { onClick: () => console.log("Button clicked") },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "기본 버튼",
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "위험 버튼",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "아웃라인 버튼",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "보조 버튼",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "고스트 버튼",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "링크 버튼",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "작은 버튼",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "큰 버튼",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    children: "📦",
    size: "icon",
  },
};
