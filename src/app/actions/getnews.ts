"use server"

export async function getFinanceNews() {
  const API_URL = `https://newsdata.io/api/1/latest?apikey=${process.env.NEXT_PUBLIC_NEWSDATA_API_KEY}&q=finance&language=en`

  const res = await fetch(API_URL, {
    next: { revalidate: 86400 }, // cache for 24 hours (in seconds)
  })

  if (!res.ok) {
    throw new Error("Failed to fetch finance news")
  }

  const data = await res.json()

  if (data.status !== "success" || !Array.isArray(data.results)) {
    return []
  }

  return data.results.map((item: any) => ({
    id: item.article_id,
    title: item.title || "Untitled",
    content:
      item.description || "No description available for this article.",
    image: item.image_url,
    tags: (item.keywords || []).slice(0, 3),
    postedBy: item.source_name || "Unknown Source",
    createdAt: item.pubDate || new Date().toISOString(),
    users: {
      name:
        (item.creator && item.creator[0]) ||
        item.source_name ||
        "Editorial Team",
      email: "contact@newsdata.io",
      pfp:
        item.source_icon ||
        "/default-avatar.png",
    },
    link: item.link,
  }))
}
