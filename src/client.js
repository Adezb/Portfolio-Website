import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "uikao4q4",
  dataset: "production",
  // useCdn: ,
  apiVersion: "2022-02-01",
  token:
    "skPulaXfwrgrT3ab17Fny2Mykf9lmXdTTaatB6hVX70Ub37YrRsRvq828L0rwq2gxuoaXFbWJrYgb5h8cdMAGvAz9pvXulzIj1oZXCDbg7td0Tj6eFTjq6hHvKPYZatfzJrhniKOw1FGYxTWkMVeSYszglrjhfoanhprkSc7wL5GlTobNaxe",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
