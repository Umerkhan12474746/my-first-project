import { SimplePage } from "@/components/simple-page";
import { articles } from "@/data/sample-data";

export default function HealthArticles() { return <SimplePage title="Health Articles">{articles.map((a)=><article key={a.id} className="mb-3 rounded border p-3"><h3>{a.title}</h3><p>{a.excerpt}</p></article>)}</SimplePage>; }
