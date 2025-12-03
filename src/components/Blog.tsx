import { useState, useEffect } from 'react';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://boy2.hatenablog.com/rss');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');

        const posts: BlogPost[] = Array.from(items).slice(0, 3).map(item => {
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';

          // HTMLタグを削除して最初の100文字を取得
          const plainText = description.replace(/<[^>]*>/g, '');
          const excerpt = plainText.length > 100
            ? plainText.substring(0, 100) + '...'
            : plainText;

          // 日付をフォーマット
          const date = new Date(pubDate).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });

          return { title, date, excerpt, link };
        });

        setBlogPosts(posts);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
        // エラー時のフォールバック
        setBlogPosts([
          {
            title: 'ブログ記事を読み込めませんでした',
            date: '',
            excerpt: 'はてなブログをご覧ください',
            link: 'https://boy2.hatenablog.com/',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-gray-800 dark:text-gray-200 mb-8">
            Recent Posts
          </h2>
          <div className="space-y-6">
            {loading ? (
              <div className="text-center text-gray-500 dark:text-gray-400">
                Loading...
              </div>
            ) : (
              blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-slate-900 p-5 border-l-4 border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 transition-colors"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-base font-normal text-gray-800 dark:text-gray-200 flex-1">
                        {post.title}
                      </h3>
                      {post.date && (
                        <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                          {post.date}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </p>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
