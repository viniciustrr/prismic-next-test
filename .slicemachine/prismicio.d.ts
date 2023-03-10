// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Blog Post documents */
interface BlogPostDocumentData {
    /**
     * title field in *Blog Post*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *Blog Post*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * author field in *Blog Post*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.author
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    author: prismicT.KeyTextField;
    /**
     * banner field in *Blog Post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * content field in *Blog Post*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.content[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    content: prismicT.GroupField<Simplify<BlogPostDocumentDataContentItem>>;
    /**
     * Slice Zone field in *Blog Post*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BlogPostDocumentDataSlicesSlice>;
}
/**
 * Item in Blog Post ??? content
 *
 */
export interface BlogPostDocumentDataContentItem {
    /**
     * heading field in *Blog Post ??? content*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.content[].heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * body field in *Blog Post ??? content*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.content[].body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Slice for *Blog Post ??? Slice Zone*
 *
 */
type BlogPostDocumentDataSlicesSlice = never;
/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogPostDocumentData>, "blog_post", Lang>;
/** Content for main_page documents */
interface MainPageDocumentData {
    /**
     * logo field in *main_page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: main_page.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *main_page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: main_page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<MainPageDocumentDataSlicesSlice>;
}
/**
 * Slice for *main_page ??? Slice Zone*
 *
 */
type MainPageDocumentDataSlicesSlice = PostSlice;
/**
 * main_page document from Prismic
 *
 * - **API ID**: `main_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainPageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<MainPageDocumentData>, "main_page", Lang>;
export type AllDocumentTypes = BlogPostDocument | MainPageDocument;
/**
 * Item in Post ??? Items
 *
 */
export interface PostSliceDefaultItem {
    /**
     * Title field in *Post ??? Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Post ??? Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Author field in *Post ??? Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.items[].author
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    author: prismicT.KeyTextField;
    /**
     * postDate field in *Post ??? Items*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: post.items[].postdate
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    postdate: prismicT.DateField;
    /**
     * slug field in *Post ??? Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.items[].slug
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slug: prismicT.KeyTextField;
}
/**
 * Default variation for Post Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Post`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PostSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<PostSliceDefaultItem>>;
/**
 * Slice variation for *Post*
 *
 */
type PostSliceVariation = PostSliceDefault;
/**
 * Post Shared Slice
 *
 * - **API ID**: `post`
 * - **Description**: `Post`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PostSlice = prismicT.SharedSlice<"post", PostSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogPostDocumentData, BlogPostDocumentDataContentItem, BlogPostDocumentDataSlicesSlice, BlogPostDocument, MainPageDocumentData, MainPageDocumentDataSlicesSlice, MainPageDocument, AllDocumentTypes, PostSliceDefaultItem, PostSliceDefault, PostSliceVariation, PostSlice };
    }
}
