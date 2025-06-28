// components/Layout.tsx
import React from 'react'
import { CategorySidebar } from './CategorySidebar'

interface LayoutProps {
  children: React.ReactNode
  categories?: any[]
  currentCategory?: string
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  categories = [], 
  currentCategory 
}) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* 좌측 사이드바 */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">카테고리</h2>
          <CategorySidebar 
            categories={categories}
            currentCategory={currentCategory}
          />
        </div>
      </aside>
      
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
