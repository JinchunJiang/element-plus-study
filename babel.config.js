module.exports = {
    presets: [
        [
            "@babel/env",
            {
                loose: true,
                modules: false
            }
        ],
        "@babel/typescript"
    ],
    env: {
        utils: {
          ignore: [
            '**/*.test.ts',
            '**/*.spec.ts',
          ],
          presets: [
            [
              '@babel/env',
              {
                loose: true,
                modules: false,
              },
            ],
          ],
          plugins: [
            [
              'babel-plugin-module-resolver',
              {
                root: ['element-plus-study'],
                alias: {
                  '@element-plus': 'element-plus-study/lib',
                },
              },
            ],
          ],
        },
      },
}