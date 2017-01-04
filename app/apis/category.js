/*
 * @Author: enzo
 * @Date:   2016-11-10 10:20:28
 * @Last Modified by:   enzo
 * @Last Modified time: 2016-11-11 16:31:09
 */
import { successToJson } from '../response';

const resourceName = 'category';
const describe = '产品分类';
const actions = [{
        description: 'get detail v1',
        url: '/:id',
        action: async function(ctx, next) {
            successToJson(ctx, {
                test: 1
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