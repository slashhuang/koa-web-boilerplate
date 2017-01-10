/**
 * Created by huangxiaogang on 17/1/9.
 * 房源详情页面
 * 房源列表
 */
import { successToJson,errorToJson } from '../../response';
import { S_houseDetail, S_houseList } from '../../services/index.js';

const resourceName = 'houseInfo';
const describe = '查询房源明细';
const actions = [{
        description: '查询房源的详细信息',
        serviceApi:'GET /house/detail.do?id=xxx&&idType=yyy',
        url: '/detail.action',
    /**
     * id：房源或者房间Id
     * idType：id的类别  1：房源；2：房间
     * @param ctx
     * @param next
     */
        action: async function(ctx, next) {
            let {id,idType} = ctx.query;
            try{
               let detailData = await S_houseDetail({
                   id,
                   idType
               });
               successToJson(ctx, detailData)
            }catch(err){
                errorToJson(ctx,400,err);
            }
        }
    },
    {
        description: '房源列表',
        url: '/list.action',
        serviceApi:'/house/list.action?cityId=XX&townId=YY&estateId=TT&rentType=ZZ&houseStatus=WW&startTime=AA&endTime=BB',
        action: async function(ctx, next) {
            let {
                cityId,
                townId,
                rentType,
                houseStatus } = ctx.query;
            try{
                let houseList = await S_houseList();
                successToJson(ctx,houseList)
            }catch(err){
                errorToJson(ctx,400,err);
            }
        }
    }
];


export { actions, resourceName, describe };