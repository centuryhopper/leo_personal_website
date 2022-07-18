


class BlogCard
{
    private title: string;
    private date: string;
    private dateComparator: string
    private previewDesc: string;
    private blogDetailsHTML: string;

    constructor(title:string, dateComparator:string, date: string, previewDesc:string, blogDetailsHTML:string)
    {
        this.title = title;
        this.dateComparator = dateComparator
        this.date = date;
        this.previewDesc = previewDesc;
        this.blogDetailsHTML = blogDetailsHTML;
    }
}

export {BlogCard}