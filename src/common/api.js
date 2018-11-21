import r from './request'
export const login = p => r.post('api/pc/article/login', p)
// export const login = p => r.post('api/v2/customer/login', p)
export const getList = p => r.get('api/pc/article', {params: p})
export const newMessage = p => r.post('api/v2/article/release', p)
export const newFun = p => r.post('api/v2/entertainment/release', p)
export const delMessgeOrFun = p => r.delete('api/pc/article', {data: p})
export const detail = p => r.get('api/pc/article/detail', {params: p})