/*
 * @Author: enzo
 * @Date:   2016-11-10 10:20:28
 * @Last Modified by:   slashhuang
 * @Last Modified time: 2016-1-4 16:31:09
 */
import { successToJson } from '../../response';
const resourceName = 'houseList';
const describe = '产品分类';
const actions = [{
        description: '房源列表',
        url: '/separate/:id',
        action: async function(ctx, next) {
            successToJson(ctx, {
               hello:'world'
            })
        }
    },

    {
        description: 'get detail v2',
        doc: '',
        method: 'get',
        url: '/:id',
        action: async function(ctx, next) {

        }
    }
];


export { actions, resourceName, describe };