import { notFound } from "next/navigation";
export default function ProductsDetails({
  params,
}: Readonly<{
  params: { productId: string };
}>) {
  if (Number(params.productId) > 3) {
    return notFound();
  }
  return (
    <div>
      <h1>Product {params.productId}</h1>
    </div>
  );
}
