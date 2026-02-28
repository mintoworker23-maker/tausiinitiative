import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { AnimateOnScroll } from './AnimateonScroll';

const HASHNODE_API_URL = 'https://gql.hashnode.com';
const PUBLICATION_HOST =
  import.meta.env.VITE_HASHNODE_PUBLICATION_HOST || 'blog.hashnode.dev';

const FALLBACK_POSTS = [
  {
    id: 'fallback-1',
    title: 'How Grassroots Mentorship Builds Lasting Confidence',
    brief:
      'A practical look at community-led mentorship programs and what makes them sustainable over time.',
    coverImage:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80',
    slug: '#',
    url: '#',
    publishedAt: new Date().toISOString(),
  },
  {
    id: 'fallback-2',
    title: 'Designing Youth Programs That Actually Reach People',
    brief:
      'Key lessons from building local programs around access, trust, and measurable outcomes.',
    coverImage:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    slug: '#',
    url: '#',
    publishedAt: new Date().toISOString(),
  },
  {
    id: 'fallback-3',
    title: 'Recent Update: Community Partnerships Expanding in 2026',
    brief:
      'A snapshot of new collaborations and what they mean for upcoming initiatives.',
    coverImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    slug: '#',
    url: '#',
    publishedAt: new Date().toISOString(),
  },
];

const hashnodeQuery = `
  query PublicationPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      title
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [publicationTitle, setPublicationTitle] = useState('Blog');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(HASHNODE_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: hashnodeQuery,
            variables: {
              host: PUBLICATION_HOST,
              first: 12,
            },
          }),
        });

        const data = await response.json();

        if (!response.ok || data.errors) {
          throw new Error('Could not load Hashnode posts.');
        }

        const publication = data?.data?.publication;
        const edges = publication?.posts?.edges || [];
        const parsed = edges
          .map((edge) => edge?.node)
          .filter(Boolean)
          .map((post) => ({
            id: post.id,
            title: post.title,
            brief: post.brief || 'Read the full story on our Hashnode publication.',
            coverImage: post.coverImage?.url || '',
            slug: post.slug,
            url: post.url,
            publishedAt: post.publishedAt,
          }));

        if (!active) return;

        if (publication?.title) {
          setPublicationTitle(publication.title);
        }
        setPosts(parsed);
      } catch (fetchError) {
        if (!active) return;
        setError(fetchError.message || 'Failed to load posts.');
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchPosts();
    return () => {
      active = false;
    };
  }, []);

  const displayPosts = useMemo(() => {
    if (posts.length > 0) return posts;
    return FALLBACK_POSTS;
  }, [posts]);

  return (
    <div className="w-full min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimateOnScroll animation="slideIn">
          <div className="inline-block mb-8 md:mb-10">
            <Card backgroundColor="bg-[#e83e8c]" textColor="text-black">
              <div className="py-2 px-4 text-2xl md:text-4xl font-bold whitespace-nowrap">
                {publicationTitle}
              </div>
            </Card>
          </div>
        </AnimateOnScroll>

        <div className="mb-6 text-sm text-gray-700">
          Source: Hashnode publication host `{PUBLICATION_HOST}`
          {error && (
            <span className="block mt-2 text-red-600">
              {error} Showing fallback posts until connection is configured.
            </span>
          )}
        </div>

        {loading ? (
          <div className="py-14 text-center text-gray-600">Loading posts...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <AnimateOnScroll animation="fadeUp" key={post.id}>
                <article className="overflow-hidden rounded-lg border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] h-full flex flex-col">
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-5 flex flex-col h-full">
                    <h2 className="text-lg md:text-xl font-bold text-black">{post.title}</h2>
                    <p className="mt-2 text-sm text-gray-700 flex-grow">{post.brief}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString()
                          : ''}
                      </span>
                      {post.url && post.url !== '#' ? (
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[#e83e8c] hover:text-black"
                        >
                          Read on Hashnode
                        </a>
                      ) : (
                        <Link to="/" className="text-sm font-semibold text-[#e83e8c] hover:text-black">
                          Read more
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;