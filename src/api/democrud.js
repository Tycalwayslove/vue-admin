import request from "@/utils/request";
// 数据列表
export function getDemoList(params) {
  return request({
    url: "/democrud/datalist",
    method: "get",
    params
  });
}
删除数据;
export function deleteData(id) {
  return request({
    url: `/delete/${id}`,
    method: "post"
  });
}
// 添加数据
export function addData(params) {
  return request({
    url: "/add",
    method: "post",
    params
  });
}
// 更新数据
export function updateDate(id) {
  return request({
    url: `/updateL/${id}`,
    method: "post"
  });
}
