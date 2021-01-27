// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       {
  //         path: '/demo',
  //         component: './demo',
  //       },
  //       {
  //         path: '/class/index',
  //         component: './class/index',
  //       },
  //       {
  //         path: '/',
  //         component: '../pages/index',
  //       },
  //     ],
  //   },
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true, // 这个开启按需加载，默认是只支持按页面来按需的，粒度较粗
        title: 'umi2',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
