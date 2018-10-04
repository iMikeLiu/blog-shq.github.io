/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","8fdb9b0b90fbef5a4e7b08302ff8fbc7"],["/about/index.html","7f9fd223dbedd53cde41546ae2292f33"],["/archives/2017/12/index.html","5ae9c19265dbbd33d01398e244041366"],["/archives/2017/index.html","93141574eb02415022be98d8d9ed2cad"],["/archives/2018/01/index.html","d2af5cfd02b315b76062a2c68f3fbcf8"],["/archives/2018/02/index.html","03d0cf253b1b12712c64daf0bdd75a64"],["/archives/2018/02/page/2/index.html","19fe890e3f359a62bafb7eb638b52132"],["/archives/2018/03/index.html","122487524f3ef64fef42e6cafb2466c3"],["/archives/2018/03/page/2/index.html","ddea91cb0bfb5e38c15ba4c1cec09380"],["/archives/2018/04/index.html","c4860bae139460e3d41df2faf1ecfd00"],["/archives/2018/04/page/2/index.html","912b57019d4c7f6b867efdcd98155f6c"],["/archives/2018/05/index.html","bd32a0ffaa7914d191cb35b3575559e7"],["/archives/2018/06/index.html","f9b99585786d43fd179c4b2919b85c5a"],["/archives/2018/06/page/2/index.html","e12b2da01a1129ef7c1d58ccd2fbc98a"],["/archives/2018/07/index.html","188000330f763629ab7800850f212430"],["/archives/2018/07/page/2/index.html","0f6714a87bd09edbd07d113f329e8a6a"],["/archives/2018/08/index.html","eaa52da2f3071546edc99503baa95f1d"],["/archives/2018/09/index.html","43954c486341e46d79ea5a392b926a84"],["/archives/2018/10/index.html","b1410354084683d310ab99efe4e33d5e"],["/archives/2018/index.html","5d28a9ad1ae6a0831fd134422317856a"],["/archives/2018/page/2/index.html","fa0d03771bd727390712a25907c76cd1"],["/archives/2018/page/3/index.html","c9c0876f4e475e31f389472c990f3de7"],["/archives/2018/page/4/index.html","9ae5b74cd140723a3e4bb1851dc50588"],["/archives/2018/page/5/index.html","87dbd3c8bffbf312d8d38130e959afe5"],["/archives/2018/page/6/index.html","5d1c5bb8a12059ea3b2b711cac6f41ef"],["/archives/2018/page/7/index.html","025e343d3899ca2aee5b7c8a6a32e62f"],["/archives/2018/page/8/index.html","0b29c846c3dbadb6a5c1924134c1f9eb"],["/archives/2018/page/9/index.html","5e966968f3abb4c7fbf3b4ff2e1a28e5"],["/archives/index.html","c50dcceed0617b343ad998cdd72aa365"],["/archives/page/10/index.html","8fcae6198dd0223275b1ed3966a29446"],["/archives/page/2/index.html","07686d4e2e874ca1e764cfbfe11f607d"],["/archives/page/3/index.html","7962db57d9ffd2f81ec88a3b9ba7984b"],["/archives/page/4/index.html","214fd7cec0ea3de89380dd0da60fb2c7"],["/archives/page/5/index.html","77cd444a0b1d832c38793b4ce5acac35"],["/archives/page/6/index.html","5d960347d06a5dedf60dcbe1dd6d46b5"],["/archives/page/7/index.html","909e8a4628bfe0e2214b9132cc467478"],["/archives/page/8/index.html","f1f4a9c736b8f8c511f5bbe6cf7fad38"],["/archives/page/9/index.html","d8d0e90d2a2bcc84b6c210ef943ab07a"],["/articles/18-4-27-things/index.html","9e6cb38d21cc5f25ff891f05bef9b06f"],["/articles/18-4-29-test/index.html","ed5d0e3e1cd523df6876d1a0895046c4"],["/articles/2018-五校联考-Round1/index.html","2adf99a6bd0219b2405f3161046e68f0"],["/articles/BigInt/index.html","5646ccc239ec8fd2c32bb8d4c4f9ee66"],["/articles/CQOI2018-九连环/index.html","f82e91d790d8564d631427ec3d75dfd9"],["/articles/Chtholly-Tree-ODT/index.html","528ca550ee41fb804f81f314f7702dea"],["/articles/Code-Style-for-OI/index.html","7ce5502595a607f29b321f4e4d47b5b5"],["/articles/CodeForces1051/index.html","94149bdc9bb9f4f6cdbc454798a97f55"],["/articles/Computational-geometry1/index.html","4564ddba617dd71a8c154dc61649c8a1"],["/articles/Computational-geometry2/index.html","f5cb44ac71030eabc8f74a9c6dd6e6e4"],["/articles/Computed-geometry/index.html","70d83d047eceb7b4d35727bea6f5b081"],["/articles/Dirichle-product/index.html","2ccad4bca15e8f8fa2c1a06d854da754"],["/articles/FFT-study/index.html","b8247f722249825c9e3e22ba75d72d4d"],["/articles/HeatWave/index.html","ecf3be545d1061dc808dcf2b9f4bdab8"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","2decd7f1b831a8962351d3953c6cd89d"],["/articles/JSOI2009-游戏/index.html","c1c1a4dd8ea2ca819a27d97e0c79dd8a"],["/articles/KMP-AC-automaton/index.html","d3fb5f9b3fc2cc134124c910eafe087c"],["/articles/KMP-AC-automaton2/index.html","cb1987d7615fd0101c560c858a535c63"],["/articles/KMP-AC-automaton3/index.html","b4e72f9b238fd1d02c278099bf1fe4ec"],["/articles/Kernel-privilege-escalation/index.html","3afb199855b88e5d79ee8e59df4bb5e9"],["/articles/Linear-sieve/index.html","7ac5785a5541e8e27725008f6bcc22d9"],["/articles/Lucas/index.html","120827b88cb3b712541665c30998def3"],["/articles/Luogu-P4276/index.html","fbebacaf35d125e00a5b6af863c51222"],["/articles/Manacher/index.html","2153f9490d53b9c1e4ecc7993ab467a0"],["/articles/Minimum-spanning-tree/index.html","d84cb0e6e04030611ce67d0ba5d28782"],["/articles/Mobius1/index.html","7b1d219f8032cf66b6292b6d35f044b1"],["/articles/NOI2010-Plant/index.html","8f4ac4eaaefcbe7f64aa2e5287c0989a"],["/articles/Network-flow-Algorithms/index.html","d3fbe803ba17903a369b7e4c4e0790f0"],["/articles/Network-flow-start/index.html","3d7153bfa12fd955a956a646a67bb75c"],["/articles/OI常数优化-进阶/index.html","828f6c333ae81f5e306a46febe008bcb"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","152bb17674de5023c7d04a50a39f6424"],["/articles/P1984-SDOI2008-Water/index.html","056a51490606fd22ed02182326c28450"],["/articles/P2018/index.html","d6dc807f610bb99aebb51b7e74498747"],["/articles/P3933Chtholly/index.html","f1acd2e8629cfe612064fbf498e2cdb2"],["/articles/Partitioned-Algorithm/index.html","b8691178a851b259c690b890947e562a"],["/articles/RP-introduction/index.html","10d0883d1fe915da0e682bb165be80de"],["/articles/Sandaram/index.html","854e40ebfb142a8fb6c28768943d2063"],["/articles/SegmentTree/index.html","78bc2b08f5d6abe7ec1259aeb3558b27"],["/articles/Segt-in-Treap/index.html","36332156c89ccba1747c8b3f2c675272"],["/articles/ShqProblem1/index.html","c0a1196878fb53d18abcd8b95977b546"],["/articles/TreeArray/index.html","fdb30fd719f01eec583a8434c048efee"],["/articles/TreeArray2/index.html","3715800f53cda94aa6daf373890239d4"],["/articles/Twelvefold-way/index.html","ff7e78d6960b3b2ad5f571793d0f2376"],["/articles/Union-find-sets/index.html","f2091b7d776da328b4482b4ea0fb7360"],["/articles/ZJOI2006-书架/index.html","19b08e293f4c7bb256509155045926b1"],["/articles/ZJOI2007-矩阵游戏/index.html","96ab3272870454b3db6e75b1a91a11b1"],["/articles/a-bproblem/index.html","5bbbce1b2147915c4a730976b5e7f27a"],["/articles/aboutBlog/index.html","fe05cbbac221baa89e1ea3af6e5bdbad"],["/articles/aboutgit/index.html","33e376e0257cf09e59441c0d9c708b43"],["/articles/autoAC-lemon/index.html","a6dd1ac424919ad47b8032427b41514c"],["/articles/bzoj-3337/index.html","4ebc31313bfd2f47c6448d68b454da7d"],["/articles/cppteach/index.html","197319ea845aa17e6e7820dfb8da3029"],["/articles/css-QWQ/index.html","9b5e0cb46d8509147e448e43e50edc72"],["/articles/dijkstra-spfa/index.html","97913d92aadd7e31c3a3e370f1a2a9fe"],["/articles/dijkstra/index.html","d1a15445bb020ea8df3c419b904232dd"],["/articles/dinic/index.html","0192c2d3873007b1de27cb869d03abf0"],["/articles/duliu/index.html","7f94adc40b1ce5802e5cf2d6cc7da544"],["/articles/dynamic-planning/index.html","80a5b26aaf09987fd0204fd2296de368"],["/articles/elementaryos/index.html","d7d4d29ff82e2f0d9fbc3f2894938432"],["/articles/er-fen-tu/index.html","13c623cdf8e5cb70af8fa06189f3ac5f"],["/articles/fhq-treap/index.html","0c647f74b828c3840b2991fd82e18c1a"],["/articles/group-theory/index.html","a22c4bfc15f9a7f5fe51aedba8533888"],["/articles/hack-spfa/index.html","8452a0857bbf2fa94d98c329776baab9"],["/articles/lgy-from/index.html","ad3f7de513f1f04c05a6ff6732de2784"],["/articles/linear-basis/index.html","b428994a7f4969297bb0ecabf59a308f"],["/articles/lyoi-Poetry/index.html","910552f32e90ad35676598c00a038600"],["/articles/lyyz-test-2018-5-19/index.html","da2b6488a4402eebbc74e313292b24b1"],["/articles/markdown/index.html","6c7388d6520f4faa6024b7c9e0af4833"],["/articles/moban/index.html","32782420142c6ec6b7ca417bc3605969"],["/articles/poem1/index.html","22544fa74f895466cbba81249b2d8280"],["/articles/prims/index.html","c88d22d283a049eba81427e737dc260d"],["/articles/python1/index.html","2c7f8555d917903d4f7fd45e28ac39b4"],["/articles/question-01/index.html","5dd8734aef38d0651132be8bacc90485"],["/articles/recursion-to-no-recursion/index.html","61f1963533de299aca74f27d6f452fce"],["/articles/scc1/index.html","c629d51c35ec032b925bb9a535b20129"],["/articles/somethinks1/index.html","9f9fe4cd10c9c41f8853cfe30c0b9f52"],["/articles/terminal/index.html","1eccfef9e79ca8481b1fe0339bf26900"],["/articles/terminal2/index.html","17ccace277b4f7ad5d2119b08850c804"],["/articles/test-mode/index.html","c7d3dde8660eccd605459c846adc27e9"],["/articles/test-polyline/index.html","38e88c923b1a25f2b0fb57e551c62227"],["/articles/treap/index.html","57837a6d38d143c9b3ef311440c6a863"],["/articles/tubaomb/index.html","7785c2c711aa0f7fe30905cfa0c8458f"],["/articles/use-hexo/index.html","ff5a04e31821b5f6ffa1ad85038820f3"],["/articles/use-hexo2/index.html","be0a1861679c5653c4691f15aa78390e"],["/articles/zkw-tree-algorithm/index.html","200e367ea7bd0fea46d8994735ff21b0"],["/articles/zzWA/index.html","0e1335cfac6393524e487f8d8b5bd70e"],["/articles/「LYOI2016-Summer」一次函数/index.html","dc22abd49510bfd8e767c92182706ff7"],["/articles/主席树详解/index.html","9bf479f32a347f1cc333012f9f35c160"],["/articles/分块-P1471/index.html","dc717a4c99ee1f26c089261c1bc15055"],["/articles/可持久化并查集-rope/index.html","8ccb6cac23c2518eae0c18d7125b4a76"],["/articles/复数表示/index.html","e953f479a23d40d437fd2ec1cc78f551"],["/articles/洲阁筛/index.html","3fd526c65743d3f0cbbdb73b288b26bf"],["/articles/生成函数/index.html","b6e1139141cf17f065b556bfaf6a7724"],["/articles/网络流-二分图最大匹配/index.html","6226625c776dade70acdb4334d30ebc6"],["/articles/自然数的和/index.html","a74be5d1efafcd7cb77498c2e9ee037a"],["/categories/Linux/index.html","9c71af2def461ad84627e880f83ea378"],["/categories/OI/index.html","69c49377b6b9b68bfb9436808ba366fd"],["/categories/OI/page/2/index.html","cebf8ceb502fa319b2b127516b186644"],["/categories/OI/page/3/index.html","4795336b8cd1cb27bbee8985a643bfe6"],["/categories/OI/page/4/index.html","e52d1d5b5fbc9d75fb9a443af9754e0a"],["/categories/OI/page/5/index.html","172783f3c1823cd245aa76c4ee7fbf48"],["/categories/OI/page/6/index.html","ba8f8681494f8a7ff99aad2ee32c37f3"],["/categories/OI/page/7/index.html","7e8888e1ba3f9950df98073d6ed6a476"],["/categories/OI/page/8/index.html","9ebda914f2248b33b667bd1442129d97"],["/categories/OI/page/9/index.html","d1c2a43bf36649f1e3fce14436cf5b78"],["/categories/hexo/index.html","6111ae681d4eb5caf5df9f36d9b92a23"],["/categories/index.html","8b2ad2a3898c7da526d39f0bc04aea8f"],["/categories/随笔/index.html","02d773139ccbc3252c1b1b6554b296a3"],["/comments/index.html","fbb0ef268d926665d28bed5b12cd4526"],["/css/main.css","d10ad5b890af489446097e976dcd95f3"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","25a6a3c87496f843437369d1b5ee4e96"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","644e46f8f4434f713fafb04376074b12"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","6fb4a0d893abc2879a39a19e3d6085a7"],["/page/2/index.html","a9c74132171e9c0e600eb25547455377"],["/page/3/index.html","324faffdaaf0567426cca3ad479a74e9"],["/page/4/index.html","3e399532ed202c3bd7ba9ff31c64fefd"],["/page/5/index.html","de8405582dc835f82b77793419d03691"],["/page/6/index.html","7e0a97f163fd5868ed8a61abfdef3275"],["/page/7/index.html","5bc7a15bb167b36b493cfbbf40f35b61"],["/page/8/index.html","c35259c6b2f6f97060e6f61333a39520"],["/page/9/index.html","2572d51f09583796d5bc454f7aaf0131"],["/photos/index.html","1ac5bbea9886513b9691d3e4fb11cb07"],["/remittance/index.html","e944469d32d08a6dbebf80b280d58d45"],["/sw-register.js","ec9f25a6861612ba7c134db5d267db76"],["/tags/2018/index.html","b3b34d091f131eaaf48b3ce8e31f7a0f"],["/tags/AC自动机/index.html","83653d1fd8b7a718aa3396f9c1524812"],["/tags/Algorithm/index.html","425a2366de5e9d8e8d8e361d3ff02017"],["/tags/Algorithm/page/2/index.html","456fb2b45311fa5bb16e5c17da394d67"],["/tags/Algorithm/page/3/index.html","5cb19766c9728e8f168517b9d13a4459"],["/tags/Blog/index.html","c8a1c297b18f8fe90bb9be26feb0aea6"],["/tags/C-11/index.html","71dc8003109c030ad1c503f9495ca7e4"],["/tags/CQOI/index.html","aa7f1a8c57609551c3d737362ffae8f4"],["/tags/Chtholly/index.html","fb906cf9bc0f6418d73c7ad8c3d05831"],["/tags/Codeforces/index.html","50ddcd39e3425e78be5fde0f5c7f82d7"],["/tags/DFT/index.html","1a97c791dec331b15e55a54607564363"],["/tags/DP/index.html","74ea2f10b4545f359c863e41cfd9af04"],["/tags/Dinic/index.html","1c40afe96d615dcd7d78d46a0ba0db27"],["/tags/EK/index.html","0c753a2a08956772c9adf5e67d88e2a6"],["/tags/EK算法/index.html","e8bd13e28d3fb25945cbfb5e7965d546"],["/tags/FFT/index.html","144df17f9e36bf3c397288928207bc12"],["/tags/FF方法/index.html","b0aa14fd2dd7e8637bea24621cd0c59c"],["/tags/Ford/index.html","15cd47497a905653eaf2a99dadc2f76d"],["/tags/HLPP/index.html","2fac472c133fd2242d47c8236f37e2dc"],["/tags/Hack/index.html","be85b598aaa1b70b90c106321a980752"],["/tags/IDFT/index.html","2212db1eac96b2378ea7fe83738ddd5e"],["/tags/ISAP/index.html","b66c6e45e1742fe62f0bfe64d298da4d"],["/tags/JSOI/index.html","ebc32fe69c570a2e2075e8f526083e37"],["/tags/KMP/index.html","f19c328480c509642797b1d99bdf27f4"],["/tags/KMP自动机/index.html","9cafa447fd4659d07f21e8c3debaf765"],["/tags/LYOI/index.html","efeeab280de7451ce6c013ca02a21ea2"],["/tags/Lemon/index.html","a389042b4f32facfcfe0e7715900da75"],["/tags/Lgy/index.html","c4c7fc16127801ae7ae6ea2d1181446c"],["/tags/Linux/index.html","8bc9522e540507e39bbd96fd099558fc"],["/tags/Lucas/index.html","fcb6b9c72610911cb6a9443b19f3535f"],["/tags/Luogu/index.html","21a70de31b8c5249ee93e95eef685964"],["/tags/Manacher/index.html","08231336f5be0f66d597f4369e879582"],["/tags/NOI/index.html","8c4a9cdfcebe30f7e37d87e473d30906"],["/tags/NOIP/index.html","b10d333c090f0eda69915512245ab50d"],["/tags/NOI导刊/index.html","18ab23d2c82d7934438f86a2e9bf54fc"],["/tags/NTT/index.html","3cf1b483dfb9742c293749524aeaaf0e"],["/tags/OI/index.html","475f369c949235b74d81d2c82cd959a4"],["/tags/Problem/index.html","5266cc7010daeaeaddfe3f41da9a09cd"],["/tags/Problems/index.html","cab4574e7bb39f2d363612acb7420c3a"],["/tags/RP/index.html","2640cf0451d8a32a04b7aab89e38e6d3"],["/tags/SAP/index.html","d460bfa13faf9845f9998a2bd9021fe8"],["/tags/SPFA/index.html","3c1ec77c297f82cc178c82ed66d3776b"],["/tags/STL/index.html","12d508b890802c8bf0ef8893531579dc"],["/tags/Splay/index.html","1dd9fa5a704afaafcc78bce69f76114f"],["/tags/Tarjian/index.html","af2e87b4c8787f3290c55e8b8ec749ed"],["/tags/Treap/index.html","ef53c5bf2ee377678843c02790ee10cb"],["/tags/Trie/index.html","e86bb1a20a9d3dd54bb01a88181cfed9"],["/tags/USACO/index.html","2c2725df4550e175d1f41a320cac53a4"],["/tags/ZJOI/index.html","8baf5d9dc0a02920edd33e934883d6c3"],["/tags/blog/index.html","95ffaaa163ef3790dfafde64353d99da"],["/tags/bzoj/index.html","5bd39ac07ed4528debffff218db0fd97"],["/tags/css/index.html","ea18ba61847da01423875dc7996d3143"],["/tags/dijkstra/index.html","89a582f393310e8d2e54b0f4864a437c"],["/tags/dinic/index.html","56afc8f005caf9b3576bc189c5483ab2"],["/tags/fhq-treap/index.html","11082a4d6db735ab7e0bd65767ddd885"],["/tags/gcd/index.html","ba1b6e307dae88c323259089a32cbf60"],["/tags/git/index.html","088aac8ef674b9bccdd38ab95eb44945"],["/tags/hash/index.html","0b899d0b6753010fdfd214ce141c56df"],["/tags/hexo/index.html","89bbf6e874b606f96bcac333b0ada2b4"],["/tags/html/index.html","90f8d0d905c55ab91b624019870bb166"],["/tags/index.html","e24f30c1a020bc9468eb92ca918acd1e"],["/tags/lambda/index.html","174900b38a8475c5c27500bc49bd8761"],["/tags/luogu/index.html","d785138631e531596b8f3724ccb048f7"],["/tags/lyoi/index.html","2f71d350f7e5604e50169e836e6f8aaa"],["/tags/markdown/index.html","9bae47978087e7a3a0041fe0f863cdb8"],["/tags/problem/index.html","751fb56963ca3c787075067dd60fec77"],["/tags/python/index.html","e343d253c2f1f8efcad323bbb2dd11f6"],["/tags/qbxt/index.html","a2388d919cadbb274532fc31f68d74d4"],["/tags/rope/index.html","2b9b0b7bb2fdfd8170cc5c6ec697a0b2"],["/tags/spfa/index.html","6729185431fe552fb0f65d1f50093664"],["/tags/system/index.html","8aa97994b5a65b955accbf5e1dda571d"],["/tags/terminal/index.html","e78abce500cf0f13472542203aa14d63"],["/tags/zjoi/index.html","790a0d374b6520824c9bc1ba2e1447b2"],["/tags/zkw线段树/index.html","f6011173a1e898e6f595651635c5a63a"],["/tags/临沂一中/index.html","91273ae4b54872c9b01c77216977302a"],["/tags/主席树/index.html","9fa5dedce4a7258c1dc3ce2a40ec2e24"],["/tags/乱搞/index.html","2bc2b75b3b9dee968c1fefb0a4020cb2"],["/tags/二分/index.html","e88c7630d8070bdf23ed79b13cd7cc17"],["/tags/二分图/index.html","32bf52bd8214a2036be26c9edc643c33"],["/tags/二分图匹配/index.html","572c5456295f9dc425b8b748819b60d2"],["/tags/二分图最大匹配/index.html","78b704b62193d97a155c479eaaa53b97"],["/tags/二叉搜索树/index.html","5f7b15f0deff521f3460ccc35a04a55c"],["/tags/二叉树/index.html","2b79f8f554815b74182db0000a8ca6d4"],["/tags/五校联考/index.html","dbedfd8148051dd0e84f9a0505ad05d1"],["/tags/代码规范/index.html","8ba4dbc3aac3742e4ada76b5685eef29"],["/tags/优化/index.html","60c772c9c898eef7ad416622cd041a2c"],["/tags/内核/index.html","eb54ea48489b764adbdac88341e6605d"],["/tags/内核提权/index.html","504ab8f6beee2cdb103fe7909e808359"],["/tags/几何/index.html","2801fde999b4507d711b1d2e87fa4cb7"],["/tags/凸包/index.html","0f1243cd81a740da5b3f9d582ec1009c"],["/tags/函数/index.html","f2ed9b2a4f1c3de84af47df9ad39ea72"],["/tags/分块/index.html","a5271fd351af188b475025fc6cd9d0e3"],["/tags/初等数论/index.html","bfe3031485aab2fad2874e9ce3411841"],["/tags/前缀和/index.html","e8971dc2b3e431435524797a342a78fd"],["/tags/动态规划/index.html","f5046b689ed1b35581c7d5ec7ad05462"],["/tags/匈牙利算法/index.html","b357a0391188a3c7cd8556b0b3a2012f"],["/tags/区间/index.html","d8e9f3f30ed919299722d7dae6846ac7"],["/tags/区间操作/index.html","3b7e7bd543657af3e57b4d9618a25b70"],["/tags/区间第k小/index.html","c7a09cf7280d43df5a09d152de04fef2"],["/tags/半平面交/index.html","0048b8ff5463e7f7b5e7557146ef136e"],["/tags/单源最短路径/index.html","a7922cafd3501e6adf6a8cdf6ae67fda"],["/tags/博弈论/index.html","2384080f196e570b8bd26d0e9f0b2aa7"],["/tags/卡常/index.html","8727a3de38f4934c4940b7017e4d6aec"],["/tags/卢卡斯定理/index.html","370a991b7f33f00b7584a53e1b19b6b6"],["/tags/卷积/index.html","b9b2550370988f43aa1cad63a4ac4c0f"],["/tags/叉积/index.html","dde7fc37108af85533e7224ba383deff"],["/tags/可持久化/index.html","6ff0c14b215ee21bc4fa78f4b54b6044"],["/tags/向量/index.html","66b78f7f768831b0d5eef650c633d934"],["/tags/图/index.html","8cc9dd12cc3af87302fc5e62595ff3d6"],["/tags/图论/index.html","6e85fe45ab0218ebcbb3fc32473cc408"],["/tags/块状链表/index.html","81b09309723530fafe4a28302dcb5349"],["/tags/增广路/index.html","60e481f5a718d1069a8677dfff600cae"],["/tags/复平面/index.html","40840dd36554d522780794e753dcc20a"],["/tags/复数/index.html","957c18433df2994fad66c69c04164006"],["/tags/字符串/index.html","6231435ee7b30e28e72d37b8d91ccd9c"],["/tags/学习笔记/index.html","98a05e08c4df307448dfacf88bbc85a4"],["/tags/容斥/index.html","e05c1c76cd80b1c38f494fc5473874b9"],["/tags/小学数学/index.html","e7d1d797c17910db59fbde0591bcc517"],["/tags/常数优化/index.html","138512a4a169272fda0f0732c6314282"],["/tags/平衡树/index.html","49b24072cc50d0acc1065568a684e315"],["/tags/平面几何/index.html","950a67eaeabcc21dbed2cb0ccc74a559"],["/tags/并查集/index.html","d6c7a12b13a61a0e5a7c9d01d1d834db"],["/tags/强联通/index.html","8f439d9ebb231bf3e452131fdd20f71f"],["/tags/快速傅里叶变换/index.html","abd34777b1f0293fab3cee0a49ee4088"],["/tags/总结/index.html","f3b9b9cf1a6314cf8c17743d358852db"],["/tags/感悟/index.html","25957e2deedb55f0e1089fa2a92d43e8"],["/tags/技巧/index.html","45a0a7fef0206cb1bc53c35172462780"],["/tags/抽象代数/index.html","b7e90631ce1b270802d9594bbe9f4341"],["/tags/教程/index.html","124797bd840670b0e49ef1c9d7044a63"],["/tags/数堆/index.html","133065f7c37674ec1285fd9cc2d34c9d"],["/tags/数学/index.html","737af03fea90f6fe14902e38288b7259"],["/tags/数学/page/2/index.html","a2281ca74f1deb9b1b3641328f7b1fba"],["/tags/数据结构/index.html","94aaee2c3d83dee8464ca39818dd6007"],["/tags/数据结构/page/2/index.html","c7295d9a52d957f9fdc6ae3365afea8a"],["/tags/数论/index.html","d104e2c7220c19231bc65593c4acfcf4"],["/tags/数论/page/2/index.html","c4467093ee30d1f3dc4e9bf5fbf2e4ab"],["/tags/文学/index.html","f57f6611d22aa7ab9fb641fe181fa7ef"],["/tags/方差/index.html","5e4877bae45402bf7c65f722fe4c136b"],["/tags/智熄/index.html","d0a7ff0d26bac8b2b96c78d8ec276366"],["/tags/暴力/index.html","2c98f0b17f2732eaec4f4cf231e11f26"],["/tags/替罪羊树/index.html","df08654908ec357a51ed33a54e5a622d"],["/tags/最优化/index.html","78d197b66d7d4b3233610a1f4113df0f"],["/tags/最大流/index.html","791ebb1709b476ff88e9e76e86daf6b6"],["/tags/最小割/index.html","4f30cee66958aef076714e95a533d9bb"],["/tags/最小割最大流定理/index.html","59b67fa87ff5d3a70fd5288b29a7d230"],["/tags/最小生成树/index.html","65588aa6c526fedd4a057f6e3fb37b2d"],["/tags/最短路/index.html","79d8379032c38e12365b9aac79d44695"],["/tags/最长回文子串/index.html","0132e358f0c1b0b20c41ba6dd8400b59"],["/tags/极角/index.html","46c049e62fdc9f19566c1c68076ad5f9"],["/tags/染色/index.html","af1dd86646de32e0473f8fda48895b86"],["/tags/栈/index.html","277742c20fc9e9d2d588f1e5d4d658cb"],["/tags/树/index.html","af5f07d25acc2cb1c1863577ee98d30d"],["/tags/树剖/index.html","da038e2780471a7157187e0348c3df5f"],["/tags/树套树/index.html","1ac5ff3008c10f9272a91a3a6ea740f6"],["/tags/树状数组/index.html","dc50f26e57ce69c220e1037a34e3f6ba"],["/tags/树链剖分/index.html","ecb99d674166cfef39b4015f3921769e"],["/tags/模拟/index.html","06af3f77e6f4dbf6095fb1662ce7ea48"],["/tags/模拟赛/index.html","2b080c2975ef0dcbc9b4a42209c434d9"],["/tags/模拟题/index.html","079e05bcfbb2dcf0980157352c82aa17"],["/tags/模板/index.html","87b0acb1a71d410f5cb8e8b6bf7e9a0c"],["/tags/模版/index.html","3aae2ea6a959be87cc59bf329f9295c8"],["/tags/模版题/index.html","a866673808715b27b4ce735cda42c5ed"],["/tags/欧拉函数/index.html","d0781032c229372e8f12930eeeeb9e6b"],["/tags/欧拉筛/index.html","d6c77a6061e9025ce14721e646696288"],["/tags/毒瘤/index.html","8d685481408251e072c6620b098e69be"],["/tags/测试题/index.html","2c0f15617f624260c18abf31cab542cf"],["/tags/济南/index.html","1bb0f1b364fb9c3820f1f1d19cb72c94"],["/tags/清北/index.html","eb13a07e20a138bb424c5bd6bd5be045"],["/tags/爆零/index.html","035a14519be3abf19c2587953e353a0a"],["/tags/玄学/index.html","051a3dccb284d0aa7f726ebcb0dc20a2"],["/tags/珂朵莉/index.html","066bd592b5876db9b6b1b0c5b8a25982"],["/tags/生成函数/index.html","92436155f6ba99e5e71c298f16e95732"],["/tags/瞎搞/index.html","d8e1a1e406e9a7d113c445f6c1dcf8ad"],["/tags/矩阵/index.html","62f2eb7cc5c400134c1587b5321a2dd4"],["/tags/矩阵翻转/index.html","6715e43158f4bf42680b1724286c180d"],["/tags/算法/index.html","b848c9fd874a011b262e75e5a2ab7846"],["/tags/算法竞赛/index.html","ba8f20e1a719f65c97e80cbcb31ae687"],["/tags/素数/index.html","15951f8a3a58a76f4b540b26e6d493fa"],["/tags/线性基/index.html","d13445d982470196e95426788426d934"],["/tags/线性筛/index.html","e1b25432388b9d4f0695f938ba1e29f5"],["/tags/线段树/index.html","f9db33a1b7f69163a95f4cab7caf8ffe"],["/tags/组合数/index.html","96ea0e331a2e18b4af3c2e79e46292cd"],["/tags/网络流/index.html","e8e3ac978e4c922196c002476549b345"],["/tags/群论/index.html","9c2774734e200033f1054dd8841b278e"],["/tags/脚本/index.html","fbf0ff0d05067875d49a3a9163b1f5dd"],["/tags/自动机/index.html","db926750e094612d4b5158aa4be394b4"],["/tags/莫比乌斯/index.html","e549aa00e448e44fe89182112beaec05"],["/tags/莫比乌斯反演/index.html","7a5e47341871ebec51a58782947b34ed"],["/tags/虚数/index.html","5095167034a8db0be5defdd4ea5c1283"],["/tags/计算几何/index.html","ecafcf30790f9d0d536f9406b7766386"],["/tags/证明/index.html","6e5af146ef02396b76c537200173a4e4"],["/tags/评测机/index.html","52c35dc434bb389d5b117771d3ca57dd"],["/tags/诗/index.html","117eee2135b5006de08e6b56377767f4"],["/tags/诗歌/index.html","b2210e7cb3b59f47afc5bcc6054f048f"],["/tags/详解/index.html","e01baf830e22ef831b5850d3515f24e9"],["/tags/费用流/index.html","c927e029b3b96cce737bde89e66c7749"],["/tags/路径压缩/index.html","6aa6dbecba2aaf55c7f03a90e6c82fd2"],["/tags/逆元/index.html","5e7d966c23712cdcfd89f5dbb190acb1"],["/tags/递归/index.html","312c336723f87e9d3ea56a2c45ee422b"],["/tags/递推/index.html","d6e5c396a50a0c5d3298f4ded7ad99cf"],["/tags/邻接表/index.html","ae3a318109e2519b1ea2e8cdd78f89e9"],["/tags/随笔/index.html","a860f64d6bcbd741ac2ba685a597dd41"],["/tags/集合/index.html","0d93b79f6ff321043b488cf6222edba1"],["/tags/集训/index.html","df21bd4bed567bc0c632b75f68535dd9"],["/tags/非旋Treap/index.html","401f625592438eba8c78050f33b29c6f"],["/tags/非递归/index.html","31d4b89dc49b665977753d095574300e"],["/tags/预留推进/index.html","9f1bde1c35935ea9c3694d30bf08e204"],["/tags/颓废/index.html","b9f130e31691ee9c2df7209e40b57b92"],["/tags/题目/index.html","8f58768955afd41b1f306c1a67e51663"],["/tags/题解/index.html","00d2962f710f3736ce30c853dd2dec09"],["/tags/题解/page/2/index.html","c3babc45284a9d646158135714c670b9"],["/tags/高性能/index.html","4cf907edfb611820751d6c62d731185c"],["/tags/高精/index.html","9b76ccf46ac3bcbb4a295e598e588072"],["/tags/高精度/index.html","08686811577807d1e259a76c73bee466"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
