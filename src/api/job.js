import requester from "../utils/requester";

export function getJobs(query) {
  return requester({
    url: '/job/list',
    method: 'get',
    params: query
  })
}
