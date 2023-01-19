import * as prismicT from "@prismicio/types";
import { RichTextBlock } from "prismic-reactjs";

export type Image = prismicT.ImageField;



export type BlogPost = {
    uid: string
    data:{ 
        title: prismicT.KeyTextField,
        subtitle: prismicT.KeyTextField,
        author: prismicT.KeyTextField
        banner: prismicT.ImageField,
        content: {
            heading: prismicT.KeyTextField,
            body:  RichTextBlock[]
        }[],
    }
    slices: object[];
    last_publication_date: Date
  }