import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, Sparkles, Beaker, ArrowRight, ChevronRight } from 'lucide-react';

export const CoursesTab: React.FC = () => {
  return (
    <div className="px-6 space-y-8 animate-fade-in">
      {/* Hero Section */}
      <section className="relative flex flex-col items-start pt-8">
        <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-[10px] tracking-widest uppercase mb-6">
          DIGITAL HUMAN MENTOR
        </span>
        <h2 className="font-headline text-5xl font-black text-primary leading-[0.9] tracking-tighter mb-8 italic">
          跟从大师<br/>成就巅峰销售
        </h2>
        <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 active:scale-95 duration-200 shadow-xl">
          <span>Learn from Master</span>
          <PlayCircle size={24} />
        </button>
      </section>

      {/* Current Demo Card */}
      <section className="relative">
        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-high relative group shadow-2xl">
          <img 
            alt="Lin Jing Mentor" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui90Xo1poBc9rH702XJLo5-mKz8dCPo39mG3maPX18iIl9d1fRoHC7yz3Z6rDL8h5I4gIPvC3SBtFEP4FQDMcbBCag9HBXDQ5Klvo37A-DRHtzqPIQUvmc4BN7k7hteuwANouxdagAPZ143g8PdjuBxtgJmfUfGfHI-a8O4cBfBPcUYe_cpH69E7ANJNNiyt9OPxLrGg_PFNmeUTQ7nigOEdg9uMn4IlCxKIadfV13qQNZHNyJjoo653Q"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface/80 backdrop-blur-xl rounded-2xl border border-white/20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">当前演示</p>
            <p className="text-lg font-bold text-primary">专业级跑鞋销售话术示范</p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Training Modules */}
      <div className="grid grid-cols-1 gap-6">
        {/* Master Sales Pitch */}
        <div className="bg-primary rounded-3xl p-8 text-white flex flex-col justify-between min-h-[320px] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] -mr-32 -mt-32"></div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-secondary" />
              <span className="text-xs tracking-widest font-bold text-surface-container-highest uppercase">MASTER SALES PITCH</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4 tracking-tight">大师级销售话术脚本</h3>
            <p className="text-surface-container-highest text-sm leading-relaxed max-w-md">
              深度解析顾客需求，运用动力学数据支撑，将技术语言转化为感性连接。掌握引导、分析与成交的关键路径。
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">查看完整脚本</button>
            <button className="bg-primary-container text-surface-container-high px-6 py-2 rounded-lg font-bold text-sm">下载 PDF</button>
          </div>
        </div>

        {/* Growth Science */}
        <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between border border-surface-container-highest shadow-sm">
          <div>
            <Beaker size={32} className="text-primary mb-6" />
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">成长科学知识库</h3>
            <p className="text-on-surface-variant text-sm">系统化的运动科学知识体系，从步态分析到材质工艺。</p>
          </div>
          <div className="mt-8 pt-8 border-t border-surface-container-highest flex justify-between items-center">
            <span className="font-bold text-sm">24个核心课题</span>
            <ChevronRight size={20} className="text-secondary" />
          </div>
        </div>
      </div>

      {/* Interactive Quiz */}
      <section className="bg-surface-container-highest rounded-3xl p-8 relative overflow-hidden group shadow-sm">
        <h3 className="font-headline text-3xl font-bold text-primary mb-6">实战模拟测试</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-surface-container-highest shadow-sm">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xs">1</span>
            <span className="text-sm font-medium">如何向入门级跑者推荐 KAYANO 系列？</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-surface-container-highest shadow-sm opacity-60">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-highest text-primary font-bold text-xs">2</span>
            <span className="text-sm font-medium">针对外翻步态，核心推荐逻辑是什么？</span>
          </div>
        </div>
        <button className="mt-8 text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
          <span>开始测试</span>
          <ArrowRight size={20} />
        </button>
      </section>

      {/* Learning Metrics */}
      <section className="bg-white rounded-3xl p-8 shadow-xl border border-surface-container-highest">
        <h3 className="font-headline text-2xl font-bold text-primary mb-8">本周训练进度</h3>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="uppercase tracking-widest text-on-surface-variant">KNOWLEDGE BASE</span>
              <span className="text-primary">85%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[85%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="uppercase tracking-widest text-on-surface-variant">PITCH MASTERY</span>
              <span className="text-secondary">42%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full w-[42%]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
