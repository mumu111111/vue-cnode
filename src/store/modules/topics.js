import topics from '../../api/topics'

const state = {
    topics: []
};

const getters = {};

const mutations = {
    setTopics(state, playload) {
        state.topics = playload;
    }
};

const actions = {
    async getTopics({ commit }, { page, tab, limit, mdrender }) {
        let res = await topics.getTopics({ page, tab, limit, mdrender });
        commit('setTopics', res.data);
        return res;
    },
    async getTopicById({ commit }, { topicId, mdrender, accesstoken }) {
        let res = await topics.getTopicById({ topicId, mdrender, accesstoken });
        return res;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
} 