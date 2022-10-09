import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = '0svza137'
const dataset = 'production'
const useCdn = true

export const client = sanityClient({
    
    projectId: projectId,
    dataset: dataset,
    apiVersion: "2021-10-21",
    useCdn: useCdn,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)