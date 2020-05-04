import { Heading, Page, Card, EmptyState } from "@shopify/polaris";
import React, (useState) from 'react';
import(ResourcePicker)from '@shopify/app-bridge-react'

const [modal, setModal] = useState({ open: false })

const Index = () => (
  <Page>
    <EmptyState
      heading="Really really great app"
      action={{ content: 'Create Draft Order' }}
      secondaryAction={{ content: 'Learn more', url: 'https://help.shopify.com' }}
      image="https://uploads-ssl.webflow.com/5ea876815430d2b8101a957e/5ea9f68d8f3cb774668dd78c_Screenshot%202020-04-29%2017.48.35.png"
    >
      <p>Track and receive your incoming inventory from suppliers.</p>
    </EmptyState>
  </Page>
);


export default Index;
