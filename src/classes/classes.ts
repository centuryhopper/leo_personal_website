


class BlogCard
{
    private title: string;
    private date: string;
    private dateComparator: string
    private previewDesc: string;

    constructor(title:string, dateComparator:string, date: string, previewDesc:string)
    {
        this.title = title;
        this.dateComparator = dateComparator
        this.date = date;
        this.previewDesc = previewDesc;
    }
}

export {BlogCard}