import requester from "../utils/requester";

export function getFilters(query) {
  return requester({
    url: '/filter/list',
    method: 'get',
    params: query
  })
}
