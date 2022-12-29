export { }

declare global {
    type section = {
        key?: string;
        title: string;
        sectionItems: Array<{ key?: string; title: string; description: string }>;
    };

    type sections = Array<section>;

    type values = {
        fullname?: string;
        position?: string;
        phone?: string;
        email?: string;
    };


}