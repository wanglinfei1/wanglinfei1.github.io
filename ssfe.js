const getDeployConfig = (data) => {
    let config = {
        // 是否启动部署
        enable: false
    };
    if (data && data.commits && data.commits.length >=0) {
        let msg = data.commits[0].message;
        if (msg.indexOf('__DEPLOY__') >= 0) {
            config = {
                mailTo: '',
                enable: true,
                // 不设置 folder, 会上传到随机目录
                folder: '',
                dir: '',
                pattern: '**/*',
                // 建议设置为 false ，不强制替换文件；除非你知道你要替换哪些文件
                replace: false,
                // 是否使用缓存，默认为 true 缓存一年；false 缓存一分钟
                cache: true,
                maxCount:1000
            }
        }
    }
    return config;
};
let getFTPDeployConfig = (data) => {
    let config = {
        enable: false
    };
    if (data && data.commits && data.commits.length > 0) {
        const msg = data.commits[0].message;
        if (msg.indexOf('__FTPDEPLOY__') >=0) {
            config = {
                enable: true,
                // 不设置 folder, 会上传到随机目录
                folder: '',
                dir: '',
                pattern: '**/*',
                // 建议设置为 false ，不强制替换文件；除非你知道你要替换哪些文件
                replace: true,
                // 是否使用缓存，默认为 true 缓存一年；false 缓存一分钟
                cache: true,
                maxCount:1000
            }
        }
    }
    return config;
};

module.exports = {
    deployer: [
        getDeployConfig
    ],
    // ftpDeployer: [
    //     getFTPDeployConfig
    // ]
};
