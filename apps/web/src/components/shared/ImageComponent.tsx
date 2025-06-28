import { useState } from "react";

type ImageComponentProps = {
  readonly image: string;
  readonly name: string;
};

export function ImageComponent({ image, name }: ImageComponentProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-1/2">
      {loading && (
        <div className="w-full h-50 bg-gray-200 animate-pulse rounded-lg" />
      )}
      <img
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${loading ? 'hidden' : 'block'}`}
        src={image}
        alt={name}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}