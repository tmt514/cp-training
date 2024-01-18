import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LocalButton from '@site/src/components/local-button';
import DisplayProgress from '@site/src/components/display-progress';


export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  // Highlight,
  Tabs,
  TabItem,
  LocalButton,
  DisplayProgress,
};