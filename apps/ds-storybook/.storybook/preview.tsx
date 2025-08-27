import type { Preview } from "@storybook/react";
// import React from "react";
import "@repo/ds/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <div className="font-sans">
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export default preview;
