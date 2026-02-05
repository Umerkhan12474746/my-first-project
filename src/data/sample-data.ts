import { Article, Category, Product, Testimonial } from "@/types";

export const categories: Category[] = [
  { name: "Prescription Medicines", icon: "💊", count: "250+ products" },
  { name: "OTC Medicines", icon: "🏥", count: "410+ products" },
  { name: "Vitamins & Supplements", icon: "❤️", count: "180+ products" },
  { name: "Healthcare Devices", icon: "🩺", count: "120+ products" },
  { name: "Baby Care", icon: "👶", count: "140+ products" },
  { name: "Personal Care", icon: "💅", count: "200+ products" },
];

export const catalogCategories = [
  "Pain Relief",
  "Cold & Flu",
  "Diabetes Care",
  "Heart Health",
  "Vitamins & Supplements",
  "First Aid",
  "Baby Care",
  "Personal Care",
  "Medical Devices",
  "Ayurvedic",
];

export const products: Product[] = [
  { id: 1, name: "Paracetamol 500mg Tablets", brand: "HealthCare Pharma", category: "Pain Relief", price: 12.99, oldPrice: 15.99, discount: 19, rating: 4.5, reviews: 234, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80", description: "Fast acting pain and fever relief tablets.", composition: "Paracetamol 500mg", uses: "Pain relief, fever reduction", sideEffects: "Nausea, rash (rare)" },
  { id: 2, name: "Amoxicillin 250mg Capsules", brand: "MediCore", category: "Prescription Medicines", price: 24.5, oldPrice: 29.0, discount: 15, rating: 4.3, reviews: 112, inStock: true, rxRequired: true, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80", description: "Antibiotic capsules for bacterial infections.", composition: "Amoxicillin 250mg", uses: "Treat bacterial infections", sideEffects: "Diarrhea, nausea" },
  { id: 3, name: "Vitamin D3 60K IU Softgels", brand: "NutriLife", category: "Vitamins & Supplements", price: 18.75, oldPrice: 22.99, discount: 18, rating: 4.7, reviews: 301, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80", description: "Supports bone and immunity health.", composition: "Cholecalciferol 60000 IU", uses: "Vitamin D deficiency", sideEffects: "Constipation (rare)" },
  { id: 4, name: "Digital Blood Pressure Monitor", brand: "CareTrack", category: "Medical Devices", price: 49.99, oldPrice: 59.99, discount: 17, rating: 4.6, reviews: 89, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", description: "Automatic upper arm BP monitor.", composition: "N/A", uses: "Monitor blood pressure", sideEffects: "N/A" },
  { id: 5, name: "Cetirizine 10mg Tablets", brand: "AllerFree", category: "Cold & Flu", price: 8.99, oldPrice: 10.99, discount: 18, rating: 4.2, reviews: 160, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80", description: "Relief from allergy symptoms.", composition: "Cetirizine Hydrochloride 10mg", uses: "Allergies", sideEffects: "Drowsiness" },
  { id: 6, name: "Insulin Pen Needles 4mm", brand: "DiaCare", category: "Diabetes Care", price: 14.99, oldPrice: 18.5, discount: 19, rating: 4.5, reviews: 72, inStock: true, rxRequired: true, image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=800&q=80", description: "Single-use fine insulin pen needles.", composition: "Sterile steel", uses: "Insulin administration", sideEffects: "Mild irritation" },
  { id: 7, name: "Omega-3 Fish Oil Capsules", brand: "NutriLife", category: "Heart Health", price: 21.0, oldPrice: 26.0, discount: 19, rating: 4.8, reviews: 210, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1514995669114-b929d6f4db96?auto=format&fit=crop&w=800&q=80", description: "Supports heart and brain health.", composition: "EPA/DHA Fish Oil", uses: "Heart wellness", sideEffects: "Fishy aftertaste" },
  { id: 8, name: "ORS Rehydration Powder", brand: "HydraPlus", category: "First Aid", price: 5.5, oldPrice: 6.5, discount: 15, rating: 4.1, reviews: 49, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80", description: "Electrolyte balance for dehydration.", composition: "Glucose and mineral salts", uses: "Dehydration", sideEffects: "None known" },
  { id: 9, name: "Baby Gentle Wipes 72 Sheets", brand: "TinyCare", category: "Baby Care", price: 9.99, oldPrice: 12.5, discount: 20, rating: 4.7, reviews: 142, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80", description: "Hypoallergenic baby wipes.", composition: "Aloe and water-based formula", uses: "Baby hygiene", sideEffects: "None known" },
  { id: 10, name: "Aloe Vera Skin Gel", brand: "PureGlow", category: "Personal Care", price: 11.49, oldPrice: 14.0, discount: 18, rating: 4.4, reviews: 133, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80", description: "Cooling skin hydration gel.", composition: "Aloe vera extract", uses: "Skin soothing", sideEffects: "Mild irritation (rare)" },
  { id: 11, name: "Metformin 500mg Tablets", brand: "GlucoMed", category: "Diabetes Care", price: 16.99, oldPrice: 19.99, discount: 15, rating: 4.4, reviews: 198, inStock: true, rxRequired: true, image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80", description: "Helps control blood sugar levels.", composition: "Metformin Hydrochloride 500mg", uses: "Type 2 diabetes", sideEffects: "GI discomfort" },
  { id: 12, name: "Digital Thermometer", brand: "CareTrack", category: "Medical Devices", price: 13.99, oldPrice: 16.99, discount: 18, rating: 4.3, reviews: 92, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80", description: "Fast and accurate digital thermometer.", composition: "N/A", uses: "Temperature monitoring", sideEffects: "N/A" },
  { id: 13, name: "Herbal Cough Syrup", brand: "AyuHeal", category: "Ayurvedic", price: 10.5, oldPrice: 13.0, discount: 19, rating: 4.1, reviews: 77, inStock: false, rxRequired: false, image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80", description: "Soothes throat and relieves cough.", composition: "Tulsi, Mulethi, Honey", uses: "Cough relief", sideEffects: "None significant" },
  { id: 14, name: "Atorvastatin 10mg", brand: "CardioSafe", category: "Heart Health", price: 19.99, oldPrice: 24.99, discount: 20, rating: 4.6, reviews: 145, inStock: true, rxRequired: true, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80", description: "Helps manage cholesterol levels.", composition: "Atorvastatin 10mg", uses: "Hyperlipidemia", sideEffects: "Muscle pain (rare)" },
  { id: 15, name: "N95 Face Masks (Pack of 10)", brand: "SafeBreath", category: "First Aid", price: 15.0, oldPrice: 19.0, discount: 21, rating: 4.5, reviews: 121, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1584634731339-252c58ab0d8f?auto=format&fit=crop&w=800&q=80", description: "High filtration N95 masks.", composition: "N/A", uses: "Respiratory protection", sideEffects: "N/A" },
  { id: 16, name: "Ibuprofen 400mg Tablets", brand: "PainAway", category: "Pain Relief", price: 11.25, oldPrice: 13.75, discount: 18, rating: 4.4, reviews: 167, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80", description: "Anti-inflammatory pain relief.", composition: "Ibuprofen 400mg", uses: "Pain and inflammation", sideEffects: "Heartburn" },
  { id: 17, name: "Electrolyte Drink Mix", brand: "HydraPlus", category: "Cold & Flu", price: 7.99, oldPrice: 9.99, discount: 20, rating: 4.2, reviews: 83, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1514995669114-b929d6f4db96?auto=format&fit=crop&w=800&q=80", description: "Hydration support for recovery.", composition: "Electrolytes + glucose", uses: "Hydration", sideEffects: "None known" },
  { id: 18, name: "Prenatal Multivitamin", brand: "NutriLife", category: "Vitamins & Supplements", price: 23.0, oldPrice: 27.0, discount: 15, rating: 4.8, reviews: 104, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80", description: "Daily prenatal nutritional support.", composition: "Iron, Folic acid, DHA", uses: "Prenatal health", sideEffects: "Mild nausea" },
  { id: 19, name: "Baby Rash Cream", brand: "TinyCare", category: "Baby Care", price: 8.5, oldPrice: 10.0, discount: 15, rating: 4.5, reviews: 68, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80", description: "Soothing diaper rash cream.", composition: "Zinc oxide", uses: "Rash protection", sideEffects: "None known" },
  { id: 20, name: "Hand Sanitizer 500ml", brand: "PureGlow", category: "Personal Care", price: 6.99, oldPrice: 8.99, discount: 22, rating: 4.3, reviews: 190, inStock: true, rxRequired: false, image: "https://images.unsplash.com/photo-1584634731339-252c58ab0d8f?auto=format&fit=crop&w=800&q=80", description: "Kills 99.9% germs instantly.", composition: "70% Isopropyl alcohol", uses: "Hand hygiene", sideEffects: "Dry skin" },
];

export const testimonials: Testimonial[] = [
  { name: "Sarah Johnson", location: "New York", rating: 5, quote: "Super fast delivery and genuine products every single time." },
  { name: "Michael Chen", location: "San Francisco", rating: 5, quote: "Prescription upload was easy and customer support was amazing." },
  { name: "Priya Sharma", location: "Chicago", rating: 4, quote: "Great discounts and user-friendly app experience." },
  { name: "David Lee", location: "Seattle", rating: 5, quote: "I trust PharmaCare+ for my family healthcare needs." },
  { name: "Emma Wilson", location: "Austin", rating: 5, quote: "Order tracking and delivery estimates are very accurate." },
  { name: "Carlos Rivera", location: "Miami", rating: 4, quote: "Wide range of medicines and secure checkout process." },
];

export const articles: Article[] = [
  { id: 1, title: "10 Daily Habits for a Healthier Heart", excerpt: "Simple lifestyle changes that can improve your cardiovascular health.", category: "Wellness Tips", date: "May 12, 2026", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, title: "How to Build a Home First-Aid Kit", excerpt: "Must-have essentials for managing minor injuries at home.", category: "First Aid", date: "May 05, 2026", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, title: "Managing Diabetes with Diet and Exercise", excerpt: "Learn practical daily strategies to manage blood sugar effectively.", category: "Diabetes Care", date: "Apr 28, 2026", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, title: "Understanding Antibiotics: Dos and Don’ts", excerpt: "Important guidance on safe and effective antibiotic usage.", category: "Medication Safety", date: "Apr 21, 2026", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, title: "Supplements That Boost Immunity", excerpt: "Evidence-backed vitamins and nutrients for immune support.", category: "Nutrition", date: "Apr 10, 2026", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, title: "Healthy Sleep Routine for Better Recovery", excerpt: "How quality sleep helps your body heal and recharge.", category: "Lifestyle", date: "Apr 03, 2026", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80" },
];
