// /app/blog/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { allBlogPosts } from '../../lib/blogData';

export default function BlogPage() {
  return (
    <div className="bg-primaryBlue text-offWhite min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-offWhite overflow-hidden">
        <Image
          src="/images/16.png" // SUGESTÃO: Use uma imagem genérica de inspiração/escrita
          alt="Blog da Bravia RH"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0 absolute inset-0"
          priority
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/1920x1080/003049/FFFFFF?text=Blog'; }}
        />
        <div className="absolute inset-0 bg-primaryBlue opacity-85 z-10"></div>
        <div className="relative z-20 p-4 max-w-5xl mx-auto pt-32">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-accentOrange mb-6 leading-tight">Blog Bravia RH</h1>
            <p className="text-xl md:text-2xl">Insights e estratégias sobre carreira, liderança e gestão de pessoas, explorando a força da inteligência emocional, neurociência, autoestima e confiança.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Listagem de Artigos */}
      <section className="py-16 bg-offWhite text-primaryBlue">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-12">
            {allBlogPosts.map((post, index) => (
              <AnimateOnScroll key={post.slug} animation="fade-in-up" delay={100 * (index + 1)}>
                <article 
                  className="bg-white p-8 rounded-lg" 
                  style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.4)' }}
                >
                  <p className="text-sm text-gray-500 mb-2">{post.publishedDate} | Para: {post.audience}</p>
                  <h2 className="text-3xl font-bold text-primaryBlue mb-4 hover:text-accentOrange transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.summary}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block font-semibold text-accentOrange hover:underline"
                  >
                    Ler artigo completo →
                  </Link>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}