import { getCldOgImageUrl } from 'next-cloudinary';
 
export const metadata = (other) => ({
  openGraph: {
    ...other,
    images: getCldOgImageUrl({
      src: '<Public ID>'
    })
  },
})


