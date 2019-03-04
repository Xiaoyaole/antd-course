export default {
    singular: true,
    routes:[{
        path:'/',
        component:'./HelloWorld',
    }],
    plugins:[
        ['umi-plugin-react',{
            //暂未添加配置，不会起作用，会在后续按照需求打开相应的需求
        }],
    ],
};