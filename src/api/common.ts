import request from '@src/plugins/axios'
import cgi from '@src/config/cgi'

function loadPageNodes(cityCode: String) {
  return request({
    url: cgi.common.loadPageNodes,
    method: 'get',
    params: {
      cityCode
    }
  })
}

export default { loadPageNodes }
