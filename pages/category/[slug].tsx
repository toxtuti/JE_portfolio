// pages/category/[slug].tsx
import type { GetStaticProps, GetStaticPaths } from 'next'
import { Layout } from '../../components/Layout'
import { NotionAPI } from 'notion-client'
import siteConfig from '../../site.config'

export default function CategoryPage({ posts, category, categories }) {
  return (
    <Layout categories={categories} currentCategory={category.slug}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {category.name}
          </h1>
          <p className="text-gray-600">
            {posts.length}개의 포스트가 있습니다.
          </p>
        </div>
        
        <div className="grid gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                <a href={`/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600 text-sm mb-3">{post.date}</p>
              {post.description && (
                <p className="text-gray-700">{post.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// 이 부분은 Notion API 연결 로직 (복잡한 부분)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 여기서 Notion에서 해당 카테고리의 포스트들을 가져옴
  // 실제 구현은 기존 코드를 참고해서 수정해야 함
  return {
    props: {
      posts: [], // 실제 데이터로 교체
      category: { name: '카테고리명', slug: params.slug },
      categories: [] // 전체 카테고리 목록
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 모든 카테고리 경로 생성
  return {
    paths: [],
    fallback: 'blocking'
  }
}
