export default {
    state: {
        todos: [],
        user: {},
        isLogged: false,
        token: ''
    },
    mutations: {
        // STATE_ADD_TODO(state, tdo) {
        //     state.todos.push(tdo);
        // },
        // STATE_REMOVE_TODO(state, index) {
        //     arr.splice(index, 1);
        // },
        STATE_ADD_USER(state, tdo) {
            state.user = tdo;
        },
        STATE_REMOVE_USER(state) {
            state.user = {};
        },
        STATE_ADD_LOGGED(state) {
            state.isLogged = true;
        },
        STATE_REMOVE_LOGGED(state) {
            state.isLogged = false;
        },
        STATE_ADD_TOKEN(state, tdo) {
            state.token = tdo;
        },
        STATE_REMOVE_TOKEN(state) {
            state.token = '';
        }
    },
    actions: {
        // ADD_TODO(context, tdo) {
        //     context.commit('STATE_ADD_TODO', tdo);
        // },
        // REMOVE_TODO(context, index) {
        //     context.commit('STATE_REMOVE_TODO', index);
        // },
        ADD_USER(context, tdo) {
            context.commit('STATE_ADD_USER', tdo);
        },
        REMOVE_USER(context) {
            context.commit('STATE_REMOVE_USER');
        },
        ADD_LOGGED(context, tdo) {
            context.commit('STATE_ADD_LOGGED');
        },
        REMOVE_LOGGED(context) {
            context.commit('STATE_REMOVE_LOGGED');
        },
        ADD_TOKEN(context, tdo) {
            context.commit('STATE_ADD_TOKEN', tdo);
        },
        REMOVE_TOKEN(context) {
            context.commit('STATE_REMOVE_TOKEN');
        }
    },
    getters: {
        todos: state => state.todos,
        user: state => state.user,
        isLogged: state => state.isLogged,
        token: state => state.token,
    }
}