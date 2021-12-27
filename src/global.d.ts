/// <reference types="@sveltejs/kit" />

interface CourseInfo {
    slug: string;
    title: string;
    subtitle: string;
    price: number;
    upcoming: boolean;
    discount: boolean;
    discountedPrice?: number;
    lectureCount: number;
    introLink: string;
    features: string[];
}

interface CourseDetail {
    slug: string;
    detail: string;
}
