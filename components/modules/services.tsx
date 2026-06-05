'use client';

import { Code2, ShoppingCart, Cloud, Layout } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';

export default function Services() {
  const t = useTranslations('Services');
  const h = useTranslations('Hero');

  const services = [
    {
      title: t('customWeb.title'),
      description: t('customWeb.desc'),
      icon: Code2,
    },
    {
      title: t('ecommerce.title'),
      description: t('ecommerce.desc'),
      icon: ShoppingCart,
    },
    {
      title: t('saas.title'),
      description: t('saas.desc'),
      icon: Cloud,
    },
    {
      title: t('landing.title'),
      description: t('landing.desc'),
      icon: Layout,
    },
  ];

  return (
    <div id="services" className="min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {h('title')}
        </h2>
        <p className="mt-4 text-lg text-gray-400 sm:text-xl">
          {h('subtitle')}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                   key={index}
                   className="group relative flex flex-col bg-black border border-white/20 rounded-xl transition-all duration-300"
                 >
                   <CardHeader className="pb-3">
                     <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 group-hover:bg-white transition-colors duration-300">
                       <Icon className={`h-6 w-6 text-white group-hover:text-black transition-all duration-300 group-hover:scale-110`} />
                     </div>
                     <CardTitle className="text-xl font-semibold tracking-tight text-white">
                       {service.title}
                     </CardTitle>
                   </CardHeader>
             
                   <CardContent className="flex-1 pb-4">
                     <p className="text-sm leading-relaxed text-white/70">
                       {service.description}
                     </p>
                   </CardContent>
             
                   <CardFooter className="pt-2">
                     <Link href="#contact" className="w-fit">
                       <button className="inline-flex w-fit items-center justify-center rounded-full border border-white/30 bg-transparent px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/20">
                         {h('startNow')}
                         <svg
                           className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                         >
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth={2}
                             d="M9 5l7 7-7 7"
                           />
                         </svg>
                       </button>
                     </Link>
                   </CardFooter>
                 </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
