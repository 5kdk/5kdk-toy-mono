import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명 텍스트입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드 내용이 여기에 들어갑니다. 다양한 정보를 표시할 수 있습니다.</p>
      </CardContent>
      <CardFooter>
        <p>카드 하단 내용</p>
      </CardFooter>
    </Card>
  ),
};

export const OnlyContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>헤더나 푸터 없이 내용만 표시하는 심플한 카드입니다.</p>
      </CardContent>
    </Card>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>긴 내용의 카드</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          이 카드는 더 많은 내용을 가지고 있습니다. 여러 줄에 걸쳐 텍스트가 표시되며, 카드의 크기가
          내용에 맞게 조정됩니다. 사용자 인터페이스에서 다양한 정보를 구조화된 방식으로 표시하는 데
          카드 컴포넌트가 유용합니다.
        </p>
      </CardContent>
    </Card>
  ),
};
