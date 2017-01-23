/**
 * Created by huangxiaogang on 17/1/23.
 * 统一包裹action的处理行为
 */
import { successToJson,errorToJson } from '../response';

exports.wrapperActionHandler=(action)=>async (ctx,next)=>{
    let data = await action(ctx,next);
    //抛错
    if(data.err){
        errorToJson(ctx,400,data.err);
    }else {
        successToJson(ctx, data)
    }
};


