import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "STEAM Volunteer Application — General Science Program",
    description:
        "Join our volunteer program as a STEAM teacher visitor in rural Indonesia. Help bridge the education gap in Wonosobo, Kalidadap and inspire young minds through hands-on Science, Technology, Engineering, Art, and Math activities.",
    alternates: {
        canonical: "/steam-volunteer",
    },
    openGraph: {
        title: "STEAM Volunteer Application — General Science Program",
        description:
            "Become a STEAM teacher visitor and make a meaningful impact on the lives of children in rural Indonesia. Apply now to join our volunteer program.",
        url: "/steam-volunteer",
    },
};

export default function SteamVolunteerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
