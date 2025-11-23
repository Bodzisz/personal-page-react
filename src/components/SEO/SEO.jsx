import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, type = 'website', image }) {
    const siteTitle = 'Kacper Wojcicki';
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

    // Default image if none provided - using a placeholder or site logo if available
    // For now using a generic placeholder or leaving undefined if not provided
    const metaImage = image || 'https://kacper.software/og-image.png';

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:image" content={metaImage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@kacpersoftware" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": type === 'article' ? 'Article' : 'WebSite',
                    "headline": fullTitle,
                    "description": description,
                    "image": metaImage,
                    "author": {
                        "@type": "Person",
                        "name": "Kacper Wojcicki"
                    },
                    "url": canonical
                })}
            </script>
        </Helmet>
    );
}
