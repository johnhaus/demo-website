import { useEffect, useRef } from "react";

export default function useInfiniteScroll({
  hasMore,
  loading,
  onLoadMore,
  rootMargin = "100px",
}) {
  const sentinelRef = useRef(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          onLoadMore();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [loading, hasMore, onLoadMore, rootMargin]);

  return sentinelRef;
}
