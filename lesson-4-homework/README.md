完全由自己实现的轮播，没有使用bootstrap或Antd这种组件库 

进入目录后使用命令`yarn start`即可在http://localhost:3000来访问。

目前存在的问题是最后一张图片切换到第一张图片时，不能保持原来的切换方向（比如原来是向右，这时就会向左快速遍历所有图片回到第一张），这样的视觉效果不是很好，后续准备改进。

目前设计的改进方法是使用n+1张图片，使得最后一张与第一张完全相同，然后每次到达最后一张图片时初始化轮播的状态。