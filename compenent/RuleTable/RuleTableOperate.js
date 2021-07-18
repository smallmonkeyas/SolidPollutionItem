/*
 * @Author: your name
 * @Date: 2021-07-12 00:24:09
 * @LastEditTime: 2021-07-14 13:04:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SolidPollutionItem\scx\RuleTable\RuleTableOperate.js
 */
// TODO: 引入第三方库/资源文件
import React, { Component } from 'react';
import $ from '../jquery/dist/jquery';
// import data from 'resource/App_6b8d684522bb4c3eb492e1a02110eb80/dataResource/企业规则库1.9.json'
window.$ =$;
//TODO: 删除原有规则库


// window.jquery = jquery;
console.log('$',$)
$.getJSON('resource/App_6b8d684522bb4c3eb492e1a02110eb80/dataResource/企业规则库1.9.json',res=>{
    console.log(res)
})
class RuleTableOperate extends Component {
    render() {
        return (
            <div>
                Please enjoy your coding!
            </div>
        );
    }
}

export default RuleTableOperate;