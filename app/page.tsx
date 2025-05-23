import ImageDisplaySection from "@/components/image-display-section";
import TransformationSection from "@/components/transformation-section";
import TransformedImageSection from "@/components/transformed-image-section";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">
        ImageKit Ai Transformation
      </h1>

      <div className="max-w-6xl mx-auto">
        <ImageDisplaySection />
        <TransformationSection />
        <TransformedImageSection />
      </div>
    </main>
  );
}
