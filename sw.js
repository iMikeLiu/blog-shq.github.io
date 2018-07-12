/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","fbc35f637613cbf15fb3492fc0910d28"],["/about/index.html","25e31a41b45f6a21935e03af27f5ae38"],["/archives/2017/12/index.html","3db22dde22445a15a64f9036acd98e3a"],["/archives/2017/index.html","3b52cb37c000eca39c3b7d88e4506171"],["/archives/2018/01/index.html","c833cec1e8fbeab52a9d36ae3f8d99c7"],["/archives/2018/02/index.html","e4e0300270d49681ab1865df8b529455"],["/archives/2018/02/page/2/index.html","f3aa1a4fb4870842b61974f0f4c5ef9a"],["/archives/2018/03/index.html","bed7673652d7ce915ea4ca4f03b9c30c"],["/archives/2018/03/page/2/index.html","3fbc13fa14a766681d7a03659c00ecf5"],["/archives/2018/04/index.html","feb21152c6bd5a65212e11a95ca69f89"],["/archives/2018/04/page/2/index.html","59d6201437ea1527ffe5b70e90d9f8db"],["/archives/2018/05/index.html","0593405b04ed30aec8e0c767637666b4"],["/archives/2018/06/index.html","c53f78c1bbf250d805a73820c7f57939"],["/archives/2018/06/page/2/index.html","79297a1fd004c0d63a6146ee0a0b0703"],["/archives/2018/07/index.html","5165e34455b7ba8385ad0ff89c21c957"],["/archives/2018/index.html","1e14cfad3fe1b5e396c6a046d7d5422a"],["/archives/2018/page/2/index.html","7c56204a58baed2240468dedda97fcaa"],["/archives/2018/page/3/index.html","f92838a87273093cc4a0934c1e63730e"],["/archives/2018/page/4/index.html","5dae8765de969281b9bedff8b4e21949"],["/archives/2018/page/5/index.html","61e86f7702b5946d0f179388bb9bf291"],["/archives/2018/page/6/index.html","71ed1e60f7693cdc1939623500d3a8b1"],["/archives/2018/page/7/index.html","ba95be36d7ec5f696b6dfcd18d29be37"],["/archives/2018/page/8/index.html","3cea957a20dca462f8fd7d15216fd886"],["/archives/index.html","5245ae6fe4d593bc07cd2f12d808218f"],["/archives/page/2/index.html","e16a73cc6289a8e4f6e013aa33c315fc"],["/archives/page/3/index.html","1839bb8ad37ae6b46a45df5886cf4fe6"],["/archives/page/4/index.html","e9f4cfb416622dbd3a832cc98b41e4c1"],["/archives/page/5/index.html","0fab77d596570a78abae87975dc23eed"],["/archives/page/6/index.html","267392d6f4f9e686fe858585efffe872"],["/archives/page/7/index.html","72e7810306d8a8379408a9f939b2d0d4"],["/archives/page/8/index.html","41944bfa504c701f0d64f95b65dc3915"],["/archives/page/9/index.html","f3af91fdc349f97104c9ba1c2cdbd44e"],["/articles/18-4-27-things/index.html","1919eeb6dec40d524c88cddef50f6d70"],["/articles/18-4-29-test/index.html","d1b06b185e0516ab1643705e42c25d8a"],["/articles/BigInt/index.html","ee0cd2b585e5abd1cc6727fe8454fab5"],["/articles/Chtholly-Tree-ODT/index.html","3b09116f761bc86ad6a2b93f7613d62f"],["/articles/Code-Style-for-OI/index.html","5eefa5af000e789d194fb8939a4ea030"],["/articles/Computational-geometry1/index.html","be780dfa48bccd25af9126795bb4b339"],["/articles/Computational-geometry2/index.html","a737313afa1c0ca58f8a4f73b67a1da9"],["/articles/Dirichle-product/index.html","f2de4ff840478c840c7d3ce59f73db7e"],["/articles/FFT-study/index.html","7a3f64922003b8e5f71c971646b18daa"],["/articles/HeatWave/index.html","91548b107fe7390818651adbd6df0960"],["/articles/JSOI2009-游戏/index.html","c03823b033f692b04019d5210c4b015e"],["/articles/KMP-AC-automaton/index.html","b7a8eb6d16ab534872c71c7141f94493"],["/articles/KMP-AC-automaton2/index.html","68fb9650f1afeaf711fdd4ca0ce3cd99"],["/articles/KMP-AC-automaton3/index.html","e8470dcb7d9738dae168bb93d1171bc7"],["/articles/Linear-sieve/index.html","1f720428eec4756d3d56981975b0ca94"],["/articles/Lucas/index.html","95cedc2ef5a2bf88831d8a3fcb40e495"],["/articles/Manacher/index.html","7e8af19143c0e068f5f1991ade425590"],["/articles/Minimum-spanning-tree/index.html","abd3b732cab9fe168217eb25be4ebde5"],["/articles/Mobius1/index.html","caaac8974136ad09ae3a1b39a2f59c72"],["/articles/NOI2010-Plant/index.html","99e73530c19448be5d96f7d2cfca5dd5"],["/articles/NOIP-2018-zero/index.html","1b3251c6690efbaf8a965c8cd484b26d"],["/articles/Network-flow-Algorithms/index.html","9beede009d62de59ee05f0f23670eb07"],["/articles/OI常数优化-进阶/index.html","90a044cec24a0acc41aa6f22636e70ea"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","56d6955da32355773784a3bc792d3602"],["/articles/P1984-SDOI2008-Water/index.html","58f754d6d2a6c18f037ae820b742a0a1"],["/articles/P2018/index.html","7876b904dbcb38898d0e07842b039fa4"],["/articles/P3933Chtholly/index.html","dac135432d2e9f2f48b86d3ce2f11ee1"],["/articles/Partitioned-Algorithm/index.html","40456de8379fd8ab2c352fc32f2cff8d"],["/articles/RP-introduction/index.html","592745b2b879883bcce5ec92823f5dcd"],["/articles/Sandaram/index.html","43f238a0478d8359e4256c34c27b307b"],["/articles/SegmentTree/index.html","4530dc315bc14aef10ddf2e1934335f9"],["/articles/Segt-in-Treap/index.html","c9a1f783ec41f2afbe63b3fbd9135d6b"],["/articles/ShqProblem1/index.html","55654f0f541722bc9cb9c58ddba44803"],["/articles/TreeArray/index.html","5b631ac78617bf17030c6fa42378f2fa"],["/articles/TreeArray2/index.html","d928a2e3838a8cabade91f99cd41c87c"],["/articles/Union-find-sets/index.html","4dcd82f180023c1d49d28469a3a250e2"],["/articles/ZJOI2007-矩阵游戏/index.html","f3f8c2fc6c6c261b2f70a6502d6011ce"],["/articles/a-bproblem/index.html","2dc1af43c3dbac27aef7ce04e9022bf6"],["/articles/aboutBlog/index.html","77ad8516bb9d5503a84a83827c20224b"],["/articles/aboutgit/index.html","dff099cd85ed8c59996d5cec815b9990"],["/articles/atom-plugins/index.html","e4ad02436b2c8f3d99d796c7e094caa7"],["/articles/autoAC-lemon/index.html","4639052e7e969de88e31b7ae5a746e39"],["/articles/bzoj-3337/index.html","e3fc5940c443873aed393ef9ef7f1e6a"],["/articles/cppteach/index.html","9ab0a601f09359934b7f9d1b7fb554eb"],["/articles/css-QWQ/index.html","b412325f495817a0645697be38215d4a"],["/articles/dijkstra-spfa/index.html","c12476513480cf4aa0f6910cb281f53b"],["/articles/dijkstra/index.html","19e6f076ee5b4e27192a6a480936d771"],["/articles/dinic/index.html","633b3a6d7a979a85d5dd62f3415be470"],["/articles/duliu/index.html","01639010621db956790675823d721764"],["/articles/dynamic-planning/index.html","6e7eded56bc7d605e27f43372b8d1cc0"],["/articles/elementaryos/index.html","2663b73a24167b1b2cac97e73767da17"],["/articles/er-fen-tu/index.html","5baf3f57b1e895ea4342fab09e2f64d7"],["/articles/fhq-treap/index.html","76bc31da43e6ec4599733edab881b1ce"],["/articles/group-theory/index.html","5519782b9085ac1f11984b3b00ddb9bc"],["/articles/lgy-from/index.html","41c1c98df2ac15ea6af318214bb508bf"],["/articles/linear-basis/index.html","56d52ee09c78a5ba2c7ec859da1d4a02"],["/articles/lyyz-test-2018-5-19/index.html","e4a76574097982852b5c88eb1483a29d"],["/articles/markdown/index.html","8a4dc74f5ab4d669252a3b27c62118ef"],["/articles/moban/index.html","d2c80aade717aed2f00a3677d2335ede"],["/articles/poem1/index.html","b8c55a5fec6e1998180993c0ee57bf35"],["/articles/prims/index.html","67b087e59092d693dd6b4416dae821d6"],["/articles/python1/index.html","ccbcc0abfc7982a135c43cbc82479098"],["/articles/question-01/index.html","b9ff24c0cde12afc8f7a7e7caf0fa89e"],["/articles/recursion-to-no-recursion/index.html","29c258ed4127177d3f05aeb14e9144f8"],["/articles/scc1/index.html","d15c54b9712168f7fce9cae088457b8a"],["/articles/somethinks1/index.html","d185a7c69271046ba2060b6f936bdd2f"],["/articles/terminal/index.html","e52a133baf3221093ec219f228bbd395"],["/articles/terminal2/index.html","ccea64dc747733f2f459e430ba218cdc"],["/articles/test-mode/index.html","11995d0bd98cf0b9f5bf68e98f09ff28"],["/articles/test-polyline/index.html","29483dc87ee58a151cb484191aee0d38"],["/articles/treap/index.html","460fe986076de0575462e8344dd12bed"],["/articles/tubaomb/index.html","4a3893ee7f27d4b027686ca03c825683"],["/articles/use-hexo/index.html","19d810808ff98a545a42e33da38347fa"],["/articles/use-hexo2/index.html","caa96ad755768f5cfc7e978876f26e85"],["/articles/zkw-tree-algorithm/index.html","1e5158c841d61d4daeef7dad011a57db"],["/articles/zzWA/index.html","2cef1684fb94023255ccd99496f5c5cb"],["/articles/「LYOI2016-Summer」一次函数/index.html","91fea86cbbfcc3d9ef496b9ecc66cdc2"],["/articles/主席树详解/index.html","6d0096a30aaa4b1599d2b70b3449d433"],["/articles/分块-P1471/index.html","d8eecdb6fe3955fbd8e0f6f32a835939"],["/articles/可持久化并查集-rope/index.html","47cde23a655271d9fd970f14d6973d9a"],["/articles/复数表示/index.html","8b0004b3d68440aa6a8ca674e67e5ddb"],["/articles/洲阁筛/index.html","db730a9c4c7781bb9fa20d7d7e841682"],["/articles/生成函数/index.html","5937cd711ec07a0f5f308ddc31c9450b"],["/articles/网络流-二分图最大匹配/index.html","53845c1bf85dd017dca096166c52b43a"],["/articles/自然数的和/index.html","27f70053e3fe0794f6799436084083bf"],["/categories/Blog/index.html","1892eea0e91687db067eeca705ce8ef7"],["/categories/OI/index.html","094918dfc5c42cac94d389f3855fbdd6"],["/categories/Settings/index.html","eff372f7435738bd50ff46abb8219db3"],["/categories/Shq出的大水题/index.html","56ca63f847d12f4bf05d1ba661216013"],["/categories/system/index.html","6da8608dc486e0b71cd0acb7bc706765"],["/categories/《RP导论》/index.html","1f46e8b6e84d0f8941272fbee0b32dc3"],["/categories/《Shq出的题目》/index.html","5d32dfae4f7cb5a7068ba8214c1915e7"],["/categories/《Shq笔记》/index.html","b11351f3e6bb6c164d4e9c23cf150057"],["/categories/《Terminal教程系列》/index.html","cc237950e3dfb726c38cdf8df64fcb0e"],["/categories/《hexo的玄学用法系列》/index.html","55ea498551312e83cbabcef376034d24"],["/categories/《人生苦短》/index.html","850f1e984be1a00ae5cb2759996af089"],["/categories/《教程》/index.html","e63c7954436a71dfdcf8997f8502d3b3"],["/categories/《最强的Lgy》/index.html","dfa15ae77b6bf083f71d3a31b5a8ac33"],["/categories/《烟雨茫茫》/index.html","ab1b17a45eb525b7399dc8341e33438a"],["/categories/《玄学》/index.html","23c0fdf4a7056daf45ddad82cd2a9144"],["/categories/《算法模板》/index.html","0bbe6dd9adf8961bcdda51c37407b687"],["/categories/《算法详解》/index.html","6630f938e9fcd5800ea7f6f5c4557fab"],["/categories/《算法详解》/page/2/index.html","4c2769e1fa311399fcff7b70e0446a59"],["/categories/《算法详解》/page/3/index.html","43451863eb8854fab3bc5a4a868c5784"],["/categories/《题解》/index.html","c98a7458c81814e5738ac9dbead7433f"],["/categories/「日常卡评测机」/index.html","242e7f448258b883f71121a994450f56"],["/categories/题解/index.html","10d922f146f59d36772543678c39635c"],["/comments/index.html","9b4028834d1bbd7bf61f0f3774826caa"],["/css/main.css","9a2aaedd11aabba0c834c24c6300d7d9"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","9f13d8143859d4458ae695952d73106d"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d2612d810e3fa64a474d6567b7bf4e00"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","19f6649ada13b0d4c58bf886fe40c2a3"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","50feffa55b0ad97da6042c36288a0527"],["/page/3/index.html","9b166288bcae39de8ba72b242edd515e"],["/page/4/index.html","b8c9768a2b1e5418f456bd745e058ae2"],["/page/5/index.html","0ce125e133cb75e95d0985c21eac4f89"],["/page/6/index.html","2d3f73ff4d0c70254963e56f07090725"],["/page/7/index.html","005967465c28fbec97a43522b2d8f2fb"],["/page/8/index.html","e89e4ae98b54e179cf68a21f2280f199"],["/page/9/index.html","5a8f1c6443d788ff6ee41befe9435e04"],["/photos/index.html","41b34e32df7fdb9c8bdc02348b53f83f"],["/remittance/index.html","12071ec22d4355547abde8b96f05406f"],["/sw-register.js","68622ba80c74d16eb8a5b99ac8dc7617"],["/tags/AC自动机/index.html","98dfdd382505e840fa3e3232a3ad5a3e"],["/tags/Algorithm/index.html","cbf5f93670a5a88c8fa2046e52dc79ab"],["/tags/Algorithm/page/2/index.html","479b73cac68f79cc703d603f1bfaf64e"],["/tags/Algorithm/page/3/index.html","2dd6f87c83b9687019575c4c075def05"],["/tags/Blog/index.html","f3fbb87648feb569220caccc3b781781"],["/tags/Chtholly/index.html","8d57fe2167804e3fd466581ac62fe4a8"],["/tags/DFT/index.html","9c495f12514aa9667e7abd9c2fe27c18"],["/tags/DP/index.html","e9c416bfcc16c1f7175856c8ee29fd48"],["/tags/EK/index.html","69ed040bb7ac8ba2a47c6eeefdeed0ca"],["/tags/FFT/index.html","18d778721b39527f6f15d6a89cc98ddb"],["/tags/Ford/index.html","9323429d13dbc1a94ed32505e0d5c1ee"],["/tags/IDFT/index.html","453ec98b37af9e7e2d76fe0b19873bb8"],["/tags/JSOI/index.html","7c6f26391a30fff816362227500ba44d"],["/tags/KMP/index.html","1a7039c6a61221a72884cda1cf000c15"],["/tags/KMP自动机/index.html","8cbf9c0045759cb7195ccdf182d72876"],["/tags/LYOI/index.html","94c709658d88b705db25cf2322165757"],["/tags/Lemon/index.html","38fc763650831fc458f6499b67b4c24a"],["/tags/Lgy/index.html","8c700cbdc0ec789d34ae7cc8401694e8"],["/tags/Lucas/index.html","98b2c7e80ffbb5b4686db56635fec578"],["/tags/Luogu/index.html","e2aa875eaf88b8ef0b937f639c324308"],["/tags/Manacher/index.html","77e4a8c3885a84c3b2f31e7a29510f18"],["/tags/NOI/index.html","87fb24d5bdebb1839e1fb0e86aa1b1c4"],["/tags/NOIP/index.html","a51a2d011d5a913b02ead146edc62fdc"],["/tags/NOIP2018/index.html","aa19790344769a7fcd7cf5c2853d79b8"],["/tags/NOI导刊/index.html","9dda8ec8651593a5c81fdabdf027151d"],["/tags/NTT/index.html","61fd498369e29249e77ae07ce7f72c62"],["/tags/Problem/index.html","4930c9d0c871a4449cc95d262dd58d77"],["/tags/Problems/index.html","291ae2bb5fd4cd6a2d4b20790a2a0f39"],["/tags/RP/index.html","6d7431f320856a465d0202204a6e2802"],["/tags/STL/index.html","2c4177a0ee7e8bbf523e4be0c3515f71"],["/tags/Splay/index.html","57c6189c7b20bff801d38efd851b5cf4"],["/tags/Tarjian/index.html","c76cc221331051f6ac1e10e228bcce65"],["/tags/Treap/index.html","52f444678e2c3f8e2976ba155e10516a"],["/tags/Trie/index.html","6e209544020847a4b47802fb79854fa9"],["/tags/USACO/index.html","b26b07976ad30582b9dc031eb651d510"],["/tags/ZJOI/index.html","ee28ef668495bcbcc1beaa3d40b33187"],["/tags/atom/index.html","24167b47a5424324342d6302d361c416"],["/tags/blog/index.html","0ff263afd218d47e3eeff4e59a9bd937"],["/tags/bzoj/index.html","5bfd048d485897ca832b5bd3b109375b"],["/tags/css/index.html","7f4f4e90fef4d3c38f0fe156eb99c861"],["/tags/dijkstra/index.html","2b9189e32cd41e4ff3156149d76f3831"],["/tags/dinic/index.html","ccd9f642066239d7b2647c73d5c19e17"],["/tags/fhq-treap/index.html","03be981aaaf09a5207135c62f0dc8756"],["/tags/git/index.html","f52f59698604ceda0876d5131aa3783a"],["/tags/hash/index.html","103d944885ef36141e3f797a6293abd5"],["/tags/hexo/index.html","38510eae3054dd5b62e40caf4db41cab"],["/tags/html/index.html","4a61632344122227fb8b61ea080b96ac"],["/tags/index.html","1a0487c1370b246505a4b1c4956840fa"],["/tags/lyoi/index.html","c67374357a187776365e31f2d8539782"],["/tags/markdown/index.html","076449c9eb21d0c57e7afcbcfdb0e8b3"],["/tags/plugins/index.html","b7e1667e18192c31249148e7bb291c2f"],["/tags/problem/index.html","fc217cc417c7d943b91a6553ee6aa45e"],["/tags/python/index.html","db39ab37ea667254080cf353b5e02ddf"],["/tags/qbxt/index.html","40a686f5950c7883d3ca2391f97b717f"],["/tags/rope/index.html","fe317c3fc799d8828ff439cf4d47cc8c"],["/tags/spfa/index.html","7e3a2f3b8e56b064401fcf4a24225196"],["/tags/system/index.html","fb28552b4b1b5aac20afeaf64eb458ab"],["/tags/terminal/index.html","26c3e5cb8dce46e8cd6a70a4fe6581e8"],["/tags/zkw线段树/index.html","3aa807426aefc0eb489387a7a78cad45"],["/tags/临沂一中/index.html","c80ea5b6b1f2ebfe644b7d68d9fe4a37"],["/tags/主席树/index.html","e0a9f1bdf49970cf7838583defa14115"],["/tags/乱搞/index.html","a573097959f133315f7f3780453e2830"],["/tags/二分/index.html","2e3b6adfe5332f90fdeeaec9d1605556"],["/tags/二分图/index.html","7a4db4b639247eb1b42d0e7b2d082698"],["/tags/二分图匹配/index.html","c4e9f9a7fbc66bcd2168a0977e526927"],["/tags/二分图最大匹配/index.html","10167ad3ccc0959475267286a068288a"],["/tags/二叉搜索树/index.html","e154432c38470120567e6b7375fa9e8d"],["/tags/二叉树/index.html","2ed8c8514333975eef99bbbff7addee3"],["/tags/代码规范/index.html","04d22ab7daa15835ec907ad57022d2c2"],["/tags/优化/index.html","73716911dc282a3e0c4fef10c4778487"],["/tags/几何/index.html","bdb6958c3dc5d8c94b17ed83791fa1f7"],["/tags/凸包/index.html","fff651f819a14939d34a7091defb40d6"],["/tags/函数/index.html","0c64420e2c70f100d3bacdf5b689d5f7"],["/tags/分块/index.html","b9757dd46134e507724f581a59fb79fc"],["/tags/初等数论/index.html","f3ed3916f6c4d57f73ef14b5ef6163f9"],["/tags/前缀和/index.html","8f637856b662a4c9002585045326a10c"],["/tags/动态规划/index.html","e28b3c1ba982cb37dead280f953c7942"],["/tags/匈牙利算法/index.html","927561e47328f3e58a6128065c6e8506"],["/tags/区间/index.html","993f2515ea82032a992b359f804d8568"],["/tags/区间操作/index.html","11fb3a2cee65aef2efe30c948486aab1"],["/tags/单源最短路径/index.html","0a0ff13d4aa306df76a8aed6c2f5a6a8"],["/tags/博弈论/index.html","c13f4526a953c39c0726e50eb35434e4"],["/tags/卡常/index.html","65e98946ac4174842d33d9451da2b105"],["/tags/卢卡斯定理/index.html","02954a00fa666bb1fbe3b1ff931b6dbe"],["/tags/卷积/index.html","e48c20435c9e0c76636d2bc406bd081a"],["/tags/叉积/index.html","a39d08b57d7258f2f388d9f5f398b032"],["/tags/可持久化/index.html","eeee21e8171e7690d0653254eaff82fd"],["/tags/向量/index.html","2e69de44f345e5f247fdceb9c27afce4"],["/tags/图/index.html","b1e3c0830f6eb371612d2d28b8c60029"],["/tags/图论/index.html","aa47fbd39e590bce18d1b9d2ffe97486"],["/tags/块状链表/index.html","f7d9c1689745afb3154f83a912e1642b"],["/tags/增广路/index.html","af4bb179c617ae35f920a4b1204d9634"],["/tags/复平面/index.html","1f99331708233b14f9aad1c120df5b32"],["/tags/复数/index.html","8b221c2a4bab6ecc5ebfe94e3b51501c"],["/tags/字符串/index.html","df4a5fefac5ae74b2b2cfb4482afe19f"],["/tags/学习笔记/index.html","b993ab5927879845a55268550a4a74da"],["/tags/常数优化/index.html","b722a251dc15cc804321a92df1852b01"],["/tags/平衡树/index.html","63e63d578c64e3ac3d1ec1c3babac7ec"],["/tags/并查集/index.html","0534aff17ee1bb28fb64c81bb0ef60e8"],["/tags/强联通/index.html","a47c8262559b5e6cc97e60421f950d21"],["/tags/快速傅里叶变换/index.html","c6a4e92f7a2e11f985ae13705049d8b7"],["/tags/总结/index.html","e4eec1f49ffb3ae1d295398d3e234bc0"],["/tags/感悟/index.html","c17022d4e7d4a31e005203d22d6e6a68"],["/tags/技巧/index.html","3f4f98330d0213f68bd68bf18c37d624"],["/tags/抽象代数/index.html","b37f8d2142f4da83ee567ced7f4912e1"],["/tags/教程/index.html","e8ac78ed92809787b936b91b45b13f36"],["/tags/数堆/index.html","9e06f7e5a3e3f0338c9fb82e50051b8b"],["/tags/数学/index.html","0f47d5e461e390a725d5c2e2d41c3299"],["/tags/数学/page/2/index.html","b11230e91608e336911963721e62de0b"],["/tags/数据结构/index.html","a09d9fb8414536c9882c64e6d3bd7c4a"],["/tags/数据结构/page/2/index.html","86bad871cea9181a3d1104b60e8233fe"],["/tags/数论/index.html","1277ac6380a3bda22cb9d7dbf566238a"],["/tags/数论/page/2/index.html","34c8e6f8ca6421f391a64778ad27cea5"],["/tags/文学/index.html","b56b06d03270912cf02ffd68e234faa1"],["/tags/方差/index.html","e846d3af4c26f32738492c3cacee5f6b"],["/tags/智熄/index.html","f788753815fb566dbee1aa0b46cb284a"],["/tags/暴力/index.html","ef258d53c2a23b2727570d157e100062"],["/tags/最优化/index.html","aaa6f0f8dc73234b582aa6297225f524"],["/tags/最大流/index.html","d52d567b9ed7f3c9a1849ccf30ed50fe"],["/tags/最小生成树/index.html","ecc3178586224b1809af3f21309b1872"],["/tags/最短路/index.html","8e71d05879d0d55fdecefc5d00b8bb99"],["/tags/最长回文子串/index.html","0c1f5fbcfedd479134a9426e696c2c7f"],["/tags/极角/index.html","e4948fe1123683323dd9405c61ed0220"],["/tags/染色/index.html","077a6e485cb338c1ed2abfffcde1984a"],["/tags/栈/index.html","194a72db1822571d19f94fe8d3903b2f"],["/tags/树/index.html","081373deb6b4f2648c3bc5ad3d08577d"],["/tags/树剖/index.html","f9da8bbb0b3810c46b921ece2307c472"],["/tags/树套树/index.html","534d094b5768bf585f51c27135f14927"],["/tags/树状数组/index.html","4bd2d83f7015ed3a1552a2b582c186fa"],["/tags/树链剖分/index.html","6359773aefedc188249b4eaf51411855"],["/tags/模拟赛/index.html","56fb8ad60ded3d35216e22442137a8fb"],["/tags/模拟题/index.html","525c1f903321070e54fa865e1e11b413"],["/tags/模板/index.html","2bbb51ac369a347f5b4f63d3276112cf"],["/tags/模版/index.html","d87bef7e6d02a2e1e0e941074690a517"],["/tags/模版题/index.html","9a387764c7cfa7014e2789046cf6c488"],["/tags/欧拉筛/index.html","d2c92ebb2a1e283e776be7bceb49454c"],["/tags/毒瘤/index.html","8fd3796808ec138119ff1c1eefa5de5e"],["/tags/测试题/index.html","b080da54ddad7a08c8aed9bde69519ae"],["/tags/济南/index.html","38bc974b084b8bcce570a4be041b1364"],["/tags/清北/index.html","4a6e2f68fede7394acb71408075a791a"],["/tags/游记/index.html","6eecf760cb36c1d920cd1ed169c59bdf"],["/tags/爆零/index.html","b546be7bb3b3f5c992a3be26cbbcaa79"],["/tags/玄学/index.html","2b88e416522a2d748cb78c9a6fbc53f2"],["/tags/珂朵莉/index.html","88a3d5e0199b3652adaf80b796f42810"],["/tags/生成函数/index.html","efe047a2f2fa5422fbe4549b8249dad7"],["/tags/瞎搞/index.html","3324481e1e1b1e673fc4538c2809ea76"],["/tags/矩阵/index.html","1889e8b67d5ea0a1688e8f88c2268009"],["/tags/矩阵翻转/index.html","197094076340cbd01888c0d8e5187ef2"],["/tags/算法/index.html","c9b629f646fa74e51791efe11d1fd016"],["/tags/算法竞赛/index.html","f4c826f4cd1e025b241d36e233ed2544"],["/tags/素数/index.html","fbc176986b69137cbc87646266bd66ff"],["/tags/线性基/index.html","5cb16489e3203058adae7cdb66d65004"],["/tags/线性筛/index.html","8ae0ca711e39f90d9b719537cee11c29"],["/tags/线段树/index.html","f590705729910d8ca483cc367e20dda7"],["/tags/网络流/index.html","59159beb2f36a9df683b16441a349949"],["/tags/群论/index.html","297a158f8670e1b8f2b90637010f24cf"],["/tags/自动机/index.html","13c4dccad804028dffe3aa39e5b6b05e"],["/tags/莫比乌斯/index.html","c5d97a8ed3e7fc382948b229eb10dcf1"],["/tags/莫比乌斯反演/index.html","0bcb928a699689cb0927a654c1d7e7de"],["/tags/虚数/index.html","f362a92593dc49c8d4e1f4a3f19a54ec"],["/tags/计算几何/index.html","bc0f6a57a7dac0eacdb9378b576da730"],["/tags/证明/index.html","989083d24e349014a13c327be2279861"],["/tags/评测机/index.html","84c8581aedf0ef1c7b4944abb15e9868"],["/tags/诗/index.html","94b87affffb1e5c9860511ba594f5d76"],["/tags/费用流/index.html","ad786c10d8272c0028cf9dbe0625d31c"],["/tags/路径压缩/index.html","1a050bf3c75f81d2f16e4b14f6e57600"],["/tags/逆元/index.html","970fefeea02bc61989696b38cca6db7c"],["/tags/递归/index.html","a5d1ed93aa1443ebc95af9f9defdbc73"],["/tags/递推/index.html","7ce889e6e9fea0df698432eb63eb778f"],["/tags/邻接表/index.html","5c71e61cf335ae4e61984741bfa2f8e4"],["/tags/随笔/index.html","7390c5e2a674b476fe8330239f8d6770"],["/tags/集合/index.html","85a8ae9f4158d4d5c039dab10bbaa4d0"],["/tags/集训/index.html","7293b97ea1b032543cb0fc16a5436dbe"],["/tags/非旋Treap/index.html","6e989bf44edd4a0484beecf65cb1a6ae"],["/tags/非递归/index.html","d04254eb5830c8cea877670563271208"],["/tags/颓废/index.html","26ecdbcbe4c6d8e4021b04ecd93136fb"],["/tags/题目/index.html","d78f6b2a7c30f701bb9454fe23aaf292"],["/tags/题解/index.html","4b7def3e0c79fd32913139cbd254b49f"],["/tags/高性能/index.html","ba1afcb99dc4009a3ee8c739ca503d53"],["/tags/高精度/index.html","30a155cb9f63476b8aabbaeadf572f40"],["/update/index.html","cfb11fd96c30557d3a2db07eaf43cd2d"]];
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
