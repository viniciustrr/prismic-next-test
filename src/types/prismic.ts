import * as prismicT from "@prismicio/types";

export type Image = prismicT.ImageField;

export type Post = {
    title: prismicT.KeyTextField,
    description: prismicT.KeyTextField,
    author: prismicT.KeyTextField,
    postDate: prismicT.DateField
}

export type MainPage = {
    logo: prismicT.ImageField,
    slices: Post[]
}