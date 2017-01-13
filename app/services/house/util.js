/**
 * Created by slashhuang on 17/1/13.
 * 工具相关
 */

exports.U_transStringToBinary=(data)=>{
    let decimalToBinaryData = (0+data).toString(2);
    let binaryArr = decimalToBinaryData.split('');
    let cache = [].slice.call(binaryArr);
    /**
     * 15 => '1111' => [1,2,4,8]
     */
    return binaryArr.reduce((pre,cur,index)=>{
            let startData = cache.pop();
            if(startData=='1'){
                pre.push(Math.pow(2,index))
            }
            return pre
        },[])
};