export { }

declare global {

    type sectionItem = { key?: string; title: string; description: string }

    type sectionItems = Array<sectionItem>

    type section = {
        key?: string;
        title: string;
        sectionItems: sectionItems;
    };

    type sections = Array<section>;

    type values = {
        fullname?: string;
        position?: string;
        phone?: string;
        email?: string;
    };


}