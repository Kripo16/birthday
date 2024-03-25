// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "give it to me",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Lovely little cutie",  // 同上...
        "today is your birthday",
        "This is what we have together",
        "It’s the third birthday",
        "last year's birthday",
        "Still remember the day we ate at Wang Po Chuan Chuan?",
        "I want to eat well this year",
        "I want to feed my cute pigs well.",
        "Then take it away",
        "IMAD~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "start",
        play: "music",
        bannar_coming: "color",
        balloons_flying: "It seems like something is missing",
        cake_fadein: "cake west？",
        light_candle: "Candle？",
        wish_message: "Happy birthday",
        story: "A MESSAGE FOR YOU",
    }
};
