import configJson from '../config.json';

export const config = {
    dir: '../packages/',

    extensions: ['vue', 'ts'],

    alias: configJson.alias,

    onlyAlias: false,

    aliass: {},

    matchs: [],

    matchexts: ['/src/index.vue', '/src/index.ts'],

    directives: 'directives',

    isCache: true,

    startss: [],

    filtes: ['router-link', 'router-view'],

    urlprefix: true,

    isJson: true,

    jsonName: './components.config.json',
};
