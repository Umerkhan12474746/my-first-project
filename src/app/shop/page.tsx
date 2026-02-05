import { ProductCard } from "@/components/product-card";
import { catalogCategories, products } from "@/data/sample-data";

export default function ShopPage() {
  return (
    <main id="main-content" className="mx-auto max-w-[1280px] px-4 py-10">
      <p className="text-sm text-pharma-light">Home &gt; Shop Medicines</p>
      <div className="mt-4 grid gap-6 lg:grid-cols-4">
        <aside className="rounded-lg bg-white p-4 shadow-sm lg:col-span-1">
          <div className="flex justify-between"><h2 className="text-xl font-bold">Filters</h2><button className="text-pharma-primary">Clear All</button></div>
          <div className="mt-4 space-y-4 text-sm">
            <div><h3 className="font-semibold">Category</h3>{catalogCategories.map((cat)=><label key={cat} className="mt-1 block"><input type="checkbox" className="mr-2"/>{cat}</label>)}</div>
            <div><h3 className="font-semibold">Price Range $0-$500</h3><input type="range" min={0} max={500} className="w-full"/></div>
            <div><h3 className="font-semibold">Availability</h3><label className="block"><input type="checkbox" className="mr-2"/>In Stock</label><label className="block"><input type="checkbox" className="mr-2"/>Out of Stock</label></div>
            <button className="min-h-11 w-full rounded-md bg-pharma-primary text-white">Apply Filters</button>
          </div>
        </aside>
        <section className="lg:col-span-3">
          <div className="mb-4 flex flex-wrap items-center justify-between rounded-lg bg-white p-3 shadow-sm"><p>Showing 1-12 of 247 products</p><select className="rounded border px-3 py-2"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Name A-Z</option><option>Newest</option></select></div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{products.slice(0,12).map((p)=><ProductCard key={p.id} product={p} />)}</div>
          <div className="mt-8 flex justify-center gap-2"><button className="rounded border px-3 py-2">Prev</button>{[1,2,3].map((n)=><button key={n} className="rounded border px-3 py-2">{n}</button>)}<button className="rounded border px-3 py-2">Next</button></div>
        </section>
      </div>
    </main>
  );
}
