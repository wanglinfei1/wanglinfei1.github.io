const getDeployConfig = (data) => {
    let config = {
        // �Ƿ���������
        enable: false
    };
    if (data && data.commits && data.commits.length >=0) {
        let msg = data.commits[0].message;
        if (msg.indexOf('__DEPLOY__') >= 0) {
            config = {
                mailTo: '',
                enable: true,
                // ������ folder, ���ϴ������Ŀ¼
                folder: '',
                dir: '',
                pattern: '**/*',
                // ��������Ϊ false ����ǿ���滻�ļ���������֪����Ҫ�滻��Щ�ļ�
                replace: false,
                // �Ƿ�ʹ�û��棬Ĭ��Ϊ true ����һ�ꣻfalse ����һ����
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
                // ������ folder, ���ϴ������Ŀ¼
                folder: '',
                dir: '',
                pattern: '**/*',
                // ��������Ϊ false ����ǿ���滻�ļ���������֪����Ҫ�滻��Щ�ļ�
                replace: true,
                // �Ƿ�ʹ�û��棬Ĭ��Ϊ true ����һ�ꣻfalse ����һ����
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
