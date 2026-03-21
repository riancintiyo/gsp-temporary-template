import Image, { type ImageProps } from "next/image";

export function LazyImage({ loading, priority, ...props }: ImageProps) {
    return <Image {...props} priority={priority} loading={priority ? loading : (loading ?? "lazy")} />;
}
