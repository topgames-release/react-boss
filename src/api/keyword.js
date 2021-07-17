import requester from "../utils/requester";

export function getKeywords(query) {
  return requester({
    url: '/keyword/list',
    method: 'get',
    params: query
  })
}
