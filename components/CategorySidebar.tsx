// components/CategorySidebar.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Category {
  name: string
  slug: string
  count: number
}

interface CategorySidebarProps {
  categories: Category[]
  currentCategory?: string
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({ 
  categories, 
  currentCategory 
}) => {
  const router = useRouter()

  return (
    <nav className="space-y-2">
      <Link href="/">
        <a className={`block px-3 py-2 rounded-md text-sm font-medium ${
          router.pathname === '/' 
            ? 'bg-blue-100 text-blue-700' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}>
          전체 보기
        </a>
      </Link>
      
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <a className={`block px-3 py-2 rounded-md text-sm font-medium ${
            currentCategory === category.slug
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}>
            {category.name}
            <span className="ml-2 text-xs text-gray-500">
              ({category.count})
            </span>
          </a>
        </Link>
      ))}
    </nav>
  )
}
