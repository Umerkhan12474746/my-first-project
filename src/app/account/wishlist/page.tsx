import { AccountShell } from "@/components/account/account-shell";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/sample-data";

export default function WishlistPage() {
  return <AccountShell><h1 className="text-2xl font-bold">Wishlist</h1><div className="mt-4 grid gap-4 md:grid-cols-2">{products.slice(0,4).map((p)=><ProductCard key={p.id} product={p}/>)}</div></AccountShell>;
}
