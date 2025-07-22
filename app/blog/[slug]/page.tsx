// /app/blog/[slug]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '../../components/AnimateOnScroll'; 
import { getPostBySlug, BlogPost } from '../../../lib/blogData'; // CORREÇÃO APLICADA AQUI

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = getPostBySlug(params.slug);
    if (!foundPost) {
      notFound();
    } else {
      setPost(foundPost);
    }
  }, [params.slug]);

  if (!post) {
    return <div className="text-center py-40">Carregando artigo...</div>;
  }

  return (
    <div className="bg-offWhite text-primaryBlue min-h-screen">
      {/* Cabeçalho do Artigo */}
      <section className="bg-primaryBlue text-offWhite py-20 pt-48 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimateOnScroll animation="fade-in-up">
            <p className="text-accentOrange mb-4">Para: {post.audience}</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
            <p className="mt-4 text-lg text-gray-300">Publicado em {post.publishedDate}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Conteúdo do Artigo */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="prose lg:prose-xl text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Navegação */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link href="/blog" className="font-semibold text-accentOrange hover:underline">
              ← Voltar para todos os artigos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
