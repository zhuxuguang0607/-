import { Product, Course, Badge } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'NOVABLAST 4',
    price: '¥ 1,090',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2oS58VYRme3RrfSt1ydi42mVTMSG4tc28GlcTXrzz6E6X2tGGn5jROSb4kGRagXC5bmn60y_xhBnZvJ-8r4wtrzuzgslUitRBzPjn_jQ-lEY0MtPcPuY7EkOFUZw8VCZGJ48Eiopc5M-uvTtOW_n5lVZ7yoPVDjpYn2BG8pkrZiATtm_ooZAcIQ48q9E3QJtIFkLn6929YiFVkrZU7QN20mbe_mYrxhUh5agwN3TJVfe45UEUFfvhWxl6V6bSTmP7dezaIETeuDU',
    description: '蹦床式回弹，轻盈缓震。',
    rating: 4.8
  },
  {
    id: '2',
    name: 'GEL-KAYANO 30',
    price: '¥ 1,390',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1D2kW4pY77lBjrnDdKjiUdKuhFpLTcEhFHI0GnBbnYo6F6s25LYllVC1c5CSB6p01_NyxizUuNFt6BcD9q8sUy3s6BMB9AsCyOmS7L_dBYZNDNDfu4YBBiBpTOJAVQCUo3_O5zVCuRg2YzztgF_NJzmfSTvksXL6sxz2mk_2LCyfmOEQheSQRNA3zwX68hOMxyU_J5oOZpO43QlLvEO-kacWmn9y5lYB98LZEjbDPrkfeM8KUJjrB5xZ_wg-KX3ZN3DYrCJhNY6M',
    description: '专业级稳定支撑，让每一步更坚定。',
    rating: 4.9,
    highlight: true
  },
  {
    id: '3',
    name: 'METASPEED SKY',
    price: '¥ 1,690',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5mzsMYY5u0IISJDM7eNClpPIjOe1XjP_6KGzzAKEYCtuJpO2KlXhXbKl_wTl2mA-vhorF2u3INQzSPiI8O0BTmBR9r-raBbkulrQj0JZ4Wk_VXZ_qKHdoHPzVF3ETK4qs55WimhPMd6iljJL0k7eX0y20kzSdRGdwusZ8MCN5Np7IZGkEUppOwg6aOGBnqfRffVVMXglrbecfbb0zit8pzgi8zhag9tuJJmt23MgMbNAqq4OQ0cHPgW96mmV0Rrs5RXGZpO80z10',
    description: '竞速巅峰，助力破速。',
    rating: 4.9
  }
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: '大师级销售话术脚本',
    description: '深度解析顾客需求，运用动力学数据支撑，将技术语言转化为感性连接。',
    icon: 'Sparkles',
    lessons: 12
  },
  {
    id: '2',
    title: '成长科学知识库',
    description: '系统化的运动科学知识体系，从步态分析到材质工艺。',
    icon: 'Beaker',
    lessons: 24
  }
];

export const BADGES: Badge[] = [
  {
    id: '1',
    name: 'Gait Analysis',
    description: '步态分析专家',
    icon: 'Footprints'
  },
  {
    id: '2',
    name: 'Product Tech',
    description: '产品技术深度',
    icon: 'Settings'
  },
  {
    id: '3',
    name: 'Sales Psychology',
    description: '销售心理学',
    icon: 'Brain'
  }
];
