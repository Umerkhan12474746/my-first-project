export default function OrderConfirmationPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 text-center">
      <div className="text-8xl">✅</div>
      <h1 className="mt-4 text-4xl font-bold">Order Placed Successfully!</h1>
      <p className="mt-2">Order ID: PC-2026-88912 <button className="underline">Copy</button></p>
      <p>Estimated delivery: Tomorrow • Payment: Card • Total paid: $78.21</p>
      <div className="mt-6 flex justify-center gap-3"><button className="rounded bg-pharma-primary px-4 py-2 text-white">Track Order</button><button className="rounded border px-4 py-2">Continue Shopping</button><button className="rounded border px-4 py-2">Download Invoice</button></div>
      <p className="mt-4 text-sm">Confirmation sent to email@example.com</p>
      <p className="mt-4 text-sm">Timeline: Confirmed → Packed → Shipped → Delivered</p>
    </main>
  );
}
