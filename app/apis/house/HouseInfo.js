/**
 * Created by huangxiaogang on 17/1/9.
 * 房源详情页面
 * 房源列表
 */
import { successToJson,errorToJson } from '../../response';
import { S_houseDetail, S_houseList} from '../../services/index.js';

const resourceName = 'houseInfo';
const describe = '查询房源明细';
const actions = [{
        description: '查询房源的详细信息',
        serviceApi:'GET /house/detail.do?id=xxx&&idType=yyy',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160741',
        url: '/detail.action',
    /**
     * id：房源或者房间Id
     * idType：id的类别  1：房源；2：房间
     * @param ctx
     * @param next
     */
        action: async function(ctx, next) {
            let {id,idType} = ctx.query;
            return  await S_houseDetail({
                id,
                idType
            })
        }
    },
    {
        description: '房源列表',
        url: '/list.action',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160673',
        serviceApi:'/house/list.action?cityId=XX&townId=YY&estateId=TT&rentType=ZZ&houseStatus=WW&startTime=AA&endTime=BB',
        action: async function(ctx, next) {
            return  await S_houseList(ctx.query);
        }
    }
];


export { actions, resourceName, describe };