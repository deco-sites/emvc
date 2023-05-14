import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  /** @description text to be rendered on top of the image */
  title?: string;
  /** @description text to be rendered on top of the image */
  subtitle?: string;
  image: {
    /** @description Image for big screens */
    desktop: LiveImage;
    /** @description Image for small screens */
    mobile: LiveImage;
    /** @description image alt text */
    alt?: string;
  };
}

export interface Props {
  banner: Banner;
  deskWidth?: number;
  deskHeight?: number;
  mobileWidth?: number;
  mobileHeight?: number;
}

function BannerUI(
  {
    banner,
    deskHeight = 560,
    deskWidth = 1280,
    mobileHeight = 360,
    mobileWidth = 360,
  }: Props,
) {
  const { title, subtitle, image } = banner;

  return (
    <div class="grid grid-cols-1 grid-rows-1">
      <Picture
        preload
        class="col-start-1 col-span-1 row-start-1 row-span-1 "
      >
        <Source
          src={image.mobile}
          width={mobileWidth}
          height={mobileHeight}
          media="(max-width: 767px)"
        />
        <Source
          src={image.desktop}
          width={deskWidth}
          height={deskHeight}
          media="(min-width: 767px)"
        />
        <img
          class={`w-screen h-[${deskHeight}px] object-fill`}
          src={image.desktop}
          alt={image.alt ?? title}
        />
      </Picture>

      <div class="container flex flex-col items-center justify-center gap-7 sm:items-start col-start-1 col-span-1 row-start-1 row-span-1 w-full pl-4 md:pl-24">
        <h1 class="max-w-[700px]">
          <span class="text-5xl font-sora font-extrabold text-white">
            {title}
          </span>
        </h1>
        <h2 class="max-w-[596px]">
          <span class="text-lg font-sora font-regular text-white">
            {subtitle}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default BannerUI;
