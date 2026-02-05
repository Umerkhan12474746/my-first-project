export function Footer() {
  return (
    <footer>
      <div className="bg-pharma-dark py-12 text-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 md:grid-cols-4">
          <div><h3 className="text-xl font-bold">✚ PharmaCare+</h3><p className="mt-2 text-sm text-gray-300">Your trusted online pharmacy delivering genuine medicines with care.</p><p className="mt-3">📘 🐦 📷 💼</p></div>
          <div><h4 className="font-semibold">Quick Links</h4><ul className="mt-2 space-y-2 text-sm text-gray-300"><li>About Us</li><li>Contact Us</li><li>FAQs</li><li>Blog</li><li>Careers</li></ul></div>
          <div><h4 className="font-semibold">Customer Service</h4><ul className="mt-2 space-y-2 text-sm text-gray-300"><li>Track Order</li><li>Return Policy</li><li>Privacy Policy</li><li>Terms & Conditions</li><li>Shipping Information</li></ul></div>
          <div><h4 className="font-semibold">Contact Info</h4><ul className="mt-2 space-y-2 text-sm text-gray-300"><li>📍 123 Health St, NY</li><li>📞 1-800-PHARMACY</li><li>📧 support@pharmacy.com</li><li>🕒 Mon-Sun, 24/7</li></ul></div>
        </div>
        <div className="mx-auto mt-8 max-w-[1280px] px-4 text-sm text-gray-300">💳 Visa Mastercard PayPal | 🛡️ FDA Approved • Licensed</div>
      </div>
      <div className="bg-[#333] py-3 text-center text-sm text-gray-300">© 2026 PharmaCare+ | Powered by PharmaCare+ | Privacy | Terms | Sitemap</div>
    </footer>
  );
}
