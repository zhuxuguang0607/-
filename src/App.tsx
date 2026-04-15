import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { HomeTab } from './components/HomeTab';
import { CoursesTab } from './components/CoursesTab';
import { CertificationTab } from './components/CertificationTab';
import { ProfileTab } from './components/ProfileTab';
import { Tab } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('digital-human');

  const renderTab = () => {
    switch (currentTab) {
      case 'digital-human':
        return <HomeTab />;
      case 'courses':
        return <CoursesTab />;
      case 'certification':
        return <CertificationTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <Layout currentTab={currentTab} setCurrentTab={setCurrentTab}>
      {renderTab()}
    </Layout>
  );
}
