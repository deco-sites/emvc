import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      <link href={asset("/main.css")} rel="stylesheet" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Inter';
            src: url(${asset("/fonts/Inter-Medium.ttf")}) format('ttf');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${asset("/fonts/Inter-SemiBold.ttf")}) format('ttf');
            font-weight: 600;
            font-style: normal;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${asset("/fonts/Inter-Regular.ttf")}) format('ttf');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Sora';
            src: url(${asset("/fonts/Sora-Regular.ttf")}) format('ttf');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Sora';
            src: url(${asset("/fonts/Sora-Bold.ttf")}) format('ttf');
            font-weight: 700;
            font-style: normal;
          }
          @font-face {
            font-family: 'Sora';
            src: url(${asset("/fonts/Sora-ExtraBold.ttf")}) format('ttf');
            font-weight: 800;
            font-style: normal;
          }
      `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
