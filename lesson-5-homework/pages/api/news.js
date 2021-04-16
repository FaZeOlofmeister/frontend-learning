// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        weather: "上海 阴 11℃/13℃",
        leftBarList: [
            {
                title: "推荐",
                href: '#'
            },
            {
                title: "西瓜视频",
                href: "https://www.ixigua.com/"
            },
            {
                title: "热点",
                href: "https://www.toutiao.com/ch/news_hot/"
            },
            {
                title: "直播",
                href: "https://live.ixigua.com/"
            },
            {
                title: "图片",
                href: "https://www.toutiao.com/ch/news_image/"
            },
            {
                title: "科技",
                href: "https://www.toutiao.com/ch/news_tech/"
            },
            {
                title: "娱乐",
                href: "https://www.toutiao.com/ch/news_entertainment/"
            },
            {
                title: "游戏",
                href: "https://www.toutiao.com/ch/news_game/"
            },
            {
                title: "体育",
                href: "https://www.toutiao.com/ch/news_sports/"
            },
            {
                title: "懂车帝",
                href: "https://www.dongchedi.com/"
            },
            {
                title: "财经",
                href: "https://www.toutiao.com/ch/news_finance/"
            },
            {
                title: "数码",
                href: "https://www.toutiao.com/ch/digital/"
            }
        ],
        mainContentList: [
            {
                title: "百年厦大，向总书记报告",
                type: "视频",
                author: "人民网",
                comment: 16,
                time: Date,
                existImg: false,
                src: ""
            },
            {
                title: "「每日一习话」让红色基因、革命薪火代代传承",
                type: "视频",
                author: "央广网",
                comment: 46,
                time: Date,
                existImg: false,
                src: ""
            },
            {
                title: "联播+ | 跟着总书记踏上红色热土 汲取奋进力量",
                type: "时政",
                author: "央视网新闻",
                comment: 744,
                time: Date,
                existImg: false,
                src: ""
            }
        ],
    })
}
