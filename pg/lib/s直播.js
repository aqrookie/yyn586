var rule = {
    title: 's直播',
    host: 'http://api.hclyz.com:81',
    homeUrl: '/mf/jsonmihu.txt',
    url: '/mf/fyclass',
    class_name: '卡哇伊&咪狐&花蝴蝶&蜜桃&番茄社区&LOVE&小妲己&77直播&依依&日出&彩虹&久久&亚米&牵手&情趣',
    class_url: 'jsonkawayi.txt&jsonmihu.txt&jsonhuahudie.txt&jsonmitao.txt&jsonfanjiashequ.txt&jsonLOVE.txt&jsonxiaodaji.txt&json77zhibo.txt&jsonyiyi.txt&jsonrichu.txt&jsoncaihong.txt&jsonjiujiu.txt&jsonyami.txt&jsonqianshou.txt&jsonqingqu.txt',
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    //一级: '列表;标题;图片;描述;链接;详情',
    limit: 200,
    play_parse: true, // 服务器解析播放
    lazy: `js:
    if(/\\.(flv|rtmp)/.test(input)){
                input = {parse:0,url:input}
            }else{
                input= {parse:0,url:input}
                }
            `,
    一级: 'json:zhubo;title;img;title;address',
    二级: '*',
    搜索: '*',
}