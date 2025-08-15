import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductDetails from "@/components/products/product-details";
import RelatedProducts from "@/components/products/related-products";
import { getProduct, getRelatedProducts } from "@/lib/api";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - StyleHub`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const [product, relatedProducts] = await Promise.all([
    getProduct(params.id),
    getRelatedProducts(params.id),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductDetails product={product} />
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
}
