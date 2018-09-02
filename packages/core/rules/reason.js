module.exports = config => {
    config.module
        .rule('reason')
        .test(/\.(re|ml)$/)
        .exclude.add(/node_modules/)
        .end()
        .use('bs-loader')
        .loader('../../bs-loader');
};
