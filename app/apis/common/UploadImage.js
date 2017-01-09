/**
 * Created by huangxiaogang on 17/1/9.
 * 上传图片接口
 */
import { successToJson,errorToJson } from '../../response';
const resourceName = 'common';
const describe = '上传图片';
const actions = [{
        description: '上传图片',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160794',
        url: '/common/uploadImage.do.action',
        serviceApi:'/common/uploadImage.do',
        action: async function(ctx, next) {

        }
    }
];


export { actions, resourceName, describe };