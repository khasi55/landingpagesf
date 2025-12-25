import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | SharkFunded - Trading Insights & News",
    description: "Stay updated with the latest prop trading insights, market analysis, and SharkFunded news.",
    openGraph: {
        title: "Blog | SharkFunded",
        description: "Stay updated with the latest prop trading insights, market analysis, and SharkFunded news.",
        url: "https://sharkfunded.com/blog",
        siteName: "SharkFunded",
        type: "website",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
