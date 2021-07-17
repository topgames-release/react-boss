import requester from "../utils/requester";

export function getExpectJobs(query) {
  return requester({
    url: '/job/expect',
    method: 'get',
    params: query
  })
}

export function getJobs(query) {
  return requester({
    url: '/job/list',
    method: 'get',
    params: query
  })
}
