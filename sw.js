/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","d2e652e372cd9cdfde492af941bca3c3"],["/about/index.html","3da0641e33ba9ac9cc8a90fc806cdedc"],["/archives/2017/12/index.html","73ba53ccc1cee55b95e7984dfca49b4c"],["/archives/2017/index.html","a3e15bb7c63e4652adbe750a02015496"],["/archives/2018/01/index.html","ca4861af22e1db09c0625733d31d306f"],["/archives/2018/02/index.html","edf224df5a26cb637893e1ee786abd26"],["/archives/2018/02/page/2/index.html","a6f8bbc2237bb7a0a92ed9df60c643e6"],["/archives/2018/03/index.html","58d17e5781245ef2c504d62b7e4be9cd"],["/archives/2018/03/page/2/index.html","1e3ac85d2a795e59d5a0fa5cd06e5e8d"],["/archives/2018/04/index.html","8b17da96ddf27a8a69f17abd16973f8b"],["/archives/2018/04/page/2/index.html","ebc73aa36353a937229efa21052342ee"],["/archives/2018/05/index.html","408e84ef00c7d49d7a9dd12f753e33b6"],["/archives/2018/06/index.html","7ac3d8e0b13c379bae9833c1e2c4a42f"],["/archives/2018/06/page/2/index.html","a14c81b82da935fa593c6a4b62dd67a5"],["/archives/2018/07/index.html","84737a60c08649f5fd2f267699f15e3c"],["/archives/2018/07/page/2/index.html","66be8ea7e5046ca37c0992b1cfac43ba"],["/archives/2018/08/index.html","953aad12fe2fd7a8b52efd9b5e224fcb"],["/archives/2018/index.html","ef5bb9ff96f8eeddde6c9107ef9932e4"],["/archives/2018/page/2/index.html","c8b4d36c0420d7711fbff844d8ea88e6"],["/archives/2018/page/3/index.html","1752e20739b301b65692c9cb659da645"],["/archives/2018/page/4/index.html","fc99a4cdbcfdc0b6166fe261da981b55"],["/archives/2018/page/5/index.html","ade9d21e5a8d2064fc9efa4f49cf8ba8"],["/archives/2018/page/6/index.html","ce541792658f08731a04e2a06cfe7628"],["/archives/2018/page/7/index.html","e669447ee29b914e3f1ed581b7fbe88b"],["/archives/2018/page/8/index.html","492761a74e72a257bdb90eb6fd393520"],["/archives/index.html","ff9185102291ee79a93ca3ef6efe672c"],["/archives/page/2/index.html","329602cd66e6c1ee3b257ea491c23d2d"],["/archives/page/3/index.html","38f0f7ef6e9878b381ddacbc42f77d73"],["/archives/page/4/index.html","1d81832251611aaedaefcd393bd2456f"],["/archives/page/5/index.html","e7cf286d8b6d1b5334601fae5ef3e7a7"],["/archives/page/6/index.html","6f110a57ddf5b302bcc1f1167985dd07"],["/archives/page/7/index.html","0b269038f4367dffb07bb357a024e54d"],["/archives/page/8/index.html","eabd1ccfbb3e194e0dde0ab3273d8ccd"],["/archives/page/9/index.html","959ab0086caeeee4f263ecddb03d2355"],["/articles/18-4-27-things/index.html","745abf61f5608b2a96f02d5bc4213410"],["/articles/18-4-29-test/index.html","cd0d489a9901633e5cfd65c78babdd67"],["/articles/BigInt/index.html","e181b7969eb6f4e41f680535134d2a4b"],["/articles/Chtholly-Tree-ODT/index.html","260344a8319a56bc747369721e95b15c"],["/articles/Code-Style-for-OI/index.html","6dc156779abe9fecd109101920c68d9e"],["/articles/Computational-geometry1/index.html","86c491dbf293a2487b0f7dc52eea0f01"],["/articles/Computational-geometry2/index.html","f6e9ffbf923f90144d745a7bd7bae263"],["/articles/Computed-geometry/index.html","5be460fd8eee47c969869f13728cf1cd"],["/articles/Dirichle-product/index.html","2ea7fadf93264c3b35e84193dfb6f0b4"],["/articles/FFT-study/index.html","f1d61652520cff5029c204dfae87603f"],["/articles/HeatWave/index.html","3cd76847cd2e63e6aceedd7a72a43181"],["/articles/JSOI2009-游戏/index.html","556cc488dbf68648fb7e84fd6e849c21"],["/articles/KMP-AC-automaton/index.html","599550f063ec119e4b6e0c5cb7f0fdda"],["/articles/KMP-AC-automaton2/index.html","160993d16714e59440e3f753bb2f0347"],["/articles/KMP-AC-automaton3/index.html","43050001465e55633c9ef5fe5a29e5cc"],["/articles/Kernel-privilege-escalation/index.html","681baf7f131d34f6c25637d2c31a29cd"],["/articles/Linear-sieve/index.html","2a472d2990a82724b5385e2b31726ba3"],["/articles/Lucas/index.html","3c6f8f5027e93c24a1c1c4dc508a8382"],["/articles/Luogu-P4276/index.html","5a1d69ae572c1456a985aff0316e40a1"],["/articles/Manacher/index.html","e392be004872542d44ae42b027c5d4f8"],["/articles/Minimum-spanning-tree/index.html","c834f4d01de0336b86359b750e01a7a0"],["/articles/Mobius1/index.html","bac066eab3b0769c5fa8153ec6b8efa3"],["/articles/NOI2010-Plant/index.html","1d6300ea9dda4fe9917b13c954c7a6dc"],["/articles/Network-flow-Algorithms/index.html","9317c4c86d875bc59c895b2130ff20fc"],["/articles/Network-flow-start/index.html","2c3e1a907938521ae25875337dcd9157"],["/articles/OI常数优化-进阶/index.html","53f4dda46505c1401edf7eb205e08ed5"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","a9d54a6333a6428609271e836c714b7e"],["/articles/P1984-SDOI2008-Water/index.html","b0755cb4a7334908aef319ab0d26572f"],["/articles/P2018/index.html","31bb4d2e2e79b59aa9cda6761ac00ffd"],["/articles/P3933Chtholly/index.html","9ab67953147cc3ab01ba5562d861fcc0"],["/articles/Partitioned-Algorithm/index.html","ba4e61b0c1124a0dc9ee63759b94df95"],["/articles/RP-introduction/index.html","05250ae36ecd057e90bf65cc564b509c"],["/articles/Sandaram/index.html","beb290e6b6f5b59b2268c10960c3e5ef"],["/articles/SegmentTree/index.html","a291edc62740e7a4896c81c153b2a781"],["/articles/Segt-in-Treap/index.html","07322f8f6888f64cfce35d3c962562f4"],["/articles/ShqProblem1/index.html","94b9ff191941cb2b0c99f2edd6707782"],["/articles/TreeArray/index.html","f8683a93330242cb3256b2a61ed3753f"],["/articles/TreeArray2/index.html","09c68b5d09c43ab30c859c4624c30235"],["/articles/Union-find-sets/index.html","182e22be9dcad6107426fc1cd4b50982"],["/articles/ZJOI2006-书架/index.html","7c29a2a29daa16dfee7cec46ad39debd"],["/articles/ZJOI2007-矩阵游戏/index.html","9e67f5c8dac3910891571e8ba20785ea"],["/articles/a-bproblem/index.html","b8a8eab500b121021e6c844060e343b7"],["/articles/aboutBlog/index.html","aa4d912660eaa7cefaa312351144b6c9"],["/articles/aboutgit/index.html","07a4ceaaf0ca3a941bc6c960a7268d6d"],["/articles/autoAC-lemon/index.html","e4d4484094c64d814b2bf7702e2b0d12"],["/articles/bzoj-3337/index.html","8bfe5b3b1d69ae1e9a2e30c9ced92155"],["/articles/cppteach/index.html","ab16d57812e5f367803dc226152d2bf1"],["/articles/css-QWQ/index.html","dc8a422dbeef861753c4c584c655703e"],["/articles/dijkstra-spfa/index.html","b885650c65a0bd81db5a778f22265c50"],["/articles/dijkstra/index.html","b9d4c1355b1e21cd9d752df895f64961"],["/articles/dinic/index.html","8e952b24ebe9b5236af169fbd29eff2d"],["/articles/duliu/index.html","919a540c9e0381c0f0d818d4d8f34ab2"],["/articles/dynamic-planning/index.html","226e83e9a24e09c60a45b63fbcb49c9b"],["/articles/elementaryos/index.html","5153b96b60fe98c572b7312a1f8f494b"],["/articles/er-fen-tu/index.html","a1f16cffb8d16586bfa8ebc1efbfaa7a"],["/articles/fhq-treap/index.html","5b1715a3b18f1fdb31a75cf271f6151f"],["/articles/group-theory/index.html","adc2c4c6bcc4f7cbc1fcffd92a892b84"],["/articles/lgy-from/index.html","30c9a8c617c88e8d7242210fab7690fe"],["/articles/linear-basis/index.html","5810b8bb68e4619501bc0abe3feafcaf"],["/articles/lyoi-Poetry/index.html","327bff41ce59ae46868b6ba6c5eddb28"],["/articles/lyyz-test-2018-5-19/index.html","6aee2db31957f66ea6bee8d46915fe45"],["/articles/markdown/index.html","cdd62bc5ba26b844718b97c571cdf328"],["/articles/moban/index.html","eb2addfdf912f8618640d1f26bde5980"],["/articles/poem1/index.html","42cfc0d13aa7249ebab3aabf7bcf9f50"],["/articles/prims/index.html","552bf9fba47ad33bb87da89533a2f05e"],["/articles/python1/index.html","fb30e4792439bdf0451d82845434114b"],["/articles/question-01/index.html","4e8346f28e0d8444d113086c4ba5b2f0"],["/articles/recursion-to-no-recursion/index.html","fb848c202b7b8fab0394a6ad5edc4dbc"],["/articles/scc1/index.html","26e2b03b83d960ff7b6e86f59e75bede"],["/articles/somethinks1/index.html","79c4ac9aba317865653d9cf0f677e1e5"],["/articles/terminal/index.html","ae21858ba3148a5b785c5da3cf11b706"],["/articles/terminal2/index.html","f3355d8b6bf0320d65e8dd9bb2abec28"],["/articles/test-mode/index.html","6af399115589fa12cd6f4e79a14906f7"],["/articles/test-polyline/index.html","b7b6dc994d6cb66e8663c5fc8914e67a"],["/articles/treap/index.html","1dfe2753393da19f3123354f59849401"],["/articles/tubaomb/index.html","222073099a2c65bca214cc89bf3c9ad3"],["/articles/use-hexo/index.html","885f6eb79654d298175db7fbe51a8f67"],["/articles/use-hexo2/index.html","02d13e6bd90fa3579f1251e38a106c0e"],["/articles/zkw-tree-algorithm/index.html","1f71863bd745293fe90b84fdd4e90514"],["/articles/zzWA/index.html","34aad1b045055f2af696553c78cdd098"],["/articles/「LYOI2016-Summer」一次函数/index.html","dbfee7e0add0aa3cbc08348154cddf19"],["/articles/主席树详解/index.html","c1f47b1e06f8d10da609ae6d24d1ac20"],["/articles/分块-P1471/index.html","a58ae760ce85b21cd619d96230392785"],["/articles/可持久化并查集-rope/index.html","7fdb053fd9ceb788887d99e4330c0b2b"],["/articles/复数表示/index.html","2074386e2675d4a50f5e2e793bd2efbc"],["/articles/洲阁筛/index.html","3c4a31c85ae7f3d1c6a0c2de164acef1"],["/articles/生成函数/index.html","7d19d61145833dca5cef014ca592f020"],["/articles/网络流-二分图最大匹配/index.html","378228dbae9a49daab53cbdc7382d6ba"],["/articles/自然数的和/index.html","677b6fa1ba13d6c71b93b303cf7aceb8"],["/categories/Linux/index.html","ba9b750992767c16fc6397a363a0302e"],["/categories/OI/index.html","d17602c812bebf9e1f570fc6ee10f0f3"],["/categories/OI/page/2/index.html","3c0855c897d85a71ac2aec279a97377e"],["/categories/OI/page/3/index.html","9bbb9cf8f2e9f890f79c59999651abc2"],["/categories/OI/page/4/index.html","a0d6ea5edcb3c9dede88cba30ca1a582"],["/categories/OI/page/5/index.html","2bd7ffa1bc306163c7bfd22f4a0431c9"],["/categories/OI/page/6/index.html","297462cabdba00e58806a31407c1064a"],["/categories/OI/page/7/index.html","061259d5095bc122190923458827521d"],["/categories/OI/page/8/index.html","3a2c0812ca4bf72d1f89fdc151250538"],["/categories/hexo/index.html","516b478f8ac458a1e1a1d3673bbe594a"],["/categories/index.html","f5d6abd9434097ffc279f2b3041a7347"],["/categories/随笔/index.html","328eac3ad7856bfef06fc8ed5a22ebe3"],["/comments/index.html","a4e0bd516eecfd6a2c20c7f3f49475cf"],["/css/main.css","1f3eac80aa0332e31b81259a3a07c837"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","95550b6d6cd7f800c013e8b8d6dda9b4"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","528848b2401ffb7da9cb59c7f041f4e5"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/2/index.html","3c80b3391fdcaf25902255e013f4e6a0"],["/page/3/index.html","d20f5c63d4ed86cbcca4086348e3d846"],["/page/4/index.html","ac952c8cbf61fdcd15eda0ea17813761"],["/page/5/index.html","6de5df1c17b156715f574f949deccf1f"],["/page/6/index.html","fff8f5c7046c360505880fa9740fe4a3"],["/page/7/index.html","ae6dfb89f62062eaa18fbbb0e6b68f14"],["/page/8/index.html","0f1c5f1f351757cda61e69d4231ea905"],["/page/9/index.html","3eb95e2078db22a14e8f009851d29d2e"],["/photos/index.html","5166272259721fa575d31c6a7becf4f4"],["/remittance/index.html","789b5c9ddd103210ea8471b2687bdb55"],["/sw-register.js","cf9c17a0a64ea4e285c5065a89048699"],["/tags/AC自动机/index.html","c156d38e3505ac7a4318537c20bb5092"],["/tags/Algorithm/index.html","75f325c03281dcba545642f1cc8a2df7"],["/tags/Algorithm/page/2/index.html","95ec877c5c78ba848d4e5b9007458268"],["/tags/Algorithm/page/3/index.html","9925c39c30763520dac0c8654401bdf7"],["/tags/Blog/index.html","ade9af645b5482e993a408634cd441ba"],["/tags/C-11/index.html","158a97bf2b2dab3b0e6f4db3dca177d7"],["/tags/Chtholly/index.html","314cfd1f345bf6d91787392637e2f990"],["/tags/DFT/index.html","4e01c98c8db63a1beac8bb6ae5b2d3a4"],["/tags/DP/index.html","f663992d4a4ae7246c69436268567d09"],["/tags/Dinic/index.html","6fc7dec7c44af05755169ed4af05d096"],["/tags/EK/index.html","4b3f90ae021b9c9377d0eef06d287c23"],["/tags/EK算法/index.html","e677ee69d2476e224327fa32596fd4a9"],["/tags/FFT/index.html","fd0b61a6812caabab990297b6920e1ca"],["/tags/FF方法/index.html","a43d88449ae3d406672fbd2a529ed989"],["/tags/Ford/index.html","aecd684ec916ef628c3d7bb37795e0f7"],["/tags/HLPP/index.html","739396e2869f9103afd9fca81c00baea"],["/tags/IDFT/index.html","97be625bf31fd4f90c313857c87c3d7b"],["/tags/ISAP/index.html","8293b5535ec1f0f9f3dfd17d93d45909"],["/tags/JSOI/index.html","30a98f79bfdc8181660c01506ac328be"],["/tags/KMP/index.html","b5a055a9bf664856dc54f9d160316651"],["/tags/KMP自动机/index.html","f84bd16065c405a2e445ed41f26386aa"],["/tags/LYOI/index.html","64825c1f06d7a32f6abcea31963afe96"],["/tags/Lemon/index.html","d9673bf4b620d9050ed72f13ac7eee51"],["/tags/Lgy/index.html","2d34fe0a0bafbeb54b62a8615dba3b5d"],["/tags/Linux/index.html","c0cf1c9a6e07852d36606a56aab66b40"],["/tags/Lucas/index.html","8c0c4fcfe099b59466ef621dc4b8d8b3"],["/tags/Luogu/index.html","81e2172ea20a49334f941ca6f8e3aa14"],["/tags/Manacher/index.html","d70265398b257528790aec90a55c4434"],["/tags/NOI/index.html","e140e885da94cd5ec82d1b0a96cb4c7b"],["/tags/NOIP/index.html","e33b189657b60a55778cc70cc56d3c09"],["/tags/NOI导刊/index.html","925439acaaa791466a999a439f988ee7"],["/tags/NTT/index.html","b10e75c81130e5e5745403fd587f9e32"],["/tags/OI/index.html","fb4a34ad999b9fe4796e2242f8cb8df1"],["/tags/Problem/index.html","e4c9b08eb22f19823e45ddaeb3d682e6"],["/tags/Problems/index.html","baabf3a7de4027994b34ca8eb9643dc7"],["/tags/RP/index.html","b022cde9b97e389318963635ab72d5a6"],["/tags/SAP/index.html","0703fa5643d48e658bf80a1af47dd129"],["/tags/STL/index.html","32d3b56445414022730e52760d10edb1"],["/tags/Splay/index.html","243aed637d350f78996646f0459a0f6d"],["/tags/Tarjian/index.html","e7b2bdd32fb512a0544f539301325116"],["/tags/Treap/index.html","2e16c95cfe8ad2761d5e8bfc4cbea69a"],["/tags/Trie/index.html","d2e2997732ce82deca22db6e95be53a5"],["/tags/USACO/index.html","76a6425387861268fb4776a77232f9d1"],["/tags/ZJOI/index.html","c070d687f8085a759aeb7bf5d00ce13a"],["/tags/blog/index.html","f47599859dcba8c2e9875ae6a36c6aba"],["/tags/bzoj/index.html","0383a0aa505041df38bda4f701dad7dd"],["/tags/css/index.html","9b5f4cf28f4fead0744488c4de5e8111"],["/tags/dijkstra/index.html","6c6706445d80c5fde5b2b8d97856b8ec"],["/tags/dinic/index.html","db04108303424cc65d4406e66779bf89"],["/tags/fhq-treap/index.html","80e3974e2e3f257d267a62a431cd6528"],["/tags/gcd/index.html","fb86499d79e7b6e5db613005bd079b18"],["/tags/git/index.html","f6a7d4c18b85ab6847f862578ed1f0a2"],["/tags/hash/index.html","fd53fe749b66492447351525275b40b4"],["/tags/hexo/index.html","e432ef060ae3b86c4c480cdf09e67aca"],["/tags/html/index.html","f0e5758dfe07165c4e5c2decfa43568b"],["/tags/index.html","4ddfd726a81f144936004f53811d2439"],["/tags/lambda/index.html","9b7993b447a98b160615df8001a9d870"],["/tags/luogu/index.html","9bcf2efd51dfa7f9e4329d337d257aa3"],["/tags/lyoi/index.html","bd1055f32f208762a1e6f7401aeb4c90"],["/tags/markdown/index.html","880a1edecd65ca4157568dd90f22bded"],["/tags/problem/index.html","f0c1c480504165f33215a9134aa5ac44"],["/tags/python/index.html","2aaaffe5f44f8d14209c1116b06da984"],["/tags/qbxt/index.html","35db94f41ecf664b3ebd2c068568425d"],["/tags/rope/index.html","22285523dd76cf6b22f7ba56f24fd7b4"],["/tags/spfa/index.html","bfa704ead1635527a2b634d089f26ad5"],["/tags/system/index.html","cc289cb322f75538164bc4b8a5ef466a"],["/tags/terminal/index.html","a92c27fae0c4e9665220ea83ade25610"],["/tags/zjoi/index.html","87f680390a596c08d1c00fa2ff6a2fcf"],["/tags/zkw线段树/index.html","168e293af722d2e91c13cd89b9372641"],["/tags/临沂一中/index.html","389c3f7b022254a51a297781948a9813"],["/tags/主席树/index.html","4591f9b3d70ca391ced9a5d7a5552d17"],["/tags/乱搞/index.html","96d290507916fd000b8c55d0e7406ed1"],["/tags/二分/index.html","235109bbf1510957c918bc235c946fe3"],["/tags/二分图/index.html","45752dfbb788e3d2aa106ee991ba0661"],["/tags/二分图匹配/index.html","fb1b2c3ac6f51264ac37c641d8cfdfdb"],["/tags/二分图最大匹配/index.html","6d5d13eb70663ac540fb76d143ea4d17"],["/tags/二叉搜索树/index.html","7a7afa79cc949ce8c03f5784bb6abbca"],["/tags/二叉树/index.html","d6093d52260008597c1756478d3005f4"],["/tags/代码规范/index.html","1f246ae9d68ac03603473729e04da52b"],["/tags/优化/index.html","9ef6e5fe944089e280bc3eb65514ebf7"],["/tags/内核/index.html","7ed09d5b4d2f02dda00330386aab8bc9"],["/tags/内核提权/index.html","323f3cfa81e94aa26d151d8966483550"],["/tags/几何/index.html","690af1d5c6f33494f86ac7fa92502ae8"],["/tags/凸包/index.html","9d98d494abf4af69389156de3fcc17a5"],["/tags/函数/index.html","9e16ea716fbf28d399919333af7c7504"],["/tags/分块/index.html","e2d67e0dce596c33db753cd41c9e713b"],["/tags/初等数论/index.html","3c0006163204a84ad8a0b316a22151b0"],["/tags/前缀和/index.html","220834071c1d907733ee26f2fce24c45"],["/tags/动态规划/index.html","3baa7659aecb85ac71437530adec2770"],["/tags/匈牙利算法/index.html","e27bc15ed8213ae32a8dca084914bb39"],["/tags/区间/index.html","46d1344e76349636753a6a400045ffc4"],["/tags/区间操作/index.html","06dda3e13213e55dd07303571131578a"],["/tags/区间第k小/index.html","3a9d093f2a1e6fd0124b64340ec0a2f6"],["/tags/半平面交/index.html","10082c7c0063f7f6d14a863fe95181dc"],["/tags/单源最短路径/index.html","c96d8b8bd640c20b8e2a9b407888ea4e"],["/tags/博弈论/index.html","37e62200eedfcefdc39e9a3fd189ba17"],["/tags/卡常/index.html","e5c3f57703f6b8d302e5d041f8eb4aca"],["/tags/卢卡斯定理/index.html","9e68740d640369d4986dfb1330d0d0fd"],["/tags/卷积/index.html","21d4ca6df15d3c7c9e16c141948473fc"],["/tags/叉积/index.html","4624ebeb352ba4adc7a1bd77887a36cc"],["/tags/可持久化/index.html","eb2fbae08d0d70dd4ca9a4e5ec332193"],["/tags/向量/index.html","e4fe1d88c0fe74b2f4864d8b2d98f5dd"],["/tags/图/index.html","358dccb4709ae0d51da3329b472f65a8"],["/tags/图论/index.html","efe83d83387bd4b26543ab0eedd2e974"],["/tags/块状链表/index.html","7d2ca5eb820df98ca26a2e960840d9a4"],["/tags/增广路/index.html","325d7862a13794a4b260818bb741e21c"],["/tags/复平面/index.html","22f71a72b7a0b57863dd25e589e0a4c7"],["/tags/复数/index.html","ec2b6d8464e6d6329163abc8029c8823"],["/tags/字符串/index.html","11270f48f2854ad0e8928e2ea72e7abe"],["/tags/学习笔记/index.html","3626c6fb048a1971459adc77d1ad23d1"],["/tags/常数优化/index.html","22ec6090ec4cfdce5b66e1bddc4f0b92"],["/tags/平衡树/index.html","6c7d1b836c42449bd3112638a3557091"],["/tags/平面几何/index.html","6db887cf06b93875c0bf9611b90b2ef0"],["/tags/并查集/index.html","7c560a0f157c5bb5ea9f93acec6be6dd"],["/tags/强联通/index.html","eb6f986bfacfd95d663f14696c8566f4"],["/tags/快速傅里叶变换/index.html","26b6f4819ecd71c8f019ca8fad83f764"],["/tags/总结/index.html","f4e7c1e7a9e2881de6dc6b1e27077d89"],["/tags/感悟/index.html","85d3dac559a265b518fdc6b62a76bcb9"],["/tags/技巧/index.html","cbb8856c884b3127e655fc5808aee67f"],["/tags/抽象代数/index.html","c723a9eabaf1a2c75a9c81a2ea017c18"],["/tags/教程/index.html","baf8c7776deb769f35242c18e150e0be"],["/tags/数堆/index.html","811ff7bb37acb0423047fdc73cd5dbc0"],["/tags/数学/index.html","0d8019bdd57f43423d0f3ca1a23f7998"],["/tags/数学/page/2/index.html","6f3a7fdf9651d0a75d140bace39107df"],["/tags/数据结构/index.html","2115fd824742daacb98008683bd4ee7f"],["/tags/数据结构/page/2/index.html","01d0849738868751eed8a19ea5b6263c"],["/tags/数论/index.html","d7b3814d05e178c87a79b39f5555a19d"],["/tags/数论/page/2/index.html","1f55958fcaea8eed8cc6b9f4551c6559"],["/tags/文学/index.html","106de6f91397f6f05bd4791cec84bc6c"],["/tags/方差/index.html","71bb86e5dc24f4d5729d158cf1d5befa"],["/tags/智熄/index.html","014dbae95d68f05b3b2524adfbbfd887"],["/tags/暴力/index.html","5e9f3a80656650096efe8400e6757b70"],["/tags/替罪羊树/index.html","6f2f160be86e4470116b1707925a8bd9"],["/tags/最优化/index.html","ce2cc94fc7375cbde741404e98da8990"],["/tags/最大流/index.html","448f647470f02749fb432f4b9ade7e5f"],["/tags/最小割/index.html","5c8f9af57a1990578b802c7d623d0dc6"],["/tags/最小割最大流定理/index.html","6a6cdf5eaf90ca0503802e1b88804727"],["/tags/最小生成树/index.html","71e717fb70e0e8e0d744b8a68844e700"],["/tags/最短路/index.html","33a387a24d1bb1eba8fe0afc0eb65e08"],["/tags/最长回文子串/index.html","eb46cb627ff19decfd3c962a586cb846"],["/tags/极角/index.html","45e563f8faa219d0b1e7a9590395ab2b"],["/tags/染色/index.html","2103c54acaba3d36b0f59c4e0f8525c0"],["/tags/栈/index.html","48f074b724ed0d5fa521b9c80a00289d"],["/tags/树/index.html","3f556f1aba33ead608f83e0bfa087936"],["/tags/树剖/index.html","e0885de0e51dd2e2fda3bbf8bfe04851"],["/tags/树套树/index.html","3a4619b93fe89caa134349cb2c93aa9d"],["/tags/树状数组/index.html","ae261cbceb887d8ecf0e59647a787ca1"],["/tags/树链剖分/index.html","b99913cd5eb692cad3bd012ea3249421"],["/tags/模拟赛/index.html","8a0b7097b98b8104392c22ba783ec023"],["/tags/模拟题/index.html","9e5292361e0a98a55f37ce1eba9f81a9"],["/tags/模板/index.html","15b6856035317ea93c4d19076f73d6c6"],["/tags/模版/index.html","67ba735de0c18356efc072bdaed2efa0"],["/tags/模版题/index.html","1bd53b3b9358d0c02f95e15df7bfb008"],["/tags/欧拉函数/index.html","a550e32acaeef0a88d3cd9503380482c"],["/tags/欧拉筛/index.html","e4baab63a2c3f4f6b9c9bd823c30ccd3"],["/tags/毒瘤/index.html","8b55618cce21c1a15b83271b35cb8909"],["/tags/测试题/index.html","bd7c10b5ee7214578f8eb8358e52b129"],["/tags/济南/index.html","ea5df835d77f63289de10901aa202516"],["/tags/清北/index.html","b96e6f9887d1aefa30e71517b33ac44a"],["/tags/爆零/index.html","7a031ee044d832c92122b983044e3c7b"],["/tags/玄学/index.html","7945d63e60622538b7c9d6fc5e686346"],["/tags/珂朵莉/index.html","89e1119e20ffa48b56e1882f8a161512"],["/tags/生成函数/index.html","52d817c2668547ceaf8610bc69b75299"],["/tags/瞎搞/index.html","0c748e8f4e016ad38b4ee20160c09b87"],["/tags/矩阵/index.html","74a2e14c5d0b48f242c2f16aa3fdfd6f"],["/tags/矩阵翻转/index.html","9575b685728d2e19ac7697b18017a9fb"],["/tags/算法/index.html","4849584a5785c82f2719fba6eaf81f85"],["/tags/算法竞赛/index.html","2151eb9e48b6cae23eb9d27340f1874f"],["/tags/素数/index.html","d2e5bef51e8a49612f59594e5e1fa206"],["/tags/线性基/index.html","2f5bd23472e1fafb9ca42426a94fc68c"],["/tags/线性筛/index.html","87e37f929b017625fb75ba175ff0d881"],["/tags/线段树/index.html","18692bcc1ace50154493513c11e04113"],["/tags/网络流/index.html","e57105d1849538dcd58bf77fec380d4b"],["/tags/群论/index.html","afe324a9c8e5e9ed7b0e9e8ffa94a7dd"],["/tags/脚本/index.html","088a8b3ec05221dc282671912f99ab99"],["/tags/自动机/index.html","34ab06b034a8e278cb46cb7d79f6a322"],["/tags/莫比乌斯/index.html","fc36be52dd9f687f21b0137d4aa5c100"],["/tags/莫比乌斯反演/index.html","fc16dcf3dabf4c9036bbfc3cc99bd6dc"],["/tags/虚数/index.html","c176a4cc929e14dc87d03447305e948d"],["/tags/计算几何/index.html","24f748df797570c0f5d4e9b39c1a3fc5"],["/tags/证明/index.html","f407fc86204475d54e533787572f9457"],["/tags/评测机/index.html","60a6409c2acda7eadbaa938cfb720644"],["/tags/诗/index.html","9347531468e2b43ca3bbb199d2f0c4d6"],["/tags/诗歌/index.html","a27addf1e5dd4e964e34c57b96475874"],["/tags/费用流/index.html","6511695c6d820d79511411abb4d7fc1b"],["/tags/路径压缩/index.html","e33d45abb7288cb4361ebd3f9c6b6042"],["/tags/逆元/index.html","52b58e26d3a5601f7dca6f89e51d325c"],["/tags/递归/index.html","fd130f86ecf42db8dbb630af7ca191f1"],["/tags/递推/index.html","68e635d444ba953aa90e6cffc127e500"],["/tags/邻接表/index.html","53f23886e1df13926ba646d88f0ba546"],["/tags/随笔/index.html","6bb0f03d489970318424290adaa86271"],["/tags/集合/index.html","72bafc1cef7d194f9d91b4fb3f1a120d"],["/tags/集训/index.html","8968fb3d2c44db83e594a4b63da54c87"],["/tags/非旋Treap/index.html","d47647a85c9c4824f00a885dbf7bea24"],["/tags/非递归/index.html","5370853d0fdffc49c6d9b9544921ffec"],["/tags/预留推进/index.html","670fb67ca01b4876425f73b65c07dc7e"],["/tags/颓废/index.html","2d25fb1d0a4ac7ee6600e8880407a451"],["/tags/题目/index.html","2d6c8f6593a5322a6a5c7cdc11d89eb1"],["/tags/题解/index.html","7f7a545a5b0b43ca64bdae76e0baac59"],["/tags/题解/page/2/index.html","a3e548a03ed09ad753eed9b31d442128"],["/tags/高性能/index.html","d2a5abcdf7cda0c7e705f4bec686f5de"],["/tags/高精度/index.html","dbef6aeb2e2c9c23a86819d46ead4bd8"]];
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
