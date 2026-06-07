export type ProductVariant = {
  id: string;
  label: string;
  priceIDR: number;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  highlights: string[];
  nutrition: { label: string; value: string }[];
  ingredients: string;
  variants: ProductVariant[];
  badgeColor: "primary" | "accent" | "cream-deep";
  image?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "protein-oatmeal",
    name: "Protein Oatmeal",
    tagline: "Sarapan tinggi protein, anti ribet.",
    description:
      "Oat creamy dengan protein lengkap—siap dalam 3 menit. Cocok untuk sarapan, pre-workout, atau pengganti makan saat sibuk.",
    longDescription: [
      "Protein Oatmeal Fitbreak dibuat dari rolled oats premium yang dipadukan dengan whey & plant protein untuk kombinasi asam amino lengkap.",
      "Setiap saji memberikan rasa kenyang lebih lama, energi stabil, dan dukungan otot pulih lebih cepat.",
      "Bebas pemanis buatan—manis alami dari pisang kering, kurma, atau cocoa premium.",
    ],
    highlights: [
      "15g protein per saji",
      "Tinggi serat (β-glucan dari oats)",
      "Tanpa gula tambahan",
      "Siap saji 3 menit",
    ],
    nutrition: [
      { label: "Kalori", value: "230 kcal" },
      { label: "Protein", value: "15 g" },
      { label: "Serat", value: "6 g" },
      { label: "Lemak", value: "5 g" },
      { label: "Karbohidrat", value: "32 g" },
      { label: "Gula", value: "4 g (alami)" },
    ],
    ingredients:
      "Rolled oats, whey protein isolate, pea protein, kakao Belanda, pisang kering, kurma, garam laut.",
    variants: [
      { id: "po-coklat", label: "Cokelat Belanda", priceIDR: 78000 },
      { id: "po-pisang", label: "Pisang Madu", priceIDR: 78000 },
      { id: "po-matcha", label: "Matcha Latte", priceIDR: 82000 },
    ],
    badgeColor: "primary",
    image: "/products/protein-oatmeal.jpg",
  },
  {
    slug: "fit-cookie",
    name: "Fit Cookie",
    tagline: "Cookie sehat yang beneran enak.",
    description:
      "Cookie oats panggang dengan tekstur chewy, tanpa tepung terigu dan tanpa gula tambahan. Cemilan guilt-free untuk teman ngopi.",
    longDescription: [
      "Fit Cookie dipanggang artisan dari rolled oats utuh, kacang almond, dan minyak kelapa. Tanpa terigu, tanpa pengawet.",
      "Manisnya halus dan natural—datang dari pisang panggang dan sedikit madu hutan.",
      "Cocok untuk teman ngopi sore, bekal anak sekolah, atau cemilan setelah workout.",
    ],
    highlights: [
      "Tanpa terigu",
      "Tanpa gula tambahan",
      "Tinggi serat & lemak baik",
      "Tekstur chewy & gurih",
    ],
    nutrition: [
      { label: "Kalori", value: "150 kcal" },
      { label: "Protein", value: "4 g" },
      { label: "Serat", value: "3 g" },
      { label: "Lemak", value: "7 g" },
      { label: "Karbohidrat", value: "18 g" },
      { label: "Gula", value: "5 g (alami)" },
    ],
    ingredients:
      "Rolled oats, almond panggang, minyak kelapa extra virgin, pisang panggang, madu hutan, telur, baking soda, garam laut, vanilla.",
    variants: [
      { id: "fc-original", label: "Original Oat (8 pcs)", priceIDR: 55000 },
      { id: "fc-choco", label: "Choco Chip (8 pcs)", priceIDR: 58000 },
      { id: "fc-raisin", label: "Raisin Almond (8 pcs)", priceIDR: 58000 },
    ],
    badgeColor: "accent",
    image: "/products/fit-cookie.jpg",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}
