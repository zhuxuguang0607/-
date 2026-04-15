import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Keyboard, Mic, Star, Quote } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { chatWithMaster } from '../services/geminiService';

export const HomeTab: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [aiResponse, setAiResponse] = useState('专业级稳定支撑，让每一步更坚定。这款 GEL-KAYANO 30 搭载了革命性的 4D 引导系统。');
  const [isTyping, setIsTyping] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleSend = async () => {
    if (!inputText.trim()) return;
    setIsTyping(true);
    const response = await chatWithMaster(inputText);
    setAiResponse(response);
    setInputText('');
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col animate-fade-in">
      {/* Digital Human Hero Section */}
      <div className="relative w-full h-[320px] overflow-hidden bg-white">
        <img 
          alt="林静" 
          className="w-full h-full object-cover object-center" 
          src="https://lh3.googleusercontent.com/aida/ADBb0ui90Xo1poBc9rH702XJLo5-mKz8dCPo39mG3maPX18iIl9d1fRoHC7yz3Z6rDL8h5I4gIPvC3SBtFEP4FQDMcbBCag9HBXDQ5Klvo37A-DRHtzqPIQUvmc4BN7k7hteuwANouxdagAPZ143g8PdjuBxtgJmfUfGfHI-a8O4cBfBPcUYe_cpH69E7ANJNNiyt9OPxLrGg_PFNmeUTQ7nigOEdg9uMn4IlCxKIadfV13qQNZHNyJjoo653Q"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-6 flex flex-col">
          <h2 className="text-primary font-black italic tracking-tighter text-2xl uppercase">热销推荐</h2>
          <span className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase opacity-70">左右滑动切换产品</span>
        </div>
      </div>

      {/* Product SKU Carousel */}
      <section className="px-6 -mt-8 relative z-20">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-4 items-end">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className={`flex-shrink-0 snap-center transition-all duration-300 ${product.highlight ? 'w-44' : 'w-28'}`}
            >
              <div className={`bg-white rounded-2xl p-2 shadow-sm border border-surface-container-highest relative overflow-hidden ${product.highlight ? 'rounded-3xl p-4 shadow-2xl border-2 border-secondary scale-105' : 'bg-white/80 backdrop-blur'}`}>
                {product.highlight && (
                  <div className="absolute -top-3 -right-3 bg-secondary text-white text-[8px] font-black py-4 px-8 rotate-45 flex items-center justify-center shadow-lg">
                    热卖
                  </div>
                )}
                <img 
                  alt={product.name} 
                  className={`w-full aspect-square object-contain ${product.highlight ? 'scale-110 mb-2' : ''}`} 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                <div className="text-center">
                  <p className={`text-primary font-bold uppercase truncate ${product.highlight ? 'italic text-base tracking-tight leading-none' : 'text-[8px] mt-1'}`}>
                    {product.name}
                  </p>
                  {product.highlight && (
                    <p className="text-secondary font-black text-xs mt-1">{product.price}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Recommendation Speech Bubble */}
      <section className="px-6 mt-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-[2rem] shadow-xl border border-surface-container-highest relative"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-secondary/20">
              <img 
                alt="林静" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ui90Xo1poBc9rH702XJLo5-mKz8dCPo39mG3maPX18iIl9d1fRoHC7yz3Z6rDL8h5I4gIPvC3SBtFEP4FQDMcbBCag9HBXDQ5Klvo37A-DRHtzqPIQUvmc4BN7k7hteuwANouxdagAPZ143g8PdjuBxtgJmfUfGfHI-a8O4cBfBPcUYe_cpH69E7ANJNNiyt9OPxLrGg_PFNmeUTQ7nigOEdg9uMn4IlCxKIadfV13qQNZHNyJjoo653Q"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-black text-xs text-secondary tracking-widest uppercase">林静 · 智能导购</p>
              <div className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${isTyping ? 'bg-orange-500' : 'bg-green-500'} animate-pulse`}></span>
                <span className="text-[10px] text-on-surface-variant font-bold">
                  {isTyping ? '思考中...' : '在线倾听中'}
                </span>
              </div>
            </div>
            <div className="ml-auto opacity-10">
              <Quote size={32} />
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-on-surface text-base leading-relaxed font-medium">
              {aiResponse}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">跑者专业评价</span>
              <div className="flex items-center gap-1 mt-0.5">
                <Star size={14} className="text-secondary fill-secondary" />
                <span className="text-sm font-black text-primary">4.9</span>
              </div>
            </div>
            <button className="bg-secondary text-white px-10 py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-lg shadow-secondary/30 active:scale-95 transition-all">
              立即抢购
            </button>
          </div>
        </motion.div>
      </section>

      {/* Interaction Bar */}
      <div className="fixed bottom-24 left-0 w-full px-6 z-40">
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-3 flex flex-col gap-3 shadow-2xl border border-surface-container-highest">
          <AnimatePresence>
            {showKeyboard && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex gap-2 p-1">
                  <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="请输入您的需求..."
                    className="flex-grow bg-surface-container-low rounded-xl px-4 py-2 text-sm focus:outline-none border border-surface-container-highest"
                  />
                  <button 
                    onClick={handleSend}
                    className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    发送
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <button className="w-12 h-12 flex items-center justify-center text-primary/70 hover:text-primary transition-colors hover:bg-surface-container-low rounded-2xl">
              <Camera size={24} />
            </button>
            
            <div className="flex-grow h-14 bg-surface-container-low rounded-2xl flex items-center justify-center border border-dashed border-primary/20">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-1 h-3 bg-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1 h-5 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1 h-4 bg-secondary rounded-full animate-bounce"></span>
                </div>
                <span className="text-xs font-black text-primary tracking-widest uppercase">请说出您的需求...</span>
              </div>
            </div>

            <button 
              onClick={() => setShowKeyboard(!showKeyboard)}
              className={`w-12 h-12 flex items-center justify-center transition-colors rounded-2xl ${showKeyboard ? 'bg-primary text-white' : 'text-primary/70 hover:text-primary hover:bg-surface-container-low'}`}
            >
              <Keyboard size={24} />
            </button>
            
            <button className="bg-primary text-white w-14 h-14 rounded-2xl shadow-xl active:scale-90 transition-all flex items-center justify-center shrink-0">
              <Mic size={28} className="fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
