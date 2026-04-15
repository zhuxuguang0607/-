import React from 'react';
import { Settings, Timer, BarChart3, GraduationCap, Heart, Award, Sliders, MessageSquare, ChevronRight, ArrowRight } from 'lucide-react';

export const ProfileTab: React.FC = () => {
  return (
    <div className="px-6 space-y-12 animate-fade-in pb-12">
      {/* Profile Header Section */}
      <section className="relative flex flex-col items-center text-center md:flex-row md:items-end md:text-left gap-6 pt-8">
        <div className="relative group">
          <div className="w-32 h-32 rounded-xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-105">
            <img 
              className="w-full h-full object-cover" 
              alt="Lin Jing" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVc97p6qdROQ7vLydjihWAeNhfylEYIHkDmPt88EazX7dq5wEnaDTDiDyWcZlbuAO8WjTitOoNzuXrgQntLEy18O4DPLgZcVnwJX9NkwgB3zgHanxHtMQw1OCxXG40ufDus3ErxxWSkyTOUZdLpkPknIgerL8axw-bzv1LwOK5-PbYrthWWBShiyi03hj6xxVnuZlOcKmumvE3FKsxTu0iUtpnUXtkfXJ_p0b7HLs6HqNpj-_68haRR12xSpq0YYgKr0Dz_Ehm_qg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-1.5 rounded-lg shadow-lg">
            <Award size={16} className="fill-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2">
            <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight">林静</h2>
            <span className="font-label text-xs font-bold tracking-[0.05em] uppercase text-secondary bg-secondary/10 px-3 py-1 rounded-full">Senior Sales Specialist</span>
          </div>
          <p className="mt-2 text-on-surface-variant font-medium">工号: AS-20240801 | 华东区旗舰店</p>
        </div>
        <button className="absolute top-0 right-0 p-2 text-primary hover:bg-surface-container rounded-full transition-all">
          <Settings size={24} />
        </button>
      </section>

      {/* Metrics Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Learning Hours */}
        <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group hover:bg-white transition-all border border-surface-container-highest shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-8 -mt-8 rounded-full"></div>
          <div className="relative">
            <Timer size={24} className="text-primary mb-4" />
            <h3 className="text-[10px] font-bold tracking-[0.05em] uppercase text-on-surface-variant mb-1">Learning Hours</h3>
            <div className="flex items-baseline gap-2">
              <span className="font-headline font-black text-4xl text-primary">128</span>
              <span className="text-on-surface-variant text-sm">Hrs</span>
            </div>
            <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[75%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Sales Performance Index */}
        <div className="bg-primary text-white p-6 rounded-xl relative overflow-hidden group hover:opacity-95 transition-all shadow-xl">
          <div className="absolute bottom-0 right-0 p-4 opacity-10 transform translate-y-4 translate-x-4">
            <BarChart3 size={120} />
          </div>
          <div className="relative">
            <BarChart3 size={24} className="text-secondary mb-4" />
            <h3 className="text-[10px] font-bold tracking-[0.05em] uppercase text-surface-container-highest mb-1">Sales Performance Index</h3>
            <div className="flex items-baseline gap-2">
              <span className="font-headline font-black text-4xl">94.2</span>
              <span className="text-surface-container-highest text-sm">/ 100</span>
            </div>
            <p className="mt-4 text-xs font-medium text-surface-container-highest">超越了全店 92% 的员工</p>
          </div>
        </div>

        {/* Course Completions */}
        <div className="bg-surface-container-highest p-6 rounded-xl relative overflow-hidden group hover:bg-white transition-all border border-surface-container-highest shadow-sm">
          <div className="relative">
            <GraduationCap size={24} className="text-secondary mb-4" />
            <h3 className="text-[10px] font-bold tracking-[0.05em] uppercase text-on-surface-variant mb-1">Course Completions</h3>
            <div className="flex items-baseline gap-2">
              <span className="font-headline font-black text-4xl text-primary">24</span>
              <span className="text-on-surface-variant text-sm">Courses</span>
            </div>
            <div className="mt-4 flex gap-1">
              <div className="h-1 flex-1 bg-secondary rounded-full"></div>
              <div className="h-1 flex-1 bg-secondary rounded-full"></div>
              <div className="h-1 flex-1 bg-secondary rounded-full"></div>
              <div className="h-1 flex-1 bg-on-surface-variant/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation List & Action Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main List */}
        <div className="lg:col-span-7 space-y-2">
          <h4 className="font-headline font-bold text-xl text-primary mb-6">我的成就与设置</h4>
          <NavItem icon={<Heart size={20} />} label="我的收藏" />
          <NavItem icon={<Award size={20} />} label="我的证书" />
          <NavItem icon={<Sliders size={20} />} label="个性化设置" />
          <NavItem icon={<MessageSquare size={20} />} label="意见反馈" />
        </div>

        {/* Kinetic Side Card */}
        <div className="lg:col-span-5">
          <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden h-full min-h-[300px] flex flex-col justify-end shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <img 
                className="w-full h-full object-cover" 
                alt="Performance Tip" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPXM1MwIVzymqC4Gv2tX_i1V-gU2UDXIcasSZPpvDURkl1BgHKidEjfSzwLNt2bghe0VhS9WXEgcfH0LMqnSAdwKkHJVeI99YNLvMpHSj6t2rQTFtgKtHCL3IKUUx0mAVLkRKbAfzmgSUy3oehd9egByyhIZhwJrpCe6YdmGY6axQg2j8Gl30ZEUv-0Tlot-3RfE7akmX5YI4olyXUZc9BSn1nCPot-oOYcF8PL-FZL5VYqBzwzlHKqgQtfJPfbKhVfmu77djAs0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-secondary mb-4 block">Performance Tip</span>
              <h5 className="font-headline font-bold text-2xl leading-tight mb-4">掌握最新的 GEL-NIMBUS™ 26 销售话术</h5>
              <button className="bg-secondary text-white px-6 py-3 rounded-xl font-headline font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group shadow-lg shadow-secondary/20">
                立即学习 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="group flex items-center justify-between p-5 rounded-xl bg-surface-container-low hover:bg-white transition-all cursor-pointer border border-transparent hover:border-surface-container-highest shadow-sm hover:shadow-md">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-primary">
        {icon}
      </div>
      <span className="font-semibold text-primary">{label}</span>
    </div>
    <ChevronRight size={20} className="text-on-surface-variant group-hover:text-primary transition-colors" />
  </div>
);
