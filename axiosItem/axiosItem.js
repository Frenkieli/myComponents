// axios統一包成一個物件
var axiosItem = (function () {
  let _get = function (url) {
    return new Promise(async function (resolve, reject) {
      let result = await axios({
        method: 'get',
        url: url,
      })
      resolve(result);
    })
  }
  let _post = function (url, data) {
    return new Promise(async function (resolve, reject) {
      let result = await axios({
        method: 'post',
        url: url,
        data: data,
      })
      resolve(result);
    })
  }
  let _put = function (url, data) {
    return new Promise(async function (resolve, reject) {
      let result = await axios({
        method: 'put',
        url: url,
        data: data,
      })
      resolve(result);
    })
  }
  let _delete = function (url) {
    return new Promise(async function (resolve, reject) {
      let result = await axios({
        method: 'delete',
        url: url,
      })
      resolve(result);
    })
  }
  // _deleteFile(url,data){
  //   return new Promise(async function(resolve,reject){
  //     let result = await axios({
  //       method: 'delete',
  //       url: url,
  //       data:data,
  //       headers:{
  //         'authorization': 'Bearer ' + token_key,
  //       }
  //     })
  //     resolve(result);
  //   })
  // }
  return {
    get: _get,
    post: _post,
    put: _put,
    delete: _delete,
  };
}());