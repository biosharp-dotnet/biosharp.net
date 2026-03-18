/**
 * Swizzled BlogListPage (wrap + eject hybrid)
 *
 * Changes vs. default:
 *  - Full-width dark hero header matching the rest of the site
 *  - Two-column layout: post list (left) + custom right sidebar
 *  - Right sidebar: stats, tag cloud (all tags with counts), recent posts
 *  - "Showing X–Y of Z" post-range counter above the list
 *  - Pagination preserved via BlogListPaginator
 *
 * To revert to default behaviour, delete this file.
 */

import React, { useMemo } from 'react';
import clsx from 'clsx';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import styles from './styles.module.css';

// ── Collect all tags (with counts) from the global blog data ──────────────
function useAllBlogTags() {
  const globalData = useGlobalData();
  return useMemo(() => {
    const allPosts =
      globalData?.['docusaurus-plugin-content-blog']?.default?.allPosts ?? [];
    const tagMap = new Map();
    allPosts.forEach((post) => {
      (post.metadata?.tags ?? []).forEach((tag) => {
        if (!tagMap.has(tag.label)) {
          tagMap.set(tag.label, { ...tag, count: 0 });
        }
        tagMap.get(tag.label).count++;
      });
    });
    return Array.from(tagMap.values()).sort((a, b) => b.count - a.count);
  }, [globalData]);
}

// ── Right sidebar ──────────────────────────────────────────────────────────
function BlogRightSidebar({ metadata, items }) {
  const allTags = useAllBlogTags();
  const { totalCount, totalPages } = metadata;

  // Recent posts extracted from current items (fallback to items on this page)
  const recentPosts = items.slice(0, 5).map(({ content }) => ({
    title: content.metadata.title,
    permalink: content.metadata.permalink,
  }));

  return (
    <aside className={styles.sidebar}>

      {/* ── Stats ── */}
      <div className={styles.sidebarCard}>
        <h3 className={styles.sidebarCardTitle}>Overview</h3>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{totalCount}</span>
            <span className={styles.statLabel}>
              {totalCount === 1 ? 'post' : 'posts'}
            </span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>{totalPages}</span>
            <span className={styles.statLabel}>
              {totalPages === 1 ? 'page' : 'pages'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Tag cloud ── */}
      {allTags.length > 0 && (
        <div className={styles.sidebarCard}>
          <h3 className={styles.sidebarCardTitle}>Tags</h3>
          <div className={styles.tagCloud}>
            {allTags.map((tag) => (
              <Link
                key={tag.label}
                to={tag.permalink}
                className={styles.tagChip}
              >
                {tag.label}
                <span className={styles.tagBadge}>{tag.count}</span>
              </Link>
            ))}
          </div>
          <Link to="/blog/tags" className={styles.browseTagsLink}>
            Browse all tags →
          </Link>
        </div>
      )}

      {/* ── Recent posts ── */}
      {recentPosts.length > 0 && (
        <div className={styles.sidebarCard}>
          <h3 className={styles.sidebarCardTitle}>Recent Posts</h3>
          <ul className={styles.recentList}>
            {recentPosts.map((post) => (
              <li key={post.permalink} className={styles.recentItem}>
                <Link to={post.permalink} className={styles.recentLink}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </aside>
  );
}

// ── Head metadata ──────────────────────────────────────────────────────────
function BlogListPageMetadata({ metadata }) {
  const { blogTitle, blogDescription } = metadata;
  return (
    <>
      <PageMetadata title={blogTitle} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

// ── Page body ──────────────────────────────────────────────────────────────
function BlogListPageContent({ metadata, items }) {
  const { page, postsPerPage, totalCount } = metadata;
  const startIndex = (page - 1) * postsPerPage + 1;
  const endIndex = Math.min(page * postsPerPage, totalCount);

  return (
    <div className={styles.pageWrapper}>

      {/* Dark hero header */}
      <div className={styles.blogHeader}>
        <h1 className={styles.blogHeaderTitle}>Blog</h1>
        <p className={styles.blogHeaderSub}>
          Insights, tutorials, and updates from the BioSharp team.
        </p>
      </div>

      {/* Two-column body */}
      <div className={styles.blogBody}>

        {/* Posts column */}
        <main className={styles.postsColumn}>
          <p className={styles.postRange}>
            Showing{' '}
            <strong>
              {startIndex}–{endIndex}
            </strong>{' '}
            of <strong>{totalCount}</strong>{' '}
            {totalCount === 1 ? 'post' : 'posts'}
          </p>

          <BlogPostItems items={items} />

          <div className={styles.paginatorWrapper}>
            <BlogListPaginator metadata={metadata} />
          </div>
        </main>

        {/* Right sidebar */}
        <BlogRightSidebar metadata={metadata} items={items} />

      </div>
    </div>
  );
}

// ── Root export ────────────────────────────────────────────────────────────
export default function BlogListPage(props) {
  const { metadata } = props;
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <BlogListPageMetadata {...props} />
      <Layout
        title={metadata.blogTitle}
        description={metadata.blogDescription}
      >
        <BlogListPageContent {...props} />
      </Layout>
    </HtmlClassNameProvider>
  );
}
