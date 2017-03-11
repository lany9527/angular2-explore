/**
 * Created by littlestone on 2017/1/9.
 */
let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = function() {
    let data = {
        news: [],
        total: []
    };

    let images = Random.image('300x300', Random.color(), Random.word(2, 6));
    let total = 265;
    for (let i = 0; i < total; i++) {

        let content = Random.cparagraph(0, 10);

        data.news.push({
            id: i,
            title: Random.cword(8, 20),
            desc: content.substr(0, 40),
            tag: Random.cword(2, 6),
            views: Random.integer(100, 5000),
            image: images,
            total: total
        });
        data.total.push(total);
    }

    return data
};