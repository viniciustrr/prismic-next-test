import { PrismicProvider } from "@prismicio/react";
import {PrismicPreview} from "@prismicio/next";
import { repositoryName, linkResolver } from "../services/prismic";
import Link from 'next/link';
import "../styles/global.css";

export default function App({Component, pageProps}) {
    return( 
        <PrismicProvider linkResolver={linkResolver}
        internalLinkComponent={({href,...props})=> (
            <Link href={href}>
                <a {...props}/>
            </Link>
        )}
        >
            <PrismicPreview repositoryName={repositoryName}>
                <Component {...pageProps}/>
            </PrismicPreview>

        </PrismicProvider>
    
    )
}

