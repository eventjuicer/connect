import { getCldOgImageUrl, CldImage } from 'next-cloudinary';
 
export const metadata = (other) => ({
  openGraph: {
    ...other,
    images: getCldOgImageUrl({
      src: '<Public ID>'
    })
  },
})


 
// <CldImage
//   width="960"
//   height="600"
//   src="<Your Public ID>"
//   sizes="100vw"
//   removeBackground
//   alt=""
// />
//https://next.cloudinary.dev/cldimage/examples

