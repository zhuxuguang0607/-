import React from 'react';
import { Verified, Star, Calendar, QrCode, Award, Settings, Footprints, Brain, ShieldCheck } from 'lucide-react';

export const CertificationTab: React.FC = () => {
  return (
    <div className="px-6 space-y-8 animate-fade-in">
      {/* Hero: Current Certification Card */}
      <section className="relative">
        <div className="bg-primary rounded-3xl p-8 overflow-hidden relative shadow-2xl">
          {/* Background Decoration */}
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-secondary opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-primary-container opacity-40 blur-2xl rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">CURRENT STATUS</span>
              <h2 className="text-4xl font-black text-white leading-none">Senior Advisor</h2>
              <p className="text-surface-container-highest font-medium">ASICS Shoe Master 认证专家</p>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <ShieldCheck size={24} className="text-white fill-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">Level Score</p>
                <p className="text-white text-xl font-bold">840 / 1000</p>
              </div>
            </div>
          </div>

          {/* Progress to Master Expert */}
          <div className="mt-12 space-y-4">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <h3 className="text-white font-bold">下一阶段: Master Expert</h3>
                <p className="text-white/60 text-sm">还需 160 经验值与 1 次高级测评</p>
              </div>
              <span className="text-secondary font-black text-2xl">84%</span>
            </div>
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary to-[#FF6B00] w-[84%] rounded-full shadow-[0_0_15px_rgba(169,49,0,0.5)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Badges */}
      <section className="bg-surface-container-low rounded-3xl p-8 space-y-6 shadow-sm border border-surface-container-highest">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold tracking-tight text-primary">已获技能勋章</h3>
          <span className="text-secondary text-sm font-bold cursor-pointer hover:underline">查看全部</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <SkillBadge icon={<Footprints size={28} />} name="Gait Analysis" label="步态分析专家" />
          <SkillBadge icon={<Settings size={28} />} name="Product Tech" label="产品技术深度" />
          <SkillBadge icon={<Brain size={28} />} name="Sales Psychology" label="销售心理学" />
        </div>
      </section>

      {/* Upcoming Assessments */}
      <section className="bg-surface-container-highest rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-sm">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-primary">近期测评</h3>
          <div className="mt-6 space-y-4">
            <div className="bg-surface p-4 rounded-2xl flex items-center gap-4 border border-surface-container-highest">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Calendar size={20} className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-primary text-sm">专业跑鞋适配 (L4)</p>
                <p className="text-xs text-on-surface-variant">10月24日 · 线上闭卷</p>
              </div>
            </div>
            <div className="bg-surface p-4 rounded-2xl flex items-center gap-4 border border-surface-container-highest">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <QrCode size={20} className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-primary text-sm">3D足测设备实操</p>
                <p className="text-xs text-on-surface-variant">11月02日 · 线下中心</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold tracking-wide hover:opacity-90 active:scale-95 transition-all mt-6">
          预约新测评
        </button>
      </section>

      {/* Certification History */}
      <section className="space-y-6 pb-12">
        <h3 className="text-2xl font-black tracking-tight text-primary">认证记录</h3>
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-surface-container-highest">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">认证名称</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">获得日期</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">证书状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-highest">
                <HistoryRow name="Senior Advisor Level 3" date="2023.08.15" status="ACTIVE" />
                <HistoryRow name="Intermediate Specialist Level 2" date="2023.03.10" status="ARCHIVED" />
                <HistoryRow name="Basic Consultant Level 1" date="2022.11.20" status="ARCHIVED" />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillBadge: React.FC<{ icon: React.ReactNode; name: string; label: string }> = ({ icon, name, label }) => (
  <div className="bg-white p-5 rounded-2xl flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all duration-300 group cursor-default border border-surface-container-highest">
    <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center group-hover:scale-110 transition-transform text-primary">
      {icon}
    </div>
    <div>
      <p className="font-bold text-sm text-primary">{name}</p>
      <p className="text-[10px] text-on-surface-variant font-medium">{label}</p>
    </div>
  </div>
);

const HistoryRow: React.FC<{ name: string; date: string; status: string }> = ({ name, date, status }) => (
  <tr className="hover:bg-surface-container-low transition-colors group">
    <td className="px-8 py-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
          <Award size={16} className="text-primary" />
        </div>
        <p className="font-bold text-primary text-sm">{name}</p>
      </div>
    </td>
    <td className="px-8 py-6 text-sm font-medium text-on-surface-variant">{date}</td>
    <td className="px-8 py-6 text-right">
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
        status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-surface-container-highest text-on-surface-variant'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);
