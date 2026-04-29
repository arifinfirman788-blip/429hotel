/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

// Images Import
import audioKnowledge1 from './assets/images/audio-knowledge-1.png';
import audioKnowledge2 from './assets/images/audio-knowledge-2.png';
import audioKnowledge3 from './assets/images/audio-knowledge-3.png';
import aiData1 from './assets/images/ai-data-1.png';
import aiData2 from './assets/images/ai-data-2.png';
import cityPartner1 from './assets/images/city-partner-1.png';
import hardwareTv from './assets/images/hardware-tv.jpg';
import hardwareKiosk from './assets/images/hardware-kiosk.jpg';
import dataTicket from './assets/images/data-ticket.png';
import dataCar from './assets/images/data-car.png';
import productSide1 from './assets/images/product-side-1.png';
import productSide2 from './assets/images/product-side-2.png';

import { 
  BarChart3, 
  Hotel, 
  Users, 
  MessageSquare, 
  ClipboardList, 
  TrendingUp, 
  Smartphone, 
  Tablet as TabletIcon, 
  Cpu, 
  Target, 
  Package, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign,
  Headphones,
  CheckCircle2,
  Calendar,
  Clock,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-bold mb-8 font-display ${light ? 'text-white' : 'text-slate-900 tracking-tight'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-xl md:text-2xl font-medium ${light ? 'text-blue-100' : 'text-slate-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`h-1.5 w-20 mt-6 rounded-full ${light ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
  </div>
);

const StatCard = ({ icon: Icon, label, value, unit, description }: { icon: any, label: string, value: string, unit?: string, description?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-blue-50 rounded-xl">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <span className="text-slate-600 font-semibold">{label}</span>
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">{value}</span>
      {unit && <span className="text-xl md:text-2xl font-bold text-slate-400 ml-1">{unit}</span>}
    </div>
    {description && <p className="mt-5 text-base md:text-xl text-slate-500 leading-relaxed">{description}</p>}
  </motion.div>
);

const DeviceMockup = ({ type, children, title }: { type: 'iphone' | 'tablet', children?: React.ReactNode, title?: string }) => {
  if (type === 'iphone') {
    return (
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] max-h-[800px] w-[300px] shadow-xl overflow-hidden scale-[0.7] origin-center">
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full bg-white flex flex-col">
          {children ? children : (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="w-10 h-10 text-blue-400" />
              </div>
              <p className="text-slate-400 text-sm">{title || 'UI Showcase'}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] w-full max-w-[900px] shadow-xl overflow-hidden scale-[0.55] origin-center">
      <div className="rounded-[2rem] overflow-hidden w-full bg-white flex flex-col">
        {children ? children : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <TabletIcon className="w-12 h-12 text-blue-400" />
            </div>
            <p className="text-slate-400 text-sm font-medium">{title || 'Tablet Dashboard Interface'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ImageCard = ({ ratio = "", label, src, className = "" }: { ratio?: string, label: string, src?: string, className?: string }) => (
  <div className={`bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group relative cursor-zoom-in ${ratio} ${className}`} onClick={() => src && window.open(src, '_blank')}>
    {src ? (
      <>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ImageIcon className="w-3.5 h-3.5" />
          点击查看大图
        </div>
        <img 
          src={src} 
          alt={label} 
          loading="lazy"
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </>
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-2 text-slate-400 group-hover:scale-110 transition-transform">
          <Package className="w-6 h-6" />
        </div>
        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</span>
      </div>
    )}
  </div>
);

const ObjectiveItem = ({ num, title, content }: { num: string, title: string, content: string }) => (
  <div className="flex gap-6 items-start">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
      {num}
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{content}</p>
    </div>
  </div>
);

const Carousel = ({ children, autoPlay = true, interval = 3000 }: { children: React.ReactNode, autoPlay?: boolean, interval?: number }) => {
  const items = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || items.length <= 1 || isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length, isHovered]);

  if (items.length === 0) return null;
  if (items.length === 1) return <>{items[0]}</>;

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div 
      className="relative w-full h-full flex flex-col items-center justify-center group overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full relative flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full flex justify-center items-center"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <button 
        onClick={prev} 
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-20"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={next} 
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-20"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/10 backdrop-blur-md px-2 py-1 rounded-full">
        {items.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-blue-600' : 'bg-white/70 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, icon: Icon, children }: { isOpen: boolean, onClose: () => void, title: string, icon?: any, children: React.ReactNode }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl relative z-10 flex flex-col overflow-hidden border border-slate-100"
        >
          <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-slate-50/50 shrink-0">
            <h4 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-slate-800">
              {Icon && <Icon className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />}
              {title}
            </h4>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-800"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// --- Sections ---

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // 修复刷新页面后自动滚动到底部的 bug
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header & Hero */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-blue-200 shadow-lg">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">HuangXiaoxi AI</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#operational" className="hover:text-blue-600 transition-colors">运营数据</a>
            <a href="#product" className="hover:text-blue-600 transition-colors">产品汇报</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">住客体验</a>
            <a href="#future" className="hover:text-blue-600 transition-colors">发展规划</a>
          </nav>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </header>

      <main className="pt-20">
        
        {/* Banner Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-900 opacity-90"></div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold mb-8">
                建设情况汇报 2026 Q1
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight font-display">
                “黄小西”酒店 <span className="text-blue-400">智能体</span>
              </h1>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 flex items-center gap-2 group">
                  启动演示 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md">
                  查看详情
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative floating screen */}
          <motion.div 
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute right-[-10%] top-1/4 hidden lg:block opacity-40 blur-sm pointer-events-none"
          >
            <DeviceMockup type="tablet" title="Real-time Metrics Dashboard" />
          </motion.div>
        </section>

        {/* 1. 运营数据 */}
        <section id="operational" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="覆盖贵州九地市，覆盖星级、精品、商务及民宿全类型">一、运营数据</SectionTitle>
            
            {/* 1.1 合作酒店数量 */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-800">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-sm text-blue-600">1</span>
                1.1 合作酒店数量
              </h3>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  截至目前，入网酒店数量合计<span className="text-blue-600 font-bold">1492家</span>，包括贵州省九个地市州，包含星级酒店、精品酒店、连锁酒店、商务型酒店、民宿等类型全覆盖。
                </p>
              </div>
            </div>

            {/* 1.2 酒店使用情况 */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-800">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-sm text-blue-600">2</span>
                1.2 酒店使用情况
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <div className="text-sm text-slate-500 mb-2">已进码房间数</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">31288<span className="text-sm ml-1">间</span></div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <div className="text-sm text-slate-500 mb-2">待进码房间数</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">52000<span className="text-sm ml-1">间</span></div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <div className="text-sm text-slate-500 mb-2">AI累计问答数</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">54829<span className="text-sm ml-1">条</span></div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <div className="text-sm text-slate-500 mb-2">累计提交工单</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">1511<span className="text-sm ml-1">条</span></div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center col-span-2 md:col-span-1">
                  <div className="text-sm text-slate-500 mb-2">累计登陆用户</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">38755<span className="text-sm ml-1">人</span></div>
                </div>
              </div>
            </div>

            {/* 1.3 重点酒店使用反馈 */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-800">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-sm text-blue-600">3</span>
                1.3 重点酒店使用反馈
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="text-sm text-blue-600 font-bold mb-3 uppercase tracking-wider">重点跟踪酒店</div>
                  <p className="text-base text-slate-600 leading-relaxed">
                    贵州饭店贵宾楼、贵山大酒店、匀东贵州饭店、天怡豪生大酒店、贵阳公羽家设计师酒店、铜仁思南温泉酒店、都匀灵智大酒店、惠水夜郎智慧酒店
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="text-sm text-blue-600 font-bold mb-3 uppercase tracking-wider">AI诉求收集</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">108<span className="text-lg ml-1">条</span></div>
                  <p className="text-base text-slate-600">收集分析酒店AI诉求，整理筛选共性需求</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="text-sm text-blue-600 font-bold mb-3 uppercase tracking-wider">核心导向</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-base text-slate-600">交易达成</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-base text-slate-600">增值创收</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-base text-slate-600">解决运营服务问题</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 md:col-span-2 lg:col-span-2">
                  <div className="text-sm text-blue-600 font-bold mb-3 uppercase tracking-wider">功能开发</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
                      <div className="text-base font-bold text-slate-800">一房一码</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
                      <div className="text-base font-bold text-slate-800">客房维修工单</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
                      <div className="text-base font-bold text-slate-800">工单状态实时更新</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-slate-200">
                      <div className="text-base font-bold text-slate-800">周边地图榜单</div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="text-sm text-blue-600 font-bold mb-3 uppercase tracking-wider">产品目标</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">实用性</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">好用性</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">易用性</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 1.4 重点客户跟进情况 */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-slate-800">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-sm text-blue-600">4</span>
                1.4 重点客户跟进情况
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-blue-600 mb-3">惠水夜郎智慧酒店</h4>
                  <p className="text-slate-600 text-base leading-relaxed">酒店无夜班工作人员值守，ai问答功能解决了住客在夜间的所有咨询问题，减少差评产生。</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-blue-600 mb-3">思南温泉酒店</h4>
                  <p className="text-slate-600 text-base leading-relaxed">智能体ai问答覆盖了百分之八十住客对酒店设施的咨询，大大减轻了工作人员重复回答高频问题工作量；</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-blue-600 mb-3">都匀灵智大酒店</h4>
                  <p className="text-slate-600 text-base leading-relaxed">酒店本身有智能化改造需求，智能体的出现为住客提供了全新的入住体验，工单提交便捷，ai回复精准；</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-blue-600 mb-3">公羽家设计师酒店</h4>
                  <p className="text-slate-600 text-base leading-relaxed">酒店智能体自营商城以及平台商城为酒店提供了新的挣钱渠道；</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 产品工作汇报 */}
        <section id="product" className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="+业务目标驱动下的分组 + 最大化AI代码利用度">二、产品工作汇报</SectionTitle>
            
            {/* 2.1 工作思路 */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 border-l-4 border-blue-600 pl-4 font-display">2.1 产品工作思路调整</h3>
              <p className="text-slate-500 mb-8 ml-5 font-medium tracking-tight text-base">+ 业务目标驱动下的分组 + 最大化 AI 代码利用度</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, title: '业务目标一：规模', goal: '做大规模', desc: '快速提升酒店入驻数量 （规模）' },
                  { icon: DollarSign, title: '业务目标二：挣钱', goal: '利他利己', desc: '跑通组网运营的商业模式（挣钱）' },
                  { icon: Users, title: '业务目标三：住客体验', goal: '产品体验', desc: '加强住客产品体验，提升住店评价（住客体验）' },
                  { icon: Target, title: '业务目标四：酒店工作台', goal: '经营逻辑', desc: '重构经营逻辑，实现酒店运营自驱（酒店工作台）' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center group hover:bg-blue-600 hover:text-white transition-all cursor-default">
                    <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                      <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
                    </div>
                    <h4 className="font-bold text-sm md:text-base mb-3 opacity-70 uppercase tracking-[0.2em]">{item.title}</h4>
                    <p className="text-lg md:text-2xl text-slate-600 group-hover:text-blue-50 font-bold leading-relaxed px-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2.2 业务目标一：做大规模，快速提升酒店入驻数量 */}
            <div className="mb-24 space-y-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display text-slate-900 border-l-4 border-blue-600 pl-4">2.2 业务目标一：做大规模，快速提升酒店入驻数量</h3>
                
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                  {/* 近期重点产出 */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div 
                        className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => setActiveModal('audio_to_knowledge')}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                          <span className="text-blue-600 font-bold text-lg group-hover:text-white transition-colors">01</span>
                        </div>
                        <h5 className="font-bold text-slate-800 text-lg mb-3 flex items-center justify-between">
                          录音转知识库
                          <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h5>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          帮助酒店快速入驻<br/>
                          <span className="text-blue-500 text-xs mt-1 inline-block">（同步考虑硬件方案）</span>
                        </p>
                        {/* 外部展示图轮播区域 */}
                        <div className="w-full h-40 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm relative" onClick={(e) => e.stopPropagation()}>
                          <Carousel>
                            <div className="w-full h-full flex justify-center items-center p-2">
                              <img src={audioKnowledge1} alt="AI 录音提取展示" className="max-h-full object-contain" />
                            </div>
                            <div className="w-full h-full flex justify-center items-center p-2">
                              <img src={audioKnowledge2} alt="展业工具界面" className="max-h-full object-contain" />
                            </div>
                            <div className="w-full h-full flex justify-center items-center p-2">
                              <img src={audioKnowledge3} alt="录音豆设备展示" className="max-h-full object-contain" />
                            </div>
                          </Carousel>
                          <div className="absolute inset-0 z-10 cursor-pointer pointer-events-none group-hover:bg-blue-500/5 transition-colors" onClick={() => setActiveModal('audio_to_knowledge')}></div>
                        </div>
                      </div>
                      
                      <div 
                        className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => setActiveModal('ai_data_collection')}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                          <span className="text-blue-600 font-bold text-lg group-hover:text-white transition-colors">02</span>
                        </div>
                        <h5 className="font-bold text-slate-800 text-lg mb-3 flex items-center justify-between">
                          AI数据采集
                          <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h5>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          帮助内部团队快速形成客户档案
                        </p>
                        {/* 外部展示图轮播区域 */}
                        <div className="w-full h-40 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm relative" onClick={(e) => e.stopPropagation()}>
                          <Carousel>
                            <div className="w-full h-full flex justify-center items-center p-2">
                              <img src={aiData1} alt="AI数据采集界面 1" className="max-h-full object-contain" />
                            </div>
                            <div className="w-full h-full flex justify-center items-center p-2">
                              <img src={aiData2} alt="AI数据采集界面 2" className="max-h-full object-contain" />
                            </div>
                          </Carousel>
                          <div className="absolute inset-0 z-10 cursor-pointer pointer-events-none group-hover:bg-blue-500/5 transition-colors" onClick={() => setActiveModal('ai_data_collection')}></div>
                        </div>
                      </div>
                      
                      <div 
                        className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => setActiveModal('city_partner')}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                          <span className="text-blue-600 font-bold text-lg group-hover:text-white transition-colors">03</span>
                        </div>
                        <h5 className="font-bold text-slate-800 text-lg mb-3 flex items-center justify-between">
                          城市合伙人机制与工具
                          <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h5>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          帮助全国版本快速拓客
                        </p>
                        {/* 外部展示图轮播区域 */}
                        <div className="w-full h-40 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group/img" onClick={(e) => { e.stopPropagation(); setActiveModal('city_partner'); }}>
                          <div className="w-full h-full flex justify-center items-center p-2 relative">
                            <img src={cityPartner1} alt="城市合伙人工具展示" className="max-h-full object-contain cursor-zoom-in" />
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                               <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-blue-600 text-xs font-bold">
                                 <ImageIcon className="w-3.5 h-3.5" />
                                 点击放大
                               </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.3 业务目标二：利他利己，跑通组网运营的商业模式 */}
            <div id="money" className="mb-24 space-y-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display text-slate-900 border-l-4 border-blue-600 pl-4">2.3 业务目标二：利他利己，跑通组网运营的商业模式</h3>
                
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-blue-600">
                    <TrendingUp size={400} />
                  </div>
                  
                  {/* 近期重点产出 */}
                  <div className="relative z-10">
                    <div className="space-y-8">
                      {/* 业务侧 */}
                      <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          <div className="lg:w-1/3 w-full">
                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-bold mb-4">业务侧</div>
                            <h5 className="font-bold text-slate-900 text-xl mb-6 leading-snug">跑通组网供应链与数据验证</h5>
                            
                            <div className="space-y-4">
                              {/* Data Card 1 */}
                              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                <div className="text-sm text-slate-500 mb-1">周末黄果树门票试销 (安顺约10家酒店)</div>
                                <div className="flex items-baseline gap-2">
                                  <span className="text-3xl font-black text-blue-600">20</span>
                                  <span className="text-slate-600 font-bold">万</span>
                                  <span className="text-sm text-slate-400 ml-2">去化量</span>
                                </div>
                              </div>
                              {/* Data Card 2 */}
                              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                <div className="text-sm text-slate-500 mb-1">25年暑期打车订单 (7.1-8.31)</div>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                  <div>
                                    <div className="text-xs text-slate-400 mb-1">开元名都度假酒店</div>
                                    <div className="text-2xl font-black text-indigo-600">7278<span className="text-sm text-slate-500 font-normal ml-1">单</span></div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-slate-400 mb-1">小七孔慕山美宿</div>
                                    <div className="text-2xl font-black text-indigo-600">3535<span className="text-sm text-slate-500 font-normal ml-1">单</span></div>
                                  </div>
                                </div>
                              </div>
                              {/* Supply Chain */}
                              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mt-4">
                                <div className="text-sm text-slate-500 mb-2">多品类供应链组织</div>
                                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                  组织了包含 <span className="font-bold text-blue-600">旅游门票 + 白酒 + 车辆服务</span> 的核心供应链资源，为酒店本地联营提供坚实基础。
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-2/3 w-full bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-center min-h-[400px]">
                            <Carousel>
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="门票数据说明" 
                                  className="w-full max-w-md" 
                                  src={dataTicket}
                                />
                              </div>
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="用车数据说明" 
                                  className="w-full max-w-md" 
                                  src={dataCar}
                                />
                              </div>
                            </Carousel>
                          </div>
                        </div>
                      </div>

                      {/* 产品侧 */}
                      <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          <div className="lg:w-1/3 w-full">
                            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-xs font-bold mb-4">产品侧</div>
                            <h5 className="font-bold text-slate-900 text-xl mb-4 leading-snug">供应链功能适配与智能销售闭环</h5>
                            
                            <div className="space-y-6">
                              <div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                  供应链相关功能已完成多类酒店经营方案的全面适配，可支撑酒店开展本地联营及二次销售相关业务。
                                </p>
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                  <div className="text-sm text-slate-500 mb-2">已开通组网经营功能，5月中旬完成试点推向全市场</div>
                                  <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-purple-600">7</span>
                                    <span className="text-slate-600 font-bold">家酒店</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4 border-t border-slate-200">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                  设计了从 <span className="font-bold text-blue-600">酒店触点</span> -- <span className="font-bold text-blue-600">智能体推荐交易</span> -- <span className="font-bold text-blue-600">结算分账</span> 完整智能销售闭环。
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-2/3 w-full bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-center min-h-[400px]">
                            <Carousel>
                              {/* 供应链方案 */}
                              <div className="w-full flex justify-center py-6">
                                <DeviceMockup type="iphone">
                                  <img 
                                    src="https://i.imgs.ovh/2026/04/28/jpujde.jpeg" 
                                    alt="供应链方案" 
                                    loading="lazy"
                                    className="w-full h-auto"
                                    referrerPolicy="no-referrer"
                                  />
                                </DeviceMockup>
                              </div>
                              {/* 陪跑卡片 */}
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="试点酒店陪跑场景自适应卡片" 
                                  className="w-full max-w-md" 
                                  src="https://i.imgs.ovh/2026/04/28/jpurzt.png"
                                />
                              </div>
                              {/* 触点 A */}
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="触点部署 A" 
                                  className="w-full max-w-md" 
                                  src="https://i.imgs.ovh/2026/04/28/jpuTMA.jpeg"
                                />
                              </div>
                              {/* 触点 B */}
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="触点部署 B" 
                                  className="w-full max-w-md" 
                                  src="https://i.imgs.ovh/2026/04/28/jpubjH.jpeg"
                                />
                              </div>
                              {/* 需求推送 */}
                              <div className="w-full flex justify-center py-6">
                                 <DeviceMockup type="iphone">
                                   <img 
                                     src="https://i.imgs.ovh/2026/04/28/jpudcM.jpeg" 
                                     alt="AI识别需求推送" 
                                     loading="lazy"
                                     className="w-full h-auto"
                                     referrerPolicy="no-referrer"
                                   />
                                 </DeviceMockup>
                              </div>
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="产品侧说明展示图 1" 
                                  className="w-full max-w-md" 
                                  src={productSide1}
                                />
                              </div>
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="产品侧说明展示图 2" 
                                  className="w-full max-w-md" 
                                  src={productSide2}
                                />
                              </div>
                              <div className="w-full flex justify-center py-6">
                                <DeviceMockup type="tablet">
                                  <img 
                                    src="https://i.imgs.ovh/2026/04/28/jpul8r.png" 
                                    alt="本地组网管理后台" 
                                    loading="lazy"
                                    className="w-full h-auto"
                                    referrerPolicy="no-referrer"
                                  />
                                </DeviceMockup>
                              </div>
                            </Carousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-xl text-white">
                    <h4 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                      <BarChart3 size={24} />
                      3000 家酒店年预估 GMV 测算
                    </h4>
                    <div className="space-y-5">
                      {[
                        { label: '旅游产品 (门票、线路等)', value: '5400 万', detail: '单月 1500 元/店 | 3000 家酒店年预估' },
                        { label: '用车服务 (预约、包车)', value: '540 万', detail: '单月 10 单/客单价 15 元 | 3000 家酒店年预估' },
                        { label: '特产商品 (白酒、茶等)', value: '3600 万', detail: '单月 1000 元/店 | 3000 家酒店年预估' },
                        { label: '导游服务 (旅拍、讲师)', value: '540 万', detail: '转化率 3%/客单价 500 元 | 3000 家酒店年预估' }
                      ].map((m, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/20 pb-4">
                          <div>
                             <div className="font-bold text-lg">{m.label}</div>
                             <div className="text-sm text-blue-100">{m.detail}</div>
                          </div>
                          <div className="text-2xl font-bold tabular-nums">{m.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/20 flex justify-between items-center">
                      <span className="text-blue-100 font-medium">年度合计预估</span>
                      <span className="text-3xl font-black italic">约 1.01 亿</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.4 业务目标三：加强住客产品体验，提升住店评价 */}
            <div id="experience" className="mb-24 space-y-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display text-slate-900 border-l-4 border-blue-600 pl-4">2.4 业务目标三：加强住客产品体验，提升住店评价</h3>
                
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8 relative overflow-hidden">
                  {/* 近期重点产出 */}
                  <div className="relative z-10">
                    
                    <div className="space-y-8">
                      {/* 1、首页改版 */}
                      <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          <div className="lg:w-1/3 w-full">
                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-bold mb-4">产品侧</div>
                            <h5 className="font-bold text-slate-900 text-xl mb-4 leading-snug">首页改版：从被动问答到主动感知</h5>
                            <p className="text-slate-600 leading-relaxed mb-6">
                              实现从“被动问答的聊天机器”向“主动感知的行程管家”的跨越。
                            </p>
                            <div className="space-y-3">
                              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="font-bold text-slate-800 text-sm mb-1">状态驱动行程卡</div>
                                <p className="text-sm text-slate-500">根据住客状态自动呈现行程卡，关键信息直接显示</p>
                              </div>
                              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="font-bold text-slate-800 text-sm mb-1">动态时间提示词</div>
                                <p className="text-sm text-slate-500">根据在店时间自动切换引导语及特殊营销提示词</p>
                              </div>
                              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="font-bold text-slate-800 text-sm mb-1">下一步需求预测</div>
                                <p className="text-sm text-slate-500">AI 预测住客需求，外显快捷操作</p>
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-2/3 w-full bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-center min-h-[400px]">
                            <Carousel>
                              <div className="w-full flex justify-center py-6">
                                <DeviceMockup type="iphone">
                                  <img 
                                    src="https://i.imgs.ovh/2026/04/29/jpxC1m.png" 
                                    alt="行程卡展示" 
                                    className="w-full h-auto"
                                    referrerPolicy="no-referrer"
                                  />
                                </DeviceMockup>
                              </div>
                              <div className="w-full flex justify-center py-6">
                                <DeviceMockup type="iphone">
                                  <img 
                                    src="https://i.imgs.ovh/2026/04/29/jpxZQc.png" 
                                    alt="动态提示词咨询" 
                                    className="w-full h-auto"
                                    referrerPolicy="no-referrer"
                                  />
                                </DeviceMockup>
                              </div>
                              <div className="w-full flex justify-center py-6">
                                <DeviceMockup type="iphone">
                                  <img 
                                    src="https://i.imgs.ovh/2026/04/29/jpxamp.png" 
                                    alt="快捷服务按钮" 
                                    className="w-full h-auto"
                                    referrerPolicy="no-referrer"
                                  />
                                </DeviceMockup>
                              </div>
                            </Carousel>
                          </div>
                        </div>
                      </div>

                      {/* 2、硬件设计 */}
                      <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          <div className="lg:w-1/3 w-full">
                            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-xs font-bold mb-4">硬件侧</div>
                            <h5 className="font-bold text-slate-900 text-xl mb-4 leading-snug">多场景智能硬件设计</h5>
                            <p className="text-slate-600 leading-relaxed mb-6">
                              通过四大硬件方案，实现酒店智能体从纯软件系统向物理具身触角的进化，无缝融入客房与前台。
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
                                <span className="font-bold text-slate-800">房间智能音箱</span>
                              </div>
                              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">2</div>
                                <span className="font-bold text-slate-800">电视接入</span>
                              </div>
                              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">3</div>
                                <span className="font-bold text-slate-800">前台评价碰碰贴</span>
                              </div>
                              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">4</div>
                                <span className="font-bold text-slate-800">前台4一体机</span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-2/3 w-full bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-center min-h-[400px]">
                            <Carousel>
                              {/* 方案1: 音箱 */}
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="方案1：房间智能音箱" 
                                  className="w-full max-w-md" 
                                  src="https://s1.img-e.com/20260429/69f0e286989f7.png"
                                />
                              </div>
                              {/* 方案2: 电视 */}
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="方案2：电视接入" 
                                  className="w-full max-w-md" 
                                  src={hardwareTv}
                                />
                              </div>
                              {/* 方案3: 碰碰贴 */}
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="方案3：前台评价碰碰贴" 
                                  className="w-full max-w-md" 
                                  src="https://s1.img-e.com/20260429/69f0e2ce83241.png"
                                />
                              </div>
                              {/* 方案4: 一体机 */}
                              <div className="w-full flex justify-center py-6">
                                <ImageCard 
                                  label="方案4：前台一体机" 
                                  className="w-full max-w-md" 
                                  src={hardwareKiosk}
                                />
                              </div>
                            </Carousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.5 业务目标四：重构经营逻辑，实现酒店运营自驱 */}
            <div id="workstation" className="mb-24 space-y-16">
               <div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display text-slate-900 border-l-4 border-blue-600 pl-4">2.5 业务目标四：重构经营逻辑，实现酒店运营自驱</h3>
                 
                 <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8 relative overflow-hidden">
                   {/* 近期重点产出 */}
                   <div className="relative z-10">
                     
                     <div className="space-y-8">
                       <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                         <div className="flex flex-col lg:flex-row gap-8 items-start">
                           <div className="lg:w-1/3 w-full">
                             <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-bold mb-4">产品侧</div>
                             <h5 className="font-bold text-slate-900 text-xl mb-4 leading-snug">酒店老板和员工工作台设计情况汇报</h5>
                             <p className="text-slate-600 leading-relaxed mb-6">
                               围绕酒店实际经营场景，打造赋能老板与员工的双端工作台，提升管理与服务效率。
                             </p>
                             <div className="space-y-3">
                               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                   <Smartphone size={18} />
                                 </div>
                                 <span className="font-bold text-slate-800">酒店老板工作台</span>
                               </div>
                               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                   <Users size={18} />
                                 </div>
                                 <span className="font-bold text-slate-800">员工工作台</span>
                               </div>
                             </div>
                           </div>
                           <div className="lg:w-2/3 w-full bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-center min-h-[400px] h-[600px] overflow-hidden relative">
                             <iframe 
                               src="http://localhost:3001/" 
                               className="absolute top-0 left-0 border border-slate-200 shadow-inner bg-white"
                               style={{ width: '125%', height: '125%', transform: 'scale(0.8)', transformOrigin: '0 0', borderRadius: '1rem' }}
                               title="酒店老板AI数字员工作战室原型"
                               allowFullScreen
                               onLoad={() => window.scrollTo(0, 0)}
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* 2.6 总结 */}
                 <div className="mt-24 pt-24 border-t border-slate-200">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                       <div className="lg:w-1/2">
                          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display">2.6 总结：三端协同产品矩阵</h3>
                          <p className="text-base md:text-lg text-slate-500 max-w-xl">
                            通过构建三端产品体系，我们实现了从住客触达、酒店管理到市场裂变的完整价值闭环。
                          </p>
                       </div>
                       <div className="lg:w-1/2 w-full grid grid-cols-1 gap-4">
                          {[
                            { name: '住客智能体', color: 'bg-blue-600' },
                            { name: '经营工作台', color: 'bg-indigo-600' },
                            { name: '城市合伙人', color: 'bg-slate-900' }
                          ].map((item, i) => (
                            <div key={i} className={`${item.color} p-6 rounded-2xl text-white font-bold flex justify-between items-center group cursor-default`}>
                              <span className="text-xl">{item.name}</span>
                              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 三、下一阶段主要工作目标 */}
        <section id="future" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <SectionTitle light subtitle="明确的时间轴，决胜 2026 夏航季">三、下一阶段主要工作目标</SectionTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] relative group"
              >
                <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">05.30</div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Target className="text-blue-400 w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold">5月30日前目标</h4>
                </div>
                <ul className="space-y-6 text-slate-300">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 mt-1" />
                    <span>完成前期合作酒店的产品接入做实</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 mt-1" />
                    <span>组网经营酒店能突破到 <span className="text-xl font-bold text-white italic ml-1">100 家</span></span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] relative group"
              >
                <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">06.30</div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Users className="text-blue-400 w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold">6月30日前目标</h4>
                </div>
                <ul className="space-y-6 text-slate-300">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 mt-1" />
                    <span>完成三个城市的城市合伙人合作</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 mt-1" />
                    <span>总体合作酒店数量突破到 <span className="text-xl font-bold text-white italic ml-1">3000 家</span></span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="mt-20 pt-16 border-t border-white/10 flex flex-col items-center text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/50">
                 <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <p className="text-slate-400 max-w-2xl italic mb-4">
                “秉承产品驱动规模，规模反哺商业的逻辑，我们将继续深耕贵州，走向全国。”
              </p>
              <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">HuangXiaoxi Digital Report &copy; 2026</p>
            </div>
          </div>
        </section>

      </main>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'audio_to_knowledge'}
        onClose={() => setActiveModal(null)}
        title="2.2.1 录音转知识库帮助酒店快速入驻"
        icon={Headphones}
      >
        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="bg-slate-50 pt-4 md:pt-6 px-4 md:px-6 pb-2 md:pb-3 rounded-3xl border border-slate-100">
            <div>
              <div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm md:text-base font-bold mb-4 tracking-wider uppercase">阶段一：运营提效 - 低成本半自动化录入 (研发中)</div>
                <h5 className="text-xl font-bold mb-4">核心目的：用极低成本，极速填补当前的运营人效缺口</h5>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed max-w-4xl">
                  业务流程：运营电话录音 → AI提取结构化JSON → 自动直传后台完善知识库。<br/>
                  设计目标：替代“沟通-整理-手动录入”的传统低效链路。
                </p>
                <div className="flex items-center gap-4 text-blue-600 font-bold text-lg md:text-xl">
                  <Calendar size={32} /> 计划 五一劳动节 后上线
                </div>
              </div>
              <div className="-mt-28">
                <DeviceMockup type="tablet">
                  <img 
                    src={audioKnowledge1} 
                    alt="AI 录音提取展示" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </DeviceMockup>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="border-l-2 border-blue-600 pl-8 ml-4">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm md:text-base font-bold mb-4 tracking-wider uppercase">阶段二：销售赋能 - 展业工具数据闭环 (产品设计中)</div>
            <h5 className="text-xl font-bold mb-4">核心目的：将信息采集动作前置，打造业务流数据闭环</h5>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
              业务流程：销售端展业工具点击“发起访谈” → 实时录音与ASR转写 → 访谈结束自动生成表单 → 酒店/运营双向核对入库。<br/>
              设计目标：为一线人员提供顺滑展业工具，固化高质量“代客录入”服务标准。
            </p>
            <div className="mt-4 flex justify-center">
              <DeviceMockup type="iphone">
                <img 
                  src={audioKnowledge2} 
                  alt="展业工具界面" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </DeviceMockup>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="border-l-2 border-slate-200 pl-8 ml-4">
            <div className="inline-block px-3 py-1 bg-purple-500 text-white rounded-lg text-sm md:text-base font-bold mb-4 tracking-wider uppercase">阶段三：终极形态 - 硬件级无感自动采集 (中长期规划)</div>
            <h5 className="text-xl font-bold mb-4">核心目的：彻底解放人工，实现知识库动态配置</h5>
            <div className="flex flex-col gap-6">
              <p className="text-slate-600 text-sm leading-relaxed">
                业务流程：酒店前台/员工配置专属硬件（如飞书录音豆形态） → 日常工作自动抓取关键信息 → AI自动分析补全知识库。<br/>
                设计目标：摆脱定向访谈与人工录入依赖，切入酒店日常业务流，完成深度自动化数据沉淀。
              </p>
              <div className="flex justify-center">
                <ImageCard 
                  label="录音豆设备展示" 
                  src={audioKnowledge3} 
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'ai_data_collection'}
        onClose={() => setActiveModal(null)}
        title="2.2.2 AI数据采集帮助内部团队快速形成客户档案"
        icon={ClipboardList}
      >
        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="p-8 bg-blue-50 rounded-3xl">
            <div className="text-base md:text-lg font-bold text-blue-900 mb-3">核心目的</div>
            <p className="text-blue-800 text-base leading-relaxed">
              构建 AI 驱动的酒店客户关系服务体系，以 AI 贯通“线索发现→客户洞察→触达转化→服务交付”全链路；基于酒店画像分析痛点、匹配产品价值，输出精准营销策略与话术，实现 BD 客户转化智能化辅助与闭环。
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl">
            <div className="text-base md:text-lg font-bold text-slate-900 mb-3">设计目标</div>
            <p className="text-slate-600 text-base leading-relaxed">
              以数据资产+AI决策，提升酒店获客与转化效率，将 BD “经验劳动”升级为“AI 可调度的决策计算”，实现自主采集、画像量化、话术生成、闭环进化。
            </p>
          </div>
        </div>

        <div className="mb-12">
          <ImageCard label="AI 客户关系体系核心架构自适应展示卡片" />
        </div>

        <div className="space-y-16">
          {/* Phase Outcome 1 */}
          <div>
            <h5 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="text-blue-600" />
              阶段成果（1）：数据采集与画像建设
            </h5>
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div className="space-y-4">
                <p className="text-base text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900">进度：</span>已完成设计，vibe coding 开发中，含 BD 外勤客户画像（单店完整画像+话术建议调优）。<br/>
                  <span className="font-bold text-slate-900">目标：</span>应用AI高效自动化采集酒店客户数据，覆盖：基础信息、位置商圈、设施服务、用户评价、客流分析、竞争环境、商机评级等价值数据。生成酒店客户基础画像 + 经营痛点 + 差评摘要 + 竞争环境 + 商机价值评分，精准洞察客户痛点，实现销售高效转化。
                </p>
                <div className="bg-slate-100 p-4 rounded-xl space-y-2">
                  <div className="text-sm font-bold text-slate-900">核心功能模块：</div>
                  <p className="text-base text-slate-600">①客户线索采集建档：</p>
                  <img 
                    src={aiData1} 
                    alt="核心功能模块展示" 
                    loading="lazy"
                    className="w-full h-auto rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-base text-slate-600">② 客户画像概览列表：线索客户价值度一览，提升策略智慧度与维护效率。</div>
                <div className="text-xs text-blue-500 font-mono underline">http://172.16.20.5:5555/hotel_profile_v1.html</div>
                <ImageCard label="8:3 比例照片展示卡片" src="https://imagetourl.cloud/2in6k1or.png" />
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="text-base text-slate-600 mb-2">③酒店画像详情页：基础信息+经营状况+竞争分析+痛点策略，一店一策，赋能外勤。</div>
                  <div className="text-xs text-blue-500 font-mono mb-4 underline">http://172.16.20.5:5555/hotel_profile_detail.html?id=182</div>
                  <ImageCard 
                    label="单个酒店画像自适应展示卡片" 
                    src={aiData2} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Phase Outcome 2 */}
          <div>
            <h5 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-blue-600" />
              阶段成果（2）：闭环工作协同体系，实现客户转化全线协同贯通
            </h5>
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div className="space-y-4">
                <p className="text-base text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900">进度：</span>工具选型落地，多维表工具快速实现无代码流程搭建。<br/>
                  <span className="font-bold text-slate-900">目标：</span>从“人盯人”到“流程+AI双驱动”，多岗一体、数据同源、任务驱动。线索双源汇入→画像→标准化漏斗，BD虾派单/指路/催办，进度实时可见，报告直达管理层。实现线索到签约不丢单、不逾期、不混乱。
                </p>
                <h6 className="text-lg font-bold text-slate-800 mt-4">核心功能模块</h6>
                <p className="text-base text-slate-600 leading-relaxed">
                  ①画像线索统一归口，客户转化情况及时记录。（可零代码搭建）
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="space-y-3">
                  <ImageCard label="线索统一管理自适应卡片" src="https://imagetourl.cloud/6djfy0ld.png" />
                </div>
                <div className="space-y-3">
                  <p className="text-base text-slate-600 leading-relaxed">②BD助手虾：新线索通知，赢单策略推送，任务提醒，个人业绩达成帮扶。</p>
                  <ImageCard label="BD助手虾自适应卡片" src="https://i.imgs.ovh/2026/04/28/jpmtbm.png" />
                </div>
                <div className="space-y-0 pt-0">
                  <div className="flex justify-center">
                    <DeviceMockup type="iphone">
                      <img 
                        src="https://i.imgs.ovh/2026/04/28/jpmpXc.jpeg" 
                        alt="BD 移动端工作台" 
                        loading="lazy"
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                    </DeviceMockup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'city_partner'}
        onClose={() => setActiveModal(null)}
        title="2.2.3 城市合伙人机制与工具帮助全国版本快速拓客"
        icon={Users}
      >
        <div className="relative z-10">
          <p className="text-base text-slate-600 leading-relaxed mb-8">
            <span className="font-bold text-slate-800">总体策略：</span>摒弃重资产直销，以"一个轻展业工具 +一套强分润机制 + 一个自驱型组织机制"撬动全国市场。
          </p>
          
          <div className="flex flex-col gap-12 max-w-4xl">
            {[
              {
                num: "1",
                color: "blue",
                title: "展业工具——一线 BD 的“赚钱外挂”",
                content: [
                  { label: "核心", text: "打造轻量级拓客小程序，实现傻瓜式极简展业。" },
                  { label: "逻辑", text: "LBS地图公海线索导航→3分钟语音聊单→扫码入驻→数据提现。" },
                  { label: "目的", text: "降低拓客门槛，让兼职人员也能极速签单。" }
                ]
              },
              {
                num: "2",
                color: "green",
                title: "组织机制——极简扁平的“两级赛马”",
                content: [
                  { label: "核心", text: "抛弃传统层级代理，建立业绩导向的动态晋升网络。" },
                  { label: "逻辑", text: "全民兼职单兵作战→业绩达标升合伙人→解锁管理津贴。" },
                  { label: "目的", text: "筛选核心人员，以全城的业绩流水倒逼核心 BD 裂变团队。" }
                ]
              },
              {
                num: "3",
                color: "orange",
                title: "分润规则——全链路自动分账引擎",
                content: [
                  { label: "核心", text: "建立“激活拿快钱，交易拿长钱”的利益绑定机制。" },
                  { label: "逻辑", text: "交易达成→平台服务费→BD流水提成→酒店利润→前台员工扫码提成。" },
                  { label: "目的", text: "利益穿透，激活前台服务触点作为“长期推销员”。" }
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start group">
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-xl font-bold transition-all
                  ${item.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 
                    item.color === 'green' ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' : 
                    'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'}`}>
                  {item.num}
                </div>
                <div className="space-y-4 pt-2">
                  <h5 className="text-lg md:text-xl font-bold text-slate-900">{item.title}</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {item.content.map((point, pIdx) => (
                      <p key={pIdx} className="text-slate-600 text-base leading-relaxed flex items-start gap-3">
                        <span className={`font-bold shrink-0 mt-1 ${item.color === 'blue' ? 'text-blue-500' : item.color === 'green' ? 'text-green-500' : 'text-orange-500'}`}>
                          [{point.label}]
                        </span>
                        {point.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm relative group cursor-zoom-in" onClick={() => window.open(cityPartner1, '_blank')}>
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ImageIcon className="w-3.5 h-3.5" />
                    点击查看大图
                 </div>
                 <img 
                   src={cityPartner1} 
                   alt="城市合伙人机制与工具配图" 
                   className="w-full h-auto rounded-xl max-h-[600px] object-contain"
                 />
              </div>
           </div>
        </div>
      </Modal>

      {/* Floating Scroll Top */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center z-40 border border-blue-500"
      >
        <ArrowRight className="-rotate-90" />
      </motion.button>

    </div>
  );
}
