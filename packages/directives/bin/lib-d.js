#!/usr/bin/env node
'use strict';

import { add, update } from '../node/cli.js';
const curUrl = process.cwd();
const argv = process.argv.slice(2);
const type = argv[0];
const catalogue = argv[1];
if (catalogue) {
    if (type == 'a') {
        add(curUrl, catalogue, argv[2]);
    } else if (type == 'u') {
        if (argv[2]) {
            update(curUrl, catalogue, argv[2]);
        } else {
            console.log('缺少更新后的目录名称');
        }
    } else {
        console.log('执行类型错误，a 新建，u 更新');
    }
} else {
    console.log('没有找到要执行的目录名称');
}
