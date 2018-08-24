const getDeployConfig = (data) => {
    let config = {
        // 是否自动部署
        enable: false
    };
    if (data && data.commits && data.commits.length >=0) {
        let msg = data.commits[0].message;
        if (msg.indexOf('__DEPLOY__') >= 0) {
            config = {
                mailTo: 'wlinfei@sina.com',
                enable: true,
                // 上传的容器盒子，不填为随机路径
                folder: '',
                dir: '',
                pattern: '**/*',
                // 是否强制替换已有文件
                replace: true,
                // 是否启用缓存
                cache: true,
                maxCount:1300,
            }
        }
    }
    return config;
};
const getDeployConfig2 = (data) => {
    let config = {
        // 是否自动部署
        enable: false
    };
    if (data && data.commits && data.commits.length >=0) {
        let msg = data.commits[0].message;
        if (msg.indexOf('__DEPLOY__') >= 0) {
            config = {
                mailTo: 'wlinfei@sina.com',
                enable: true,
                // 上传的容器盒子，不填为随机路径
                folder: '',
                dir: '',
                pattern: '!(_webhook_)',
                // 是否强制替换已有文件
                replace: true,
                // 是否启用缓存
                cache: true,
                maxCount:1300,
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
                // 上传的容器盒子，不填为随机路径
                folder: '',
                dir: '',
                pattern: '**/*',
                // 是否强制替换已有文件
                replace: true,
                // 是否启用缓存
                cache: true,
                maxCount:1000,
            }
        }
    }
    return config;
};

module.exports = {
    deployer: [
        getDeployConfig,
        getDeployConfig2
    ],
    ftpDeployer: [
        getFTPDeployConfig
    ]
};
