import React from 'react';
import { Tab } from '../types';
import { Menu, User, BookOpen, Award, Bot } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentTab, setCurrentTab }) => {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container-highest">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-screen-2xl mx-auto">
          <button className="text-primary p-2 hover:bg-surface-container rounded-full transition-all">
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-black tracking-tighter text-primary font-headline uppercase">
            ASICS MASTER AI
          </h1>
          <button className="p-1 border border-surface-container-highest rounded-full overflow-hidden transition-all">
            <img 
              alt="User" 
              className="w-8 h-8 object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui90Xo1poBc9rH702XJLo5-mKz8dCPo39mG3maPX18iIl9d1fRoHC7yz3Z6rDL8h5I4gIPvC3SBtFEP4FQDMcbBCag9HBXDQ5Klvo37A-DRHtzqPIQUvmc4BN7k7hteuwANouxdagAPZ143g8PdjuBxtgJmfUfGfHI-a8O4cBfBPcUYe_cpH69E7ANJNNiyt9OPxLrGg_PFNmeUTQ7nigOEdg9uMn4IlCxKIadfV13qQNZHNyJjoo653Q"
              referrerPolicy="no-referrer"
            />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-32">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-2xl bg-surface/80 backdrop-blur-xl border-t border-surface-container-highest px-4 py-3 pb-safe shadow-lg">
        <div className="flex justify-around items-center w-full max-w-screen-xl mx-auto">
          <NavItem 
            icon={<Bot size={24} />} 
            label="数字人" 
            active={currentTab === 'digital-human'} 
            onClick={() => setCurrentTab('digital-human')} 
          />
          <NavItem 
            icon={<BookOpen size={24} />} 
            label="课程" 
            active={currentTab === 'courses'} 
            onClick={() => setCurrentTab('courses')} 
          />
          <NavItem 
            icon={<Award size={24} />} 
            label="认证" 
            active={currentTab === 'certification'} 
            onClick={() => setCurrentTab('certification')} 
          />
          <NavItem 
            icon={<User size={24} />} 
            label="我的" 
            active={currentTab === 'profile'} 
            onClick={() => setCurrentTab('profile')} 
          />
        </div>
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-xl transition-all duration-300 active:scale-90 ${
        active ? 'bg-surface-container-low text-secondary' : 'text-on-surface/60 hover:text-secondary'
      }`}
    >
      {icon}
      <span className="text-[10px] font-bold tracking-widest uppercase mt-0.5">{label}</span>
    </button>
  );
};
