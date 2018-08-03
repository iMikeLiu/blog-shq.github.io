/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","5f8640526a289bba3ad4b9f71af397c1"],["/about/index.html","43373fe7254067f1aebd3bfbac8820b1"],["/archives/2017/12/index.html","b7bb1d25ccc4f0faa35e7cc891f1319a"],["/archives/2017/index.html","801fd198ec40e622550ffae9a2e6901c"],["/archives/2018/01/index.html","3ecf1c58c2c94b107aa90081b1db48a1"],["/archives/2018/02/index.html","663f7ed17266fa2e6857c64a0f719a5a"],["/archives/2018/02/page/2/index.html","7fc7cb1b4a60f92d9b7f8c5591774ead"],["/archives/2018/03/index.html","bebf74b36d167f7a2d3ab9b3693f367c"],["/archives/2018/03/page/2/index.html","dfd23af321c23109b50751a415e0b159"],["/archives/2018/04/index.html","b8a4fb260e3065ff0153c7ad9bc5e35b"],["/archives/2018/04/page/2/index.html","853eab51772db359b5f1a551f8f1ae6d"],["/archives/2018/05/index.html","009c3de222fca67fadebdd8aabb9c44f"],["/archives/2018/06/index.html","de88ecd2f70373f6b1fe422789b79929"],["/archives/2018/06/page/2/index.html","9c85348b8b55867a704bb04ea033eb6e"],["/archives/2018/07/index.html","6f8d30208d977b54dba69be18254f8fc"],["/archives/2018/07/page/2/index.html","f394ac7d9a87f582c1a3e15a9833f5cb"],["/archives/2018/08/index.html","c9dcf12c8482c595d227184f30bdaf1e"],["/archives/2018/index.html","b27b3631723e42af89cf6d17be88f02f"],["/archives/2018/page/2/index.html","fd27a6fecb9fbff342b1f9cf76ffd14e"],["/archives/2018/page/3/index.html","8193ce24f140ad2c186d58878de1d7f9"],["/archives/2018/page/4/index.html","1567ce8fbb99a1aa3e0774a0b7ac7cea"],["/archives/2018/page/5/index.html","83a16394719fd63925029bb31a2371d7"],["/archives/2018/page/6/index.html","06d445ff6ef3886c508e542c5fb2078d"],["/archives/2018/page/7/index.html","093207848e3e32028a077751c8f6f3d5"],["/archives/2018/page/8/index.html","b2d404a78935e87d500c0772771c6d34"],["/archives/index.html","81bcdb956ee5dfb99ea3b6fa5367a317"],["/archives/page/2/index.html","e0e08ceadb36ed0366fdcc73740cf006"],["/archives/page/3/index.html","dbf54b9dc5a400cfbd8984f192f5fbcd"],["/archives/page/4/index.html","527f8d1c1dbd8b7088fa133fd81821ed"],["/archives/page/5/index.html","f3654d45d247d328b00708b8e755090f"],["/archives/page/6/index.html","b09de47c583288bb8b2aecb0f2461800"],["/archives/page/7/index.html","c7c5ecf232ac7fe3da95340f00552d62"],["/archives/page/8/index.html","cb107c988b121f78f6cf0d623cbb95ad"],["/archives/page/9/index.html","21904e816fe2e4be04b96162cc52b881"],["/articles/18-4-27-things/index.html","b7b657adf38298c94c354c8042990c32"],["/articles/18-4-29-test/index.html","7fe2842862d11ac7fb354d3647ab96ad"],["/articles/BigInt/index.html","383d39fbbb5444431c96e134fd34befc"],["/articles/Chtholly-Tree-ODT/index.html","67b68418e8c17aebcd078437eade1051"],["/articles/Code-Style-for-OI/index.html","4a005fce020be082efc9081864cfdffc"],["/articles/Computational-geometry1/index.html","8ed440090eda464c0b9dfefd5680c915"],["/articles/Computational-geometry2/index.html","643fcadd0699ce7656f0dcef9b92839b"],["/articles/Computed-geometry/index.html","06fb912a0a47f4221eda5168da4ca356"],["/articles/Dirichle-product/index.html","c50035c987f3915fc5e8e3a24e011143"],["/articles/FFT-study/index.html","f84b9dccd79298e8c11bf9ee409a1570"],["/articles/HeatWave/index.html","646521b99df387d66e8f69c3ba1870a7"],["/articles/JSOI2009-游戏/index.html","19c224b7daf4bb11dad0f0279954bf9c"],["/articles/KMP-AC-automaton/index.html","edab77dc3b3e9466fd98579ca6756031"],["/articles/KMP-AC-automaton2/index.html","ac104e89e52b1360b8313f0d57397dee"],["/articles/KMP-AC-automaton3/index.html","0b308c09ad1b4156035aca5917bc3da9"],["/articles/Linear-sieve/index.html","969fe50a5c1789df3ae57fa7a920060b"],["/articles/Lucas/index.html","f6c233bacbb9c90f6f2ee0db54717d35"],["/articles/Luogu-P4276/index.html","d7c57c886b0c2e7cc643900dacf0e2cf"],["/articles/Manacher/index.html","4b31231cecd181e8aa8cf337813abe25"],["/articles/Minimum-spanning-tree/index.html","7dd3e331cb1415f96af59e337383ad52"],["/articles/Mobius1/index.html","f90fadd812b5ad25e2f74a65a27073cd"],["/articles/NOI2010-Plant/index.html","5c13c9eee04579fb6db8939ea33aaf93"],["/articles/Network-flow-Algorithms/index.html","0e85558649306f866b9d3b217aee5757"],["/articles/Network-flow-start/index.html","21d40de4a97e6abc2a64dfb1dbad3882"],["/articles/OI常数优化-进阶/index.html","4a3ad23b059893cea04c11846fdca942"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","ae7e96676f38165e718678b3ec151f81"],["/articles/P1984-SDOI2008-Water/index.html","15b1e74c8fe1a89a30cd004fdb0aed32"],["/articles/P2018/index.html","f2b56f5590b0cce29e3e3b1a11cfece2"],["/articles/P3933Chtholly/index.html","199b8e4ec14781a3cd171154cc4234d4"],["/articles/Partitioned-Algorithm/index.html","c37df1f86dff25f8d5fd4e1410c13f93"],["/articles/RP-introduction/index.html","5077598061152867148b81dba1f2fe1c"],["/articles/Sandaram/index.html","0ae0a375df49ecf4b19f0585827b217a"],["/articles/SegmentTree/index.html","bbe73db3c1ef3e59d640fe9e3c5d6894"],["/articles/Segt-in-Treap/index.html","7d5375b7125745a4b7d30d8a59f3333b"],["/articles/ShqProblem1/index.html","2b1d3dcd12ead616a22921b872da2f6a"],["/articles/TreeArray/index.html","055a620c63532cb45bac61ad6a1ae19b"],["/articles/TreeArray2/index.html","7261bc8baa8e800e1e5577e18ed2750f"],["/articles/Union-find-sets/index.html","61ed8c1e72d435947aaf59aa4df408b6"],["/articles/ZJOI2006-书架/index.html","2542652013051450a17d21c27af873a4"],["/articles/ZJOI2007-矩阵游戏/index.html","b666fc8ef572a1e2a69467912b7fc8f2"],["/articles/a-bproblem/index.html","22ead510c272f5a505ad8daf00c7afe2"],["/articles/aboutBlog/index.html","fdf99274bea08961b962aa0409875198"],["/articles/aboutgit/index.html","d801f6e5afe873236c74ce5b90975640"],["/articles/autoAC-lemon/index.html","07d2c237f342177fd1a8b00dfd0fe89d"],["/articles/bzoj-3337/index.html","f6a97364ab2c395bb37f148fcb97b6b4"],["/articles/cppteach/index.html","e006d1d613273c830e46549353edd255"],["/articles/css-QWQ/index.html","2a1b528e4d499a3aa382c20b475e4018"],["/articles/dijkstra-spfa/index.html","e5f0ab8b32edf5954ca588dd23eca112"],["/articles/dijkstra/index.html","9c80e28e60f5630620a0dc9411ad3e07"],["/articles/dinic/index.html","2e6d20324a62ed86ee0c90b2c71102e4"],["/articles/duliu/index.html","84ab8f65630b5b0d0de7a2cb32a68131"],["/articles/dynamic-planning/index.html","ec3d69f013c36d6d762fdfedb5edb049"],["/articles/elementaryos/index.html","803e6bc6be0efe3057bad6058523e873"],["/articles/er-fen-tu/index.html","589efb1dcaa7cddf0718b5ff939f5a49"],["/articles/fhq-treap/index.html","ce81da4d813291c8713d72ce0dcdffa2"],["/articles/group-theory/index.html","a2898e3a0caa037749d19fdcc4820d16"],["/articles/lgy-from/index.html","df3feb6893285c273c9cec7f3ac70c33"],["/articles/linear-basis/index.html","20715f09980b7a695a1fe26b2adf8916"],["/articles/lyoi-Poetry/index.html","6e3529b3db0a5f672d3661a02330004a"],["/articles/lyyz-test-2018-5-19/index.html","d04f6b2da58cec3029e66e92e060be0a"],["/articles/markdown/index.html","2eab3de5a1d6e1e427c3321e1591e408"],["/articles/moban/index.html","50f3ce4d2b5f939214eba4db6c986634"],["/articles/poem1/index.html","b6b46e2e1fd623fcc55d0c7231f743cb"],["/articles/prims/index.html","c8a03d1e632f3fc4d46821bc75082581"],["/articles/python1/index.html","7e1ea334a24c324b13dd95d760399e74"],["/articles/question-01/index.html","f3d86ced779dc473761e6a682ff758d8"],["/articles/recursion-to-no-recursion/index.html","a2836df2e6aa197da5af5d7b3a2546b2"],["/articles/scc1/index.html","fd0b5816dc5d2140d44f6f557eb00774"],["/articles/somethinks1/index.html","764d82b8170ebd44b05bea8132892756"],["/articles/terminal/index.html","b5303f9b9b9855c5314ca718155ac111"],["/articles/terminal2/index.html","f61e12031bf51f80a12cdf79ff513c04"],["/articles/test-mode/index.html","eb9e6cc82b390ea138636d904f0fab09"],["/articles/test-polyline/index.html","a5b1ef27cdeba349f7467f5e25e53534"],["/articles/treap/index.html","a96ab3fe7948b2b8ef704a65aed1b12c"],["/articles/tubaomb/index.html","29e0ee82c22d456be040ae3f3e896f7b"],["/articles/use-hexo/index.html","1cc8ac8c02d0691213dd486fffe264b2"],["/articles/use-hexo2/index.html","8b095a860aa5908326b4de6d82a192ed"],["/articles/zkw-tree-algorithm/index.html","64f2ac8305ac8598bdea4263180d0b26"],["/articles/zzWA/index.html","0456a1fa38f8aa4e62d3b621286533b4"],["/articles/「LYOI2016-Summer」一次函数/index.html","45a5c1e52944aab814168272b524500f"],["/articles/主席树详解/index.html","c84d20f67f1178f0a45c1cdc59329b66"],["/articles/分块-P1471/index.html","cc17c91779316b871e75afcee1763b56"],["/articles/可持久化并查集-rope/index.html","291b8f5e21dcd8953b7eccc6e1708f2a"],["/articles/复数表示/index.html","afc2b3cfb0fae7bccb369c9dc4616bb8"],["/articles/洲阁筛/index.html","c26393bd804e93c986f9d03f6b7a7c6a"],["/articles/生成函数/index.html","214f977d37f15ab146118949c0a7b442"],["/articles/网络流-二分图最大匹配/index.html","945aad7eadca254dc8d6794dabc4d9cf"],["/articles/自然数的和/index.html","719beb0a2b455848d8a31e0f780b7392"],["/categories/OI/index.html","77cbd38d94883a6dd48fe6f1b120536c"],["/categories/OI/page/2/index.html","53f33c5e6c2d72d6e7454afd260fb0d1"],["/categories/OI/page/3/index.html","3bf9bfa4e1cf173d77451c92ad944e32"],["/categories/OI/page/4/index.html","1f185dc0c8566a51eeda4e74a7823048"],["/categories/OI/page/5/index.html","7b28d1e8c3e3c096974b5cba48a173b3"],["/categories/OI/page/6/index.html","18451d0136df752f398b6f214735c21d"],["/categories/OI/page/7/index.html","a5005172418f62a906af19f79c77b454"],["/categories/OI/page/8/index.html","da25dc409dacbd5cb4b6ba04253ec791"],["/categories/hexo/index.html","7b1112504585bba2e722ec0bb8c35f0f"],["/categories/index.html","9dc7cc7ad3826d60abc048dfd234d11d"],["/categories/随笔/index.html","91446b9b552e529d57b10e3e7086e767"],["/comments/index.html","82c4131801b8dd6c62fef4626e7827e6"],["/css/main.css","2440f6889610d8984f8287812841ae20"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","f451801a6dcaff90bfd842b018f7bedd"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","0910b9e3fe0a311776c60582ebe90ffe"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","63a303a2a57150826cc2d0bfd9fb75bf"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/2/index.html","ee0eeb808451f90150717324f1a0efe4"],["/page/3/index.html","ee5c8c0ea5c260c857cd76cb8ef5fd67"],["/page/4/index.html","2ed68c8bc8097f0806493a21467bae4c"],["/page/5/index.html","c090d7e2abb33b2ce535fa145fd2e359"],["/page/6/index.html","ae04b56ba58d5fef66ae62794bcb034b"],["/page/7/index.html","e419f324456fb46efc30728700e0b2ae"],["/page/8/index.html","dcc4301858af53770690b3585fd89ddc"],["/page/9/index.html","8cd6dcd82dfc766d436a24749149cacd"],["/photos/index.html","193ee58bf017143968cb202562432afd"],["/remittance/index.html","09ffea661a8978c40f88122d33717003"],["/sw-register.js","62b481a217dcd64cf34ae64211b64629"],["/tags/AC自动机/index.html","3a8b418ace9837815f65c95df7d63534"],["/tags/Algorithm/index.html","6f2a97031b96a51edeb49fbcd0a063dc"],["/tags/Algorithm/page/2/index.html","d9a151e607dd6f274c56030f8d8a5dc2"],["/tags/Algorithm/page/3/index.html","4a55bc71251e64730838e656f5f727ad"],["/tags/Blog/index.html","660067cb5e4652344c9c00044fc3e4c9"],["/tags/C-11/index.html","60fd2c6757be8645ae55a7b21d5343a6"],["/tags/Chtholly/index.html","bc27369c02b619e881fde779034c7668"],["/tags/DFT/index.html","18bc7c9a803c9fa0152cef4f54267f00"],["/tags/DP/index.html","411dba9b15418f8877cdd8fe2219602f"],["/tags/Dinic/index.html","4d091c9ba308a18ba3877c84406e5ae4"],["/tags/EK/index.html","3f49c0c15bf8e88d379ac15e186b6b99"],["/tags/EK算法/index.html","35f2d3c6c716240d0ab1ea858ba99c8e"],["/tags/FFT/index.html","b6b8d50803160975f34a17b0cb609c43"],["/tags/FF方法/index.html","03e6e80cfca3efd12291da8e9c71a7b4"],["/tags/Ford/index.html","e6a34aa6eaf93efdcaf306d3db78cd01"],["/tags/HLPP/index.html","909ca94746422730f0a042faa53015e3"],["/tags/IDFT/index.html","7850a801cc085c774c20f14ad943ea9b"],["/tags/ISAP/index.html","7097e2223d200617f6037f862e9b06be"],["/tags/JSOI/index.html","d362a1bbba32ae3dbff8faf53c1c5f78"],["/tags/KMP/index.html","2c73d2906a3da835ca4a9d06a0108730"],["/tags/KMP自动机/index.html","b4043f887ab9903899ef031ec8a811e3"],["/tags/LYOI/index.html","1cfaa2582dca03f7bbe3af5a42cdf8a1"],["/tags/Lemon/index.html","f5c66231ff0ed7cc942e0c7ce2c6a1ec"],["/tags/Lgy/index.html","4617df0cb6ead7c95d520802f34f1949"],["/tags/Lucas/index.html","a55003a5a8b4b548fe554b1039ec405d"],["/tags/Luogu/index.html","4f41633a22e009f3a06a3b3002562c6e"],["/tags/Manacher/index.html","c6e7992be89da171b582680c4eade9af"],["/tags/NOI/index.html","7176cb3ac905f7f33aab0f88261ab189"],["/tags/NOIP/index.html","f5ba369a4b3011792cc637e72beddc59"],["/tags/NOI导刊/index.html","4864895113832d15b48e29c1329c39c9"],["/tags/NTT/index.html","544aea7b9979cd86c87fe6630f4d9355"],["/tags/OI/index.html","2f5abf2ca2e43bc1fe6c53ce8008cb62"],["/tags/Problem/index.html","dc77cbaa36dceaeee7934a031bc8d34c"],["/tags/Problems/index.html","7ea6cd17c05cb8aa6a0f83d733380707"],["/tags/RP/index.html","29f7e17bb7138a4d319527e806ee91bd"],["/tags/SAP/index.html","6776221c89ac3d6f1455655b250ebef5"],["/tags/STL/index.html","b070f12baf068cbddadbd069064158f3"],["/tags/Splay/index.html","f7887ee63e701babb9e13038e6e77bb3"],["/tags/Tarjian/index.html","0120edae0e137524c0d328c01d6e8fd1"],["/tags/Treap/index.html","a83ecbfaf41149052cda86690312228b"],["/tags/Trie/index.html","310ca88f4cb91c5423d1480c1abd7d8b"],["/tags/USACO/index.html","55a1263824eb061a65ece71582933936"],["/tags/ZJOI/index.html","e5c89b1cfcc5e2e10be7865bed3d1870"],["/tags/blog/index.html","53f048e25f8601c1b8ca624505ed94b7"],["/tags/bzoj/index.html","bf96fd5e58efa08b1f27cc010d1328be"],["/tags/css/index.html","883e8c8ed913a9bee08c007537a50117"],["/tags/dijkstra/index.html","778c80795138ab6d5e73f4746e823e74"],["/tags/dinic/index.html","de03b830e8fe5077dec98df8dde639a5"],["/tags/fhq-treap/index.html","d303b3a57d964c4c9d299c00212a07ab"],["/tags/gcd/index.html","4da0b016786276fbc18d7cc8d4b00bab"],["/tags/git/index.html","a0db21d3cc504d65e360b6039f47991d"],["/tags/hash/index.html","5c7b9484cd381945d75461496c25277c"],["/tags/hexo/index.html","00fa99ab2c79f6911c7cc16cbe401b1c"],["/tags/html/index.html","302f4e573fa496871451b9bd4e89668e"],["/tags/index.html","dd0ccc3cdb0fa9ca84074dd1064d1381"],["/tags/lambda/index.html","3128557eddb5b4a6aa231b26d968989d"],["/tags/luogu/index.html","ece86418c403b95c9964ee06714f556e"],["/tags/lyoi/index.html","318dc4f2e4656fa0280d04b5ade2e295"],["/tags/markdown/index.html","1b17043b699c86a7bdfa06ab0254746d"],["/tags/problem/index.html","7df37864c134800071515b284714ca02"],["/tags/python/index.html","8cfb33144763cc3ef2122eb2d697c361"],["/tags/qbxt/index.html","a25f8e889a384d2f4c0d2933bf7bc285"],["/tags/rope/index.html","0dbd57aa248182b4894f0b20192da8b7"],["/tags/spfa/index.html","9c71461d95b8f7634cfd2d9677581743"],["/tags/system/index.html","8858bacf3e160d1313db0b3a452099e1"],["/tags/terminal/index.html","f0defd8ab6449805a170c28fd4d2b54b"],["/tags/zjoi/index.html","2d569436ee952984289a59adc4e4d435"],["/tags/zkw线段树/index.html","3a8c09f8a18cda1d30b23747e88fc410"],["/tags/临沂一中/index.html","9471444f100a7d8e9e99a6db4609c9c0"],["/tags/主席树/index.html","4b7802978965e063433a233ec4f3a4ae"],["/tags/乱搞/index.html","2a5c5be5c8528b16c1c1d58a01c510c0"],["/tags/二分/index.html","ffe492c4bed237f864cfa98e87d526cc"],["/tags/二分图/index.html","c3edd03f4cd31b897f2e5079afe161c3"],["/tags/二分图匹配/index.html","386455079ad8c6a796d5e613f6a7a17e"],["/tags/二分图最大匹配/index.html","4c5b0b1985be4a572621f03ee0e681dc"],["/tags/二叉搜索树/index.html","eeb7ed8917c70eed634c5f1bdd0ad4e3"],["/tags/二叉树/index.html","a20e7fd48605d45991e469f7ce1cd0fc"],["/tags/代码规范/index.html","4446174cc3243e9ddf16c83959fcfbe5"],["/tags/优化/index.html","a70dc275bd83de4c495b76759693653a"],["/tags/几何/index.html","bab2b3b94bd11f9d8f0664381417315b"],["/tags/凸包/index.html","683b7679d713cdba806cccce306769f6"],["/tags/函数/index.html","fce5b56362fe0e9fedd8d9e8e013ede2"],["/tags/分块/index.html","6913c38a10b0394aeaa7d0daf9b02c20"],["/tags/初等数论/index.html","02b5114cb957656dcbeb402e79d56019"],["/tags/前缀和/index.html","e1553af7e3349123bcfcdf12a0aa0369"],["/tags/动态规划/index.html","5dbc06afff02eec7609a67a542b2a424"],["/tags/匈牙利算法/index.html","679bb412474b6204632c5b6c79dc66b4"],["/tags/区间/index.html","d49232fc33fceae0720b27309996865f"],["/tags/区间操作/index.html","85888faa637bd5567f23690e8ead6a86"],["/tags/区间第k小/index.html","dde98b23c46da1de3623ab7d0f47428e"],["/tags/半平面交/index.html","b0f49126bdee6880238f082cccea3501"],["/tags/单源最短路径/index.html","a88d412bd4e3a42dd377a3290e573f0f"],["/tags/博弈论/index.html","a995ec6d1d29d33a8b37779776e051cf"],["/tags/卡常/index.html","21c9d53366d0b83776bad6016b305083"],["/tags/卢卡斯定理/index.html","f3d3ec3955c5a27906ef3512321b6210"],["/tags/卷积/index.html","4275bd02c0a6b681e08e23b2ffac6c4d"],["/tags/叉积/index.html","c86845351425b03f3c81aac8d3a31969"],["/tags/可持久化/index.html","1278a7e8be169b9adce8808b8ab403b5"],["/tags/向量/index.html","94b7749e26333d9bff1119b40afae41e"],["/tags/图/index.html","30b5e2490ddfa7c50913a8a1baf12864"],["/tags/图论/index.html","33dd517ebc57911ae676d2703ab11441"],["/tags/块状链表/index.html","e7bb051daea49ee28ac8872cc266fa12"],["/tags/增广路/index.html","4909c0394741736b3a1bfef2f31f8b9b"],["/tags/复平面/index.html","b56120420542cf9cd2c54d8d690b7bc7"],["/tags/复数/index.html","66a30bfcbad875bd4f3cc4c7f6b48bd3"],["/tags/字符串/index.html","ec63a021e1bc54b7dd024a4c6f7f2359"],["/tags/学习笔记/index.html","2d37c62cb9f56533bcab08ee1285af8c"],["/tags/常数优化/index.html","bed46531c06dd0d32ebfaf9ee05aa299"],["/tags/平衡树/index.html","364a5df2668e8017c6bc0d4ebe9e3890"],["/tags/平面几何/index.html","ff9760fbc158a922ebbc427c0e507f97"],["/tags/并查集/index.html","d0ed1c04ad5b5e11d7ae5994e734c0a4"],["/tags/强联通/index.html","e2ceaae7c355bd099e2d472b540d53ad"],["/tags/快速傅里叶变换/index.html","f299f8e84187b883297890d93b3ca679"],["/tags/总结/index.html","e3a1bd20d86eeef8885691ee5496a091"],["/tags/感悟/index.html","e0fead8d2c2dfa570b5137b3b75b968e"],["/tags/技巧/index.html","49d169b06018356193682f0661dfa9db"],["/tags/抽象代数/index.html","08c8e66099afbde20bd45e121726a7d7"],["/tags/教程/index.html","1acd51a3c93a199f7c0d3d332b7cc31e"],["/tags/数堆/index.html","dcd1d7a03c3f7b6074ae019bb2d57d44"],["/tags/数学/index.html","6ce26abf409e5b59984343b79ee372f4"],["/tags/数学/page/2/index.html","947043e8355cfb04d8159023ad39b68f"],["/tags/数据结构/index.html","1c48729e1c4f3ebb6a4d848c58c02057"],["/tags/数据结构/page/2/index.html","925748cbe36258581cea274bb30e0887"],["/tags/数论/index.html","7f33cc66dd6f1c6f2c44a63d7b26ec82"],["/tags/数论/page/2/index.html","a6787cdfa190d1ed6faf9f994e21150f"],["/tags/文学/index.html","fe430cbab1564e9706cd08eff98f533b"],["/tags/方差/index.html","576edd2ae2b77b93517869a310a8b9b6"],["/tags/智熄/index.html","ece51c8b9b5aed38e4456ea4e6acef36"],["/tags/暴力/index.html","daa1ba2160d7f504d247c5a8dc984fbe"],["/tags/替罪羊树/index.html","d7216470bdc9019704736d25b50b5a1d"],["/tags/最优化/index.html","0db0576e0feec96864a6418019606b81"],["/tags/最大流/index.html","d635c8bd9055064206085645387076ac"],["/tags/最小割/index.html","4939c940743a00a5714f18a41476e6e1"],["/tags/最小割最大流定理/index.html","5b5df11a27edacb5de6131add0fe8957"],["/tags/最小生成树/index.html","8c21e1a3474974a88a9bdbe2b022d8d9"],["/tags/最短路/index.html","f9a9f94e0e47fdd7ea50e9308426a849"],["/tags/最长回文子串/index.html","62f8fb488c5c4d49fee1e7138b23fdf9"],["/tags/极角/index.html","bb5964b2fe8c7d6e04d7f61c60c6e61c"],["/tags/染色/index.html","fe9280aa959a6139ab5ecc6f00c700a8"],["/tags/栈/index.html","9168873efd74f33b0448e4d3256935ef"],["/tags/树/index.html","1a5a9ebb95a8f3fda181517962eaf66d"],["/tags/树剖/index.html","218c07573f45f86e2d4c62436ae0aae3"],["/tags/树套树/index.html","700cd7cbf7a157a86f1407936f896594"],["/tags/树状数组/index.html","21dc6d86329dd553bf039d447984ee0b"],["/tags/树链剖分/index.html","77e18cb9cd5f7c5793a94cd1afe3985a"],["/tags/模拟赛/index.html","1ceb2160ea9495099b88cccc2483634a"],["/tags/模拟题/index.html","a484d4e0db40ee925c4a16d2ea545c5d"],["/tags/模板/index.html","0e6c345a5ed0038e91f3a96a5797b292"],["/tags/模版/index.html","ce386be8d47442a148431f14f2781d11"],["/tags/模版题/index.html","0bd87616156f8ef0f1372106908a4911"],["/tags/欧拉函数/index.html","13a4ee3ae03fc20b7ef60725ddd24f55"],["/tags/欧拉筛/index.html","f8a2a0875ee05abaf14d34ef21dc2cf8"],["/tags/毒瘤/index.html","b88e3339cbb7cec98bc579bd7ce8fcb1"],["/tags/测试题/index.html","c0b53d4f527eb75480129e7acd212596"],["/tags/济南/index.html","b50e6a5addf5b81af52025c873a000b1"],["/tags/清北/index.html","9c9063286bb613e5ab67b48ae14b7650"],["/tags/爆零/index.html","6db942018ce700a86d39a0c49d28e811"],["/tags/玄学/index.html","02064e3a5a956cae55a782d65dbe8479"],["/tags/珂朵莉/index.html","ad64d49c86d11d3647d48c2c7c34cd92"],["/tags/生成函数/index.html","38f5d2e8588b935800ccb371c3e1fc58"],["/tags/瞎搞/index.html","b12959bc80eebf025a4c861081dc6ba2"],["/tags/矩阵/index.html","33d0c8e9e58e35d1d926ff1a337d9d74"],["/tags/矩阵翻转/index.html","8bb54d45a7b760c890a9781a3c684947"],["/tags/算法/index.html","541d3045d01e2e5804477d70a200d00c"],["/tags/算法竞赛/index.html","057e32f45953a20ac48e183af5bc5493"],["/tags/素数/index.html","54044c9870c6ec06cd0f3156a175f67e"],["/tags/线性基/index.html","4d6d2784e4272320c02874d4c835032a"],["/tags/线性筛/index.html","78f75d9ee97d257e85d99e200b000063"],["/tags/线段树/index.html","e25036a07988cd9c313c534ade5ecd4a"],["/tags/网络流/index.html","ad070a3ac76d6429f8af7f3221bc98ea"],["/tags/群论/index.html","7f91a196cf6570438dbe8c4885c15405"],["/tags/自动机/index.html","cdfa58868734b00e38f49e06ea273ca0"],["/tags/莫比乌斯/index.html","5b58b5008090c4ed3a91dbf728974e03"],["/tags/莫比乌斯反演/index.html","d63775ef37665f7df5c09ba31c0b67cc"],["/tags/虚数/index.html","74ec567ae516627e5481bf53f100065c"],["/tags/计算几何/index.html","67daaf95dd03f894278e0cb78cd09a5a"],["/tags/证明/index.html","1bcc564b00f41bb17fc886476d3c1b7e"],["/tags/评测机/index.html","0dae4f1e151d61e7ec23b66d3ed665c8"],["/tags/诗/index.html","d68f82859680099a09aa9133fbae68e1"],["/tags/诗歌/index.html","cc65a31b05a52b28be243ffdadaeb5c0"],["/tags/费用流/index.html","2fb049c0b0e7b96612d3dd34e96c046d"],["/tags/路径压缩/index.html","6c8c8924a34c8361b783813857959d9f"],["/tags/逆元/index.html","bf26c5f9f3ce6fa9d7acd93f8f200a01"],["/tags/递归/index.html","cf5410a271b9e812b32f706345c0c4d7"],["/tags/递推/index.html","8b765fa1d02ba535a0f6c15b01743785"],["/tags/邻接表/index.html","0ba262e19ad696c44616c4473f4439ac"],["/tags/随笔/index.html","804f62e145df6a54542ecb412c0b99fb"],["/tags/集合/index.html","e6d9f64d2c65a6352537ba3507b39ec0"],["/tags/集训/index.html","652479e35ec64c05b88b7392d58018db"],["/tags/非旋Treap/index.html","4e80d081abea96be675e36007f5602b9"],["/tags/非递归/index.html","94547d9a69437e7330dd948da0472a3e"],["/tags/预留推进/index.html","0c5f5839e43a4ca6ef107e23031257b6"],["/tags/颓废/index.html","ad0a26824352c56c1de92831c9ac1b38"],["/tags/题目/index.html","66f958fde491aed27e9c043477f43477"],["/tags/题解/index.html","e63f21df031e6b1ed63780556236c0c3"],["/tags/题解/page/2/index.html","35155660d97a2e3aee6415db9a110f77"],["/tags/高性能/index.html","6601c697032ceae2157560a43f529ed1"],["/tags/高精度/index.html","ec670af96f5f798021af6b901d559062"]];
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
