class BlogCard
{
    private title: string;
    private date: string;
    public dateComparator: string
    private previewDesc: string;
    private routeName: string;

    constructor(title:string, dateComparator:string, date: string, previewDesc:string, routeName:string)
    {
        this.title = title;
        this.dateComparator = dateComparator
        this.date = date;
        this.previewDesc = previewDesc;
        this.routeName = routeName;
    }
}

export {BlogCard}