import request from '../helpers/request.js'

const URL= {
    GET_TOPICS: './topics',
    GET_TOPIC_ID: '/topic/:id'
}

export default{
    getTopics({page=1, tab, limit=20, mdrender= true } = {page:1, limit: 20, mdrender: true}){
        return request({
            methos: 'GET',
            url: URL.GET_TOPICS,
            data: {page, tab, limit, mdrender}
        })
    },
    getTopicById({ topicId, mdrender= true, accesstoken } = {mdrender: true}){
        return request({
            method: 'GET',
            url: URL.GET_TOPIC_ID.replace(':id', topicId),
            data: {mdrender, accesstoken}
        })
    }
}
