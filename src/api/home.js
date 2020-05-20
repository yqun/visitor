import axios from '../request/request'
export function getToken(data) {
  return axios.get(`/wx/getToken.do`, {params: data});
}
export function getUserInfo(data) {
  return axios.post(`/wx/findWxAccountByToken.do`, data)
}
